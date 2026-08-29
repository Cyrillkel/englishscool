import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { verifyPassword } from "./password";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        login: { label: "Логин", type: "text" },
        password: { label: "Пароль", type: "password" },
      },
      authorize: async (credentials) => {
        const login = credentials?.login;
        const password = credentials?.password;
        if (typeof login !== "string" || typeof password !== "string") {
          return null;
        }

        const adminLogin = process.env.ADMIN_LOGIN;
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
        if (!adminLogin || !adminPasswordHash) {
          throw new Error(
            "ADMIN_LOGIN / ADMIN_PASSWORD_HASH не заданы в .env",
          );
        }

        if (login !== adminLogin) return null;
        if (!verifyPassword(password, adminPasswordHash)) return null;

        return { id: "admin", name: adminLogin };
      },
    }),
  ],
});
