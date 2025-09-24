// app/components/auth/profile-completion-form.tsx
"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { validateUsername } from "@/lib/utils/validation";
import { completeProfile } from "@/app/(auth)/complete-profile/actions";

export default function ProfileCompletionForm() {
  const [formData, setFormData] = useState({
    username: "",
    dateOfBirth: "",
    password: "", // Fallback password for OAuth users
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [usernameChecking, setUsernameChecking] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("");

  // Get current user email on mount
  useEffect(() => {
    const getCurrentUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user?.email) {
        setUserEmail(user.email);
      }
    };

    getCurrentUser();
  }, []);

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

    // Password validation (for OAuth users as fallback security)
    if (!formData.password) {
      newErrors.password = "A fallback password is required for security";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
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

    const result = await completeProfile(submitFormData);

    if (result.error) {
      setErrors({ general: result.error });
    }

    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl">
        <h3 className="font-medium text-dark dark:text-light mb-2">
          Welcome to fairDinkum!
        </h3>
        <p className="text-sm text-dark/70 dark:text-light/70">
          We've created your account using{" "}
          <span className="font-medium">{userEmail}</span>. Now let's set up
          your profile to get you started in the community.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-dark dark:text-light mb-2"
          >
            Choose your username
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
            This is how other community members will know you
          </p>
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

        {/* Fallback Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-dark dark:text-light mb-2"
          >
            Set a fallback password
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
            placeholder="Create a secure password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.password}
            </p>
          )}
          <p className="mt-1 text-xs text-dark/60 dark:text-light/60">
            This is for account security if your social login becomes
            unavailable
          </p>
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
          {loading ? "Setting up your profile..." : "Complete profile"}
        </button>
      </form>

      <div className="text-center">
        <p className="text-xs text-dark/60 dark:text-light/60">
          By completing your profile, you agree to our{" "}
          <a
            href="/help-center/legal/terms"
            className="text-accent hover:text-accent/80 transition-all duration-500 ease-in-out"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/help-center/legal/privacy"
            className="text-accent hover:text-accent/80 transition-all duration-500 ease-in-out"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
