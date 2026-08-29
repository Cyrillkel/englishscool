"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/shared/lib/auth";
import { saveUploadedImage } from "@/shared/lib/uploads";
import { createPost, deletePost, getPostById, updatePost } from "./posts";

async function requireAdmin() {
  const session = await auth();
  if (!session) throw new Error("Не авторизован");
}

async function resolveCoverImage(
  formData: FormData,
  existing: string | null,
): Promise<string | null> {
  const file = formData.get("coverImage");
  if (file instanceof File && file.size > 0) {
    return saveUploadedImage(file);
  }
  return existing;
}

function readPostFields(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "");
  const published = formData.get("published") === "on";

  if (!title) throw new Error("Заголовок обязателен");

  return { title, excerpt: excerpt || null, content, published };
}

export async function createPostAction(formData: FormData) {
  await requireAdmin();

  const fields = readPostFields(formData);
  const coverImage = await resolveCoverImage(formData, null);

  await createPost({ ...fields, coverImage });

  revalidatePath("/blog");
  redirect("/admin/posts");
}

export async function updatePostAction(id: number, formData: FormData) {
  await requireAdmin();

  const existing = getPostById(id);
  if (!existing) throw new Error("Пост не найден");

  const fields = readPostFields(formData);
  const coverImage = await resolveCoverImage(formData, existing.coverImage);

  await updatePost(id, { ...fields, coverImage });

  revalidatePath("/blog");
  revalidatePath(`/blog/${existing.slug}`);
  redirect("/admin/posts");
}

export async function deletePostAction(id: number) {
  await requireAdmin();

  const existing = getPostById(id);
  deletePost(id);

  revalidatePath("/blog");
  if (existing) revalidatePath(`/blog/${existing.slug}`);
  redirect("/admin/posts");
}
