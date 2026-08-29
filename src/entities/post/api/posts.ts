import { and, desc, eq } from "drizzle-orm";
import { db } from "@/shared/db/client";
import { posts } from "@/shared/db/schema";
import { slugify } from "@/shared/lib/slugify";
import type { NewPost, Post } from "../model/types";

export function getPublishedPosts(): Post[] {
  return db
    .select()
    .from(posts)
    .where(eq(posts.published, true))
    .orderBy(desc(posts.publishedAt))
    .all();
}

export function getPublishedPostBySlug(slug: string): Post | undefined {
  return db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.published, true)))
    .get();
}

export function getAllPosts(): Post[] {
  return db.select().from(posts).orderBy(desc(posts.createdAt)).all();
}

export function getPostById(id: number): Post | undefined {
  return db.select().from(posts).where(eq(posts.id, id)).get();
}

async function uniqueSlug(title: string, excludeId?: number): Promise<string> {
  const base = slugify(title) || "post";
  let candidate = base;
  let suffix = 2;

  while (true) {
    const existing = db.select().from(posts).where(eq(posts.slug, candidate)).get();
    if (!existing || existing.id === excludeId) return candidate;
    candidate = `${base}-${suffix}`;
    suffix += 1;
  }
}

export async function createPost(input: {
  title: string;
  excerpt: string | null;
  coverImage: string | null;
  content: string;
  published: boolean;
}): Promise<Post> {
  const slug = await uniqueSlug(input.title);
  const now = new Date();

  const values: NewPost = {
    slug,
    title: input.title,
    excerpt: input.excerpt,
    coverImage: input.coverImage,
    content: input.content,
    published: input.published,
    publishedAt: input.published ? now : null,
    createdAt: now,
    updatedAt: now,
  };

  return db.insert(posts).values(values).returning().get();
}

export async function updatePost(
  id: number,
  input: {
    title: string;
    excerpt: string | null;
    coverImage: string | null;
    content: string;
    published: boolean;
  },
): Promise<Post> {
  const existing = getPostById(id);
  if (!existing) throw new Error("Пост не найден");

  const slug =
    existing.title === input.title ? existing.slug : await uniqueSlug(input.title, id);

  return db
    .update(posts)
    .set({
      slug,
      title: input.title,
      excerpt: input.excerpt,
      coverImage: input.coverImage,
      content: input.content,
      published: input.published,
      publishedAt: input.published ? (existing.publishedAt ?? new Date()) : null,
      updatedAt: new Date(),
    })
    .where(eq(posts.id, id))
    .returning()
    .get();
}

export function deletePost(id: number): void {
  db.delete(posts).where(eq(posts.id, id)).run();
}
