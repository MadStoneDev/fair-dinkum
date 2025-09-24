// app/(auth)/complete-profile/actions.ts
"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { validateUsername } from "@/lib/utils/validation";

export async function completeProfile(formData: FormData) {
  const supabase = await createClient();

  // Get current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { error: "Authentication required. Please log in again." };
  }

  const username = formData.get("username") as string;
  const dateOfBirth = formData.get("dateOfBirth") as string;
  const password = formData.get("password") as string;

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

  // Set the fallback password
  const { error: passwordError } = await supabase.auth.updateUser({
    password: password,
  });

  if (passwordError) {
    return { error: "Failed to set security password. Please try again." };
  }

  // Create user profile
  const { error: profileError } = await supabase.from("profiles").insert({
    id: user.id,
    username,
    email: user.email!,
    date_of_birth: dateOfBirth,
    level: 1,
    experience_points: 10, // Welcome bonus!
  });

  if (profileError) {
    console.error("Profile creation failed:", profileError);
    return { error: "Failed to complete profile setup. Please try again." };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
