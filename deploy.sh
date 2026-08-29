#!/usr/bin/env bash
# Скрипт деплоя: выполняется на сервере из GitHub Actions при пуше в main.
set -euo pipefail

cd /var/www/englishscool

git fetch origin main
git reset --hard origin/main

mkdir -p public/uploads .data

pnpm install --frozen-lockfile
pnpm db:migrate
pnpm build

pm2 startOrReload ecosystem.config.js
pm2 save

echo "Deploy OK: $(git rev-parse --short HEAD)"
