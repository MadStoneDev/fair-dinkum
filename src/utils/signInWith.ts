import { Route } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

async function signInWithDiscord() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: "/auth/callback",
    },
  });

  if (error) console.error(`Discord login failed: ${error.message}`);
  if (data) redirect(data.url as Route);
}

async function signInWithFacebook() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
    options: {
      redirectTo: "/auth/callback",
    },
  });

  if (error) console.error(`Facebook login failed: ${error.message}`);
  if (data) redirect(data.url as Route);
}

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "/auth/callback",
    },
  });

  if (error) console.error(`Google login failed: ${error.message}`);
  if (data) redirect(data.url as Route);
}

async function signInWithTwitch() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "twitch",
    options: {
      redirectTo: "/auth/callback",
    },
  });

  if (error) console.error(`Twitch login failed: ${error.message}`);
  if (data) redirect(data.url as Route);
}
