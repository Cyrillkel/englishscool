import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostById } from "@/entities/post";
import { AdminPostEditorPage } from "@/views/admin";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Редактирование поста — Админка",
  robots: { index: false, follow: false },
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditPost({ params }: Props) {
  const { id } = await params;
  const post = getPostById(Number(id));
  if (!post) notFound();

  return <AdminPostEditorPage post={post} />;
}
