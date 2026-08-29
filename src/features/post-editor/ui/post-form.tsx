import type { Post } from "@/entities/post";
import { CoverImageInput } from "./cover-image-input";
import { TiptapEditor } from "./tiptap-editor";

const INPUT_CLASS =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-accent";

export function PostForm({
  post,
  action,
}: {
  post?: Post;
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form action={action} className="max-w-2xl space-y-6">
      <div>
        <label htmlFor="title" className="mb-1.5 block text-sm font-semibold">
          Заголовок
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={post?.title}
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="mb-1.5 block text-sm font-semibold">
          Краткое описание (для карточки в списке)
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows={2}
          defaultValue={post?.excerpt ?? ""}
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="coverImage" className="mb-1.5 block text-sm font-semibold">
          Обложка
        </label>
        <CoverImageInput existingImage={post?.coverImage} />
      </div>

      <div>
        <span className="mb-1.5 block text-sm font-semibold">Текст поста</span>
        <TiptapEditor name="content" defaultValue={post?.content ?? ""} />
      </div>

      <label className="flex items-center gap-2 text-sm font-semibold">
        <input
          type="checkbox"
          name="published"
          defaultChecked={post?.published ?? false}
          className="h-4 w-4 rounded border-ink/30"
        />
        Опубликовать
      </label>

      <button
        type="submit"
        className="rounded-full bg-ink px-7 py-3 font-semibold text-cream transition-colors hover:bg-ink/85"
      >
        Сохранить
      </button>
    </form>
  );
}
