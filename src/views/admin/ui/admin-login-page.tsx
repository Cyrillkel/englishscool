import { LoginForm } from "@/features/admin-auth";

export function AdminLoginPage({ hasError }: { hasError: boolean }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="w-full max-w-sm">
        <h1 className="mb-8 text-center text-2xl font-extrabold tracking-tight">
          Вход в админку
        </h1>
        <LoginForm hasError={hasError} />
      </div>
    </div>
  );
}
