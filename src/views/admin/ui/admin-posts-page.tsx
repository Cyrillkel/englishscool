import Link from "next/link";
import { deletePostAction, type Post } from "@/entities/post";
import { logoutAction } from "@/features/admin-auth";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function AdminPostsPage({ posts }: { posts: Post[] }) {
  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight">Посты блога</h1>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/posts/new"
            className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-cream hover:bg-ink/85"
          >
            + Новый пост
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="text-sm font-semibold text-ink-soft hover:text-ink"
            >
              Выйти
            </button>
          </form>
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="text-ink-soft">Постов пока нет — создайте первый.</p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm"
            >
              <div className="min-w-0">
                <p className="truncate font-semibold">{post.title}</p>
                <p className="text-sm text-ink-soft">
                  {post.published ? "Опубликован" : "Черновик"} ·{" "}
                  {formatDate(post.updatedAt)}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-4">
                <Link
                  href={`/admin/posts/${post.id}`}
                  className="text-sm font-semibold text-accent hover:underline"
                >
                  Редактировать
                </Link>
                <form action={deletePostAction.bind(null, post.id)}>
                  <button
                    type="submit"
                    className="text-sm font-semibold text-coral hover:underline"
                  >
                    Удалить
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
