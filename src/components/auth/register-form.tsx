// app/components/auth/register-form.tsx
"use client";

import { useState } from "react";
import { signUp } from "@/app/(auth)/register/actions";
import { validateUsername } from "@/lib/utils/validation";
import OAuthButtons from "@/components/auth/oauth-buttons";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [usernameChecking, setUsernameChecking] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }

    // Real-time username validation
    if (field === "username") {
      validateUsernameRealtime(value);
    }
  };

  const validateUsernameRealtime = async (username: string) => {
    if (!username) return;

    const validation = validateUsername(username);
    if (!validation.valid) {
      setErrors((prev) => ({ ...prev, username: validation.error }));
      return;
    }

    // Check availability
    setUsernameChecking(true);
    try {
      const response = await fetch("/api/check-username", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });

      const result = await response.json();

      if (!result.available) {
        setErrors((prev) => ({
          ...prev,
          username: "Username is already taken. Try another one!",
        }));
      }
    } catch (error) {
      // Silently fail for availability check
    } finally {
      setUsernameChecking(false);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Username validation
    const usernameValidation = validateUsername(formData.username);
    if (!usernameValidation.valid) {
      newErrors.username = usernameValidation.error;
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Date of birth validation
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    } else {
      const age =
        new Date().getFullYear() - new Date(formData.dateOfBirth).getFullYear();
      if (age < 13) {
        newErrors.dateOfBirth =
          "You must be at least 13 years old to join fairDinkum";
      } else if (age > 120) {
        newErrors.dateOfBirth = "Please enter a valid date of birth";
      }
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const submitFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitFormData.append(key, value);
    });

    const result = await signUp(submitFormData);

    if (result.error) {
      setErrors({ general: result.error });
    }

    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-dark dark:text-light mb-2"
          >
            Username
          </label>
          <div className="relative">
            <input
              id="username"
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              required
              className={`w-full px-4 py-3 bg-light dark:bg-gray border rounded-xl text-dark dark:text-light placeholder:text-dark/60 dark:placeholder:text-light/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-500 ease-in-out ${
                errors.username
                  ? "border-red-500"
                  : "border-dark/20 dark:border-light/20"
              }`}
              placeholder="your.username"
            />
            {usernameChecking && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-accent/20 border-t-accent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
          {errors.username && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.username}
            </p>
          )}
          <p className="mt-1 text-xs text-dark/60 dark:text-light/60">
            5-32 characters, letters, numbers, and dots only
          </p>
        </div>

        {/* Email */}
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
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            className={`w-full px-4 py-3 bg-light dark:bg-gray border rounded-xl text-dark dark:text-light placeholder:text-dark/60 dark:placeholder:text-light/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-500 ease-in-out ${
              errors.email
                ? "border-red-500"
                : "border-dark/20 dark:border-light/20"
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-dark dark:text-light mb-2"
          >
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            required
            max={new Date().toISOString().split("T")[0]} // Can't be future date
            className={`w-full px-4 py-3 bg-light dark:bg-gray border rounded-xl text-dark dark:text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-500 ease-in-out ${
              errors.dateOfBirth
                ? "border-red-500"
                : "border-dark/20 dark:border-light/20"
            }`}
          />
          {errors.dateOfBirth && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.dateOfBirth}
            </p>
          )}
          <p className="mt-1 text-xs text-dark/60 dark:text-light/60">
            ⚠️ Important: Your date of birth cannot be changed once set
          </p>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-dark dark:text-light mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            required
            className={`w-full px-4 py-3 bg-light dark:bg-gray border rounded-xl text-dark dark:text-light placeholder:text-dark/60 dark:placeholder:text-light/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-500 ease-in-out ${
              errors.password
                ? "border-red-500"
                : "border-dark/20 dark:border-light/20"
            }`}
            placeholder="Create a strong password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.password}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-dark dark:text-light mb-2"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            required
            className={`w-full px-4 py-3 bg-light dark:bg-gray border rounded-xl text-dark dark:text-light placeholder:text-dark/60 dark:placeholder:text-light/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-500 ease-in-out ${
              errors.confirmPassword
                ? "border-red-500"
                : "border-dark/20 dark:border-light/20"
            }`}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {errors.general && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-sm">
            {errors.general}
          </div>
        )}

        <button
          type="submit"
          disabled={loading || usernameChecking}
          className="w-full px-6 py-3 bg-accent hover:bg-accent/80 text-light font-medium rounded-xl transition-all duration-500 ease-in-out disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Join fairDinkum"}
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-dark/20 dark:border-light/20" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-neutral-100 dark:bg-dark text-dark/60 dark:text-light/60 font-light">
            or sign up with
          </span>
        </div>
      </div>

      <OAuthButtons />

      <div className="text-center">
        <p className="text-sm font-light text-dark/60 dark:text-light/60">
          Already part of the community?{" "}
          <a
            href="/login"
            className="font-medium text-accent hover:text-accent/80 transition-all duration-500 ease-in-out"
          >
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
}
