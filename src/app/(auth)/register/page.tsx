// app/(auth)/register/page.tsx
import RegisterForm from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <main className="px-8 py-16 mb-10 max-w-md mx-auto transition-all duration-500 ease-in-out">
      <section className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-dark dark:text-light mb-2">
          G'day, future legend!
        </h1>
        <p className="text-sm font-light text-dark/60 dark:text-light/60">
          Ready to join the fairDinkum community? Let's get you set up!
        </p>
      </section>

      <RegisterForm />
    </main>
  );
}
