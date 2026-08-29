import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // На сервере рядом с проектом лежит посторонний pnpm-lock.yaml из другого
  // репозитория — без этой опции Next.js принимает его за корень workspace
  // и трассирует файлы всей домашней директории при сборке.
  outputFileTracingRoot: path.resolve(__dirname),
  experimental: {
    // По умолчанию Server Actions режут тело запроса на 1 МБ — обычное
    // фото с телефона в это не влезает. saveUploadedImage() сама
    // ограничивает файлы 8 МБ, тут даём запас на форму целиком.
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
