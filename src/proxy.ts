import NextAuth from "next-auth";
import { authConfig } from "@/shared/lib/auth.config";

export const proxy = NextAuth(authConfig).auth;

export const config = {
  matcher: ["/admin/:path*"],
};
