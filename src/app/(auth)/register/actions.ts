// app/(auth)/register/actions.ts
"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { validateUsername } from "@/lib/utils/validation";

export async function signUp(formData: FormData) {
  const supabase = await createClient();

  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const dateOfBirth = formData.get("dateOfBirth") as string;

  // Server-side validation
  const usernameValidation = validateUsername(username);
  if (!usernameValidation.valid) {
    return { error: usernameValidation.error };
  }

  // Check if username is already taken
  const { data: existingUser } = await supabase
    .from("profiles")
    .select("username")
    .eq("username", username)
    .single();

  if (existingUser) {
    return { error: "Username is already taken. Try another one!" };
  }

  // Calculate age
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  if (age < 13) {
    return { error: "You must be at least 13 years old to join fairDinkum" };
  }

  // Create auth user
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (authError) {
    if (authError.message.includes("already registered")) {
      return {
        error:
          "An account with this email already exists. Try logging in instead!",
      };
    }
    if (authError.message.includes("Password should be at least")) {
      return { error: "Password must be at least 6 characters long" };
    }
    if (authError.message.includes("Invalid email")) {
      return { error: "Please enter a valid email address" };
    }
    return { error: "Failed to create account. Please try again." };
  }

  if (!authData.user) {
    return { error: "Failed to create account. Please try again." };
  }

  // Create user profile
  const { error: profileError } = await supabase.from("profiles").insert({
    id: authData.user.id,
    username,
    email,
    date_of_birth: dateOfBirth,
    level: 1,
    experience_points: 0,
  });

  if (profileError) {
    // If profile creation fails, we should clean up the auth user
    // But Supabase doesn't allow us to delete users from server-side
    // So we'll handle this in the app
    console.error("Profile creation failed:", profileError);
    return {
      error: "Failed to complete registration. Please contact support.",
    };
  }

  // Redirect to success page
  redirect("/auth/verify-email");
}

export async function checkUsernameAvailable(username: string) {
  const supabase = await createClient();

  const validation = validateUsername(username);
  if (!validation.valid) {
    return { available: false, error: validation.error };
  }

  const { data } = await supabase
    .from("profiles")
    .select("username")
    .eq("username", username)
    .single();

  return { available: !data };
}
