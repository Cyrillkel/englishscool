import type { Metadata } from "next";
import { getPublishedPosts } from "@/entities/post";
import { BlogPage } from "@/views/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Блог — Alex Barybin",
  description:
    "Заметки о языках, психологии и переезде за границу от Alex Barybin.",
};

export default function Blog() {
  const posts = getPublishedPosts();
  return <BlogPage posts={posts} />;
}
