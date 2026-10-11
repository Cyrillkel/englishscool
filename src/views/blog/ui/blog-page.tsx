import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/entities/post";
import { ImagePlaceholder, Reveal, Section, SectionHeading } from "@/shared/ui";
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

export function BlogPage({ posts }: { posts: Post[] }) {
  return (
    <>
      <Header />
      <main>
        <Section>
          <SectionHeading
            eyebrow={{ word: "notes", sound: "nəʊts", meaning: "заметки" }}
            title="Заметки о языках, психологии и переезде"
            subtitle="Истории учеников, разборы ошибок и всё, что помогает заговорить и адаптироваться в новой стране."
          />

          {posts.length === 0 ? (
            <p className="text-center text-ink-soft">
              Первый пост скоро появится — загляните позже.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <Reveal key={post.id} as="article" delay={index * 70}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm"
                  >
                    {post.coverImage ? (
                      <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder
                        emoji="📝"
                        label="Без фото"
                        className="aspect-video w-full"
                      />
                    )}
                    <div className="flex grow flex-col p-6">
                      {post.publishedAt && (
                        <p className="mb-2 text-xs font-semibold text-ink-soft">
                          {formatDate(post.publishedAt)}
                        </p>
                      )}
                      <h3 className="text-lg font-bold group-hover:text-accent">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="mt-2 grow text-sm leading-relaxed text-ink-soft">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </>
  );
}
