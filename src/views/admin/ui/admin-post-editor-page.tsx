import Link from "next/link";
import { createPostAction, updatePostAction, type Post } from "@/entities/post";
import { PostForm } from "@/features/post-editor";

export function AdminPostEditorPage({ post }: { post?: Post }) {
  const action = post ? updatePostAction.bind(null, post.id) : createPostAction;

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-10 sm:px-6">
      <Link
        href="/admin/posts"
        className="mb-6 inline-block text-sm font-semibold text-ink-soft hover:text-ink"
      >
        ← Все посты
      </Link>
      <h1 className="mb-8 text-2xl font-extrabold tracking-tight">
        {post ? "Редактировать пост" : "Новый пост"}
      </h1>
      <PostForm post={post} action={action} />
    </div>
  );
}
