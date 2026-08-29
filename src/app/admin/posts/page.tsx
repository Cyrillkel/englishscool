import type { Metadata } from "next";
import { getAllPosts } from "@/entities/post";
import { AdminPostsPage } from "@/views/admin";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Посты — Админка",
  robots: { index: false, follow: false },
};

export default function AdminPosts() {
  const posts = getAllPosts();
  return <AdminPostsPage posts={posts} />;
}
