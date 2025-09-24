// app/(auth)/complete-profile/page.tsx
import ProfileCompletionForm from "@/components/auth/profile-completion-form";

export default function CompleteProfilePage() {
  return (
    <main className="px-8 py-16 mb-10 max-w-md mx-auto transition-all duration-500 ease-in-out">
      <section className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-dark dark:text-light mb-2">
          Almost there, mate!
        </h1>
        <p className="text-sm font-light text-dark/60 dark:text-light/60 mb-4">
          Just a few more details to complete your fairDinkum profile
        </p>
        <div className="w-full bg-dark/20 dark:bg-light/20 rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
        <p className="mt-2 text-xs text-dark/60 dark:text-light/60">
          Step 2 of 2
        </p>
      </section>

      <ProfileCompletionForm />
    </main>
  );
}
