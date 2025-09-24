// app/(auth)/login/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function sendOtp(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;

  if (!email) {
    return { error: "Email is required" };
  }

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false, // Only login existing users with OTP
    },
  });

  if (error) {
    // Handle common errors with friendly messages
    if (error.message.includes("rate limit")) {
      return {
        error: "Too many attempts. Please wait a moment before trying again.",
      };
    }
    if (error.message.includes("User not found")) {
      return {
        error: "No account found with this email. Try signing up instead!",
      };
    }
    return { error: "Failed to send login code. Please try again." };
  }

  return { success: true };
}

export async function verifyOtp(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const token = formData.get("otp") as string;

  if (!email || !token) {
    return { error: "Email and code are required" };
  }

  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });

  if (error) {
    if (error.message.includes("expired")) {
      return { error: "Code has expired. Please request a new one." };
    }
    if (error.message.includes("invalid")) {
      return { error: "Invalid code. Please check and try again." };
    }
    return { error: "Failed to verify code. Please try again." };
  }

  if (data.user) {
    // Check if user has completed profile
    const { data: profile } = await supabase
      .from("profiles")
      .select("username")
      .eq("id", data.user.id)
      .single();

    if (!profile || !profile.username) {
      redirect("/auth/complete-profile");
    }
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function loginWithPassword(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    if (error.message.includes("Invalid login credentials")) {
      return {
        error: "Email or password is incorrect. Double-check and try again!",
      };
    }
    if (error.message.includes("Email not confirmed")) {
      return {
        error: "Please check your email and click the verification link first.",
      };
    }
    return { error: "Login failed. Please try again." };
  }

  if (data.user) {
    // Check if user has completed profile
    const { data: profile } = await supabase
      .from("profiles")
      .select("username")
      .eq("id", data.user.id)
      .single();

    if (!profile || !profile.username) {
      redirect("/auth/complete-profile");
    }
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signInWithProvider(formData: FormData) {
  const supabase = await createClient();
  const provider = formData.get("provider") as
    | "github"
    | "google"
    | "discord"
    | "twitter";

  if (!provider) {
    return { error: "Provider is required" };
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    return { error: `Failed to connect with ${provider}. Please try again.` };
  }

  if (data.url) {
    redirect(data.url);
  }
}
