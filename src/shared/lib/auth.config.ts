import type { NextAuthConfig } from "next-auth";

/**
 * Edge-safe часть конфига Auth.js: без Credentials-провайдера (он использует
 * node:crypto для хеша пароля, что ломает сборку proxy.ts под edge-рантайм).
 * Полный конфиг с провайдером — в auth.ts, используется только в Node.js-коде
 * (Server Actions, API-роут).
 */
export const authConfig = {
  // Self-hosted (не Vercel) — без этого Auth.js в проде отклоняет запросы
  // с ошибкой UntrustedHost, так как некому подтвердить реальный хост.
  trustHost: true,
  session: { strategy: "jwt" },
  pages: { signIn: "/admin/login" },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      const isLoginPage = request.nextUrl.pathname === "/admin/login";

      if (isLoginPage) {
        if (auth) {
          return Response.redirect(
            new URL("/admin/posts", request.nextUrl.origin),
          );
        }
        return true;
      }

      return Boolean(auth);
    },
  },
} satisfies NextAuthConfig;
