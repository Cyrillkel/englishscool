import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // На сервере рядом с проектом лежит посторонний pnpm-lock.yaml из другого
  // репозитория — без этой опции Next.js принимает его за корень workspace
  // и трассирует файлы всей домашней директории при сборке.
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
