import { scryptSync, timingSafeEqual } from "node:crypto";

/** Формат хеша: "salt:hash" (см. scripts/hash-password.mjs). */
export function verifyPassword(password: string, storedHash: string): boolean {
  const [salt, hash] = storedHash.split(":");
  if (!salt || !hash) return false;

  const derived = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");
  if (derived.length !== expected.length) return false;

  return timingSafeEqual(derived, expected);
}
