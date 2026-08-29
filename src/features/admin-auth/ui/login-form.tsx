import { loginAction } from "../api/login-action";

export function LoginForm({ hasError }: { hasError: boolean }) {
  return (
    <form action={loginAction} className="w-full max-w-sm space-y-4">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="username"
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm font-semibold">
          Пароль
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-accent"
        />
      </div>

      {hasError && (
        <p className="text-sm font-medium text-coral">
          Неверный email или пароль.
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-full bg-ink px-6 py-3 font-semibold text-cream transition-colors hover:bg-ink/85"
      >
        Войти
      </button>
    </form>
  );
}
