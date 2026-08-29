"use client";

import Link from "@tiptap/extension-link";
import { EditorContent, useEditor, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";

const TOOLBAR_BUTTON =
  "rounded-lg px-2.5 py-1.5 text-sm font-semibold hover:bg-cream-deep aria-pressed:bg-ink aria-pressed:text-cream";

function useHtmlValue(editor: Editor | null, defaultValue: string) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (!editor) return;
    const update = () => setValue(editor.getHTML());
    editor.on("update", update);
    return () => {
      editor.off("update", update);
    };
  }, [editor]);

  return value;
}

export function TiptapEditor({
  name,
  defaultValue,
}: {
  name: string;
  defaultValue: string;
}) {
  const editor = useEditor({
    extensions: [StarterKit, Link.configure({ openOnClick: false })],
    content: defaultValue,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose prose-neutral max-w-none min-h-64 rounded-b-2xl border border-t-0 border-ink/15 bg-white px-4 py-3 outline-none",
      },
    },
  });

  const htmlValue = useHtmlValue(editor, defaultValue);

  return (
    <div>
      <div className="flex flex-wrap gap-1 rounded-t-2xl border border-ink/15 bg-cream-deep p-2">
        <button
          type="button"
          aria-pressed={editor?.isActive("bold")}
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={TOOLBAR_BUTTON}
        >
          Жирный
        </button>
        <button
          type="button"
          aria-pressed={editor?.isActive("italic")}
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={TOOLBAR_BUTTON}
        >
          Курсив
        </button>
        <button
          type="button"
          aria-pressed={editor?.isActive("heading", { level: 2 })}
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={TOOLBAR_BUTTON}
        >
          Заголовок
        </button>
        <button
          type="button"
          aria-pressed={editor?.isActive("bulletList")}
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={TOOLBAR_BUTTON}
        >
          Список
        </button>
        <button
          type="button"
          aria-pressed={editor?.isActive("orderedList")}
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={TOOLBAR_BUTTON}
        >
          Нумер. список
        </button>
        <button
          type="button"
          aria-pressed={editor?.isActive("blockquote")}
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
          className={TOOLBAR_BUTTON}
        >
          Цитата
        </button>
        <button
          type="button"
          aria-pressed={editor?.isActive("link")}
          onClick={() => {
            const url = window.prompt("Ссылка (URL):");
            if (url) editor?.chain().focus().setLink({ href: url }).run();
          }}
          className={TOOLBAR_BUTTON}
        >
          Ссылка
        </button>
      </div>
      <EditorContent editor={editor} />
      <input type="hidden" name={name} value={htmlValue} readOnly />
    </div>
  );
}
