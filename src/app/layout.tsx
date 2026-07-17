import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { site } from "@/shared/config/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mentoralex.ru"),
  title: `${site.name} — ${site.role}`,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
