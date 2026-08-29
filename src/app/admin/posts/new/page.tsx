import type { Metadata } from "next";
import { AdminPostEditorPage } from "@/views/admin";

export const metadata: Metadata = {
  title: "Новый пост — Админка",
  robots: { index: false, follow: false },
};

export default function NewPost() {
  return <AdminPostEditorPage />;
}
