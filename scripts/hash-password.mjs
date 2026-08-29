#!/usr/bin/env node
// Генерирует хеш пароля для ADMIN_PASSWORD_HASH в .env.
// Использование: node scripts/hash-password.mjs "мой-пароль"
import { randomBytes, scryptSync } from "node:crypto";

const password = process.argv[2];

if (!password) {
  console.error('Использование: node scripts/hash-password.mjs "пароль"');
  process.exit(1);
}

const salt = randomBytes(16).toString("hex");
const hash = scryptSync(password, salt, 64).toString("hex");

console.log(`${salt}:${hash}`);
