// app/components/auth/login-form.tsx
"use client";

import { useState } from "react";
import OtpInput from "./otp-input";
import OAuthButtons from "./oauth-buttons";
import {
  sendOtp,
  verifyOtp,
  loginWithPassword,
} from "@/app/(auth)/login/actions";

export default function LoginForm() {
  const [step, setStep] = useState<"email" | "otp" | "password">("email");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("email", email);

    const result = await sendOtp(formData);

    if (result.error) {
      setError(result.error);
    } else {
      setStep("otp");
    }
    setLoading(false);
  };

  const handleVerifyOtp = async (otp: string) => {
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("email", email);
    formData.append("otp", otp);

    const result = await verifyOtp(formData);

    if (result.error) {
      setError(result.error);
    }
    setLoading(false);
  };

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("email", email);

    const result = await loginWithPassword(formData);

    if (result.error) {
      setError(result.error);
    }
    setLoading(false);
  };

  const handleOtpFailed = () => {
    setStep("password");
    setError("");
  };

  if (step === "otp") {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-medium text-dark dark:text-light mb-2">
            Check your email, legend!
          </h2>
          <p className="text-sm font-light text-dark/60 dark:text-light/60 mb-4">
            We've sent a 6-digit code to{" "}
            <span className="font-medium">{email}</span>
          </p>
        </div>

        <OtpInput
          onComplete={handleVerifyOtp}
          loading={loading}
          error={error}
        />

        <div className="text-center space-y-4">
          <button
            onClick={handleOtpFailed}
            className="text-sm font-light text-dark/60 dark:text-light/60 hover:text-accent transition-all duration-500 ease-in-out"
          >
            Code not working? Try password instead
          </button>

          <button
            onClick={() => setStep("email")}
            className="text-sm font-light text-dark/60 dark:text-light/60 hover:text-accent transition-all duration-500 ease-in-out"
          >
            Use different email
          </button>
        </div>
      </div>
    );
  }

  if (step === "password") {
    return (
      <form onSubmit={handlePasswordLogin} className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-xl font-medium text-dark dark:text-light mb-2">
            No worries, mate!
          </h2>
          <p className="text-sm font-light text-dark/60 dark:text-light/60">
            Let's try with your password instead
          </p>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-dark dark:text-light mb-2"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-4 py-3 bg-light dark:bg-gray border border-dark/20 dark:border-light/20 rounded-xl text-dark dark:text-light placeholder:text-dark/60 dark:placeholder:text-light/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-500 ease-in-out"
            placeholder="Enter your password"
          />
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-accent hover:bg-accent/80 text-light font-medium rounded-xl transition-all duration-500 ease-in-out disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setStep("email")}
            className="text-sm font-light text-dark/60 dark:text-light/60 hover:text-accent transition-all duration-500 ease-in-out"
          >
            Back to email
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSendOtp} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-dark dark:text-light mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-light dark:bg-gray border border-dark/20 dark:border-light/20 rounded-xl text-dark dark:text-light placeholder:text-dark/60 dark:placeholder:text-light/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-500 ease-in-out"
            placeholder="your.email@example.com"
          />
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !email.trim()}
          className="w-full px-6 py-3 bg-accent hover:bg-accent/80 text-light font-medium rounded-xl transition-all duration-500 ease-in-out disabled:opacity-50"
        >
          {loading ? "Sending code..." : "Send login code"}
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-dark/20 dark:border-light/20" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-neutral-100 dark:bg-dark text-dark/60 dark:text-light/60 font-light">
            or continue with
          </span>
        </div>
      </div>

      <OAuthButtons />

      <div className="text-center">
        <p className="text-sm font-light text-dark/60 dark:text-light/60">
          New to fairDinkum?{" "}
          <a
            href="/register"
            className="font-medium text-accent hover:text-accent/80 transition-all duration-500 ease-in-out"
          >
            Join the community
          </a>
        </p>
      </div>
    </div>
  );
}
