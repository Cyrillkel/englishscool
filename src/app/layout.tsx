import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { site } from "@/shared/config/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const ogTitle = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://mentoralex.ru"),
  title: ogTitle,
  description: site.description,
  verification: {
    yandex: "4a55702455acb8af",
    google: "766hnVuOveOP4XtG32qgxNdLtXCNhhyjiMyz9PgRmpY",
  },
  openGraph: {
    title: ogTitle,
    description: site.description,
    url: "https://mentoralex.ru",
    siteName: site.name,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/photo_2023-09-09_02-35-11.jpg",
        width: 640,
        height: 640,
        alt: ogTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: site.description,
    images: ["/photo_2023-09-09_02-35-11.jpg"],
  },
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
