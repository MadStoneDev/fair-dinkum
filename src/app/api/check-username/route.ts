// app/api/check-username/route.ts
import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { validateUsername } from "@/lib/utils/validation";

export async function POST(request: NextRequest) {
  try {
    const { username } = await request.json();

    if (!username) {
      return NextResponse.json(
        { available: false, error: "Username is required" },
        { status: 400 },
      );
    }

    // Validate username format
    const validation = validateUsername(username);
    if (!validation.valid) {
      return NextResponse.json(
        { available: false, error: validation.error },
        { status: 400 },
      );
    }

    // Check if username exists in database
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("username")
      .eq("username", username)
      .single();

    if (error && error.code !== "PGRST116") {
      // PGRST116 is "not found" which is what we want
      console.error("Username check error:", error);
      return NextResponse.json(
        { available: false, error: "Failed to check username availability" },
        { status: 500 },
      );
    }

    const available = !data; // If no data returned, username is available

    return NextResponse.json({
      available,
      username,
    });
  } catch (error) {
    console.error("Username check API error:", error);
    return NextResponse.json(
      { available: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
