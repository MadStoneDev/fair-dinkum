// app/auth/callback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      // Check if user has completed profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", data.user.id)
        .single();

      if (!profile || !profile.username) {
        // Redirect to complete profile for OAuth users
        return NextResponse.redirect(`${origin}/auth/complete-profile`);
      }

      // Profile exists, redirect to desired location
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Redirect to login if something went wrong
  return NextResponse.redirect(
    `${origin}/auth/login?error=auth_callback_error`,
  );
}
