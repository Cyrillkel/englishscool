import type { Metadata } from "next";
import { AdminLoginPage } from "@/views/admin";

export const metadata: Metadata = {
  title: "Вход в админку",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLogin({ searchParams }: Props) {
  const { error } = await searchParams;
  return <AdminLoginPage hasError={Boolean(error)} />;
}
