import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedPostBySlug } from "@/entities/post";
import { BlogPostPage } from "@/views/blog-post";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);
  if (!post) return {};

  const description = post.excerpt ?? undefined;

  return {
    title: `${post.title} — Alex Barybin`,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostPage post={post} />;
}
