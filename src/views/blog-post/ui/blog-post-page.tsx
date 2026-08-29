import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/entities/post";
import { Section } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

function formatDate(date: Date | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function BlogPostPage({ post }: { post: Post }) {
  return (
    <>
      <Header />
      <main>
        <Section className="pb-10">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="text-sm font-semibold text-ink-soft hover:text-ink"
            >
              ← Все посты
            </Link>
            {post.publishedAt && (
              <p className="mt-6 text-sm font-semibold text-ink-soft">
                {formatDate(post.publishedAt)}
              </p>
            )}
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
          </div>

          {post.coverImage && (
            <div className="relative mx-auto mt-8 aspect-video w-full max-w-3xl overflow-hidden rounded-3xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/*
            HTML приходит из Tiptap-редактора в закрытой /admin, которым
            пользуется только владелец сайта — не публичный ввод, поэтому
            dangerouslySetInnerHTML тут безопасен.
          */}
          <div
            className="prose prose-neutral mx-auto mt-10 max-w-2xl prose-headings:font-extrabold prose-a:text-accent"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}
