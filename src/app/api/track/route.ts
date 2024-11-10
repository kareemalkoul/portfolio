import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { action_type } = await request.json();

    if (!action_type) {
      return NextResponse.json(
        { error: "action_type is required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { error } = await supabase.from("portfolio_interactions").insert([
      {
        action_type,
        user_agent: request.headers.get("user-agent") || "unknown",
        user_ip: request.headers.get("x-forwarded-for") || "unknown",
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error);
      return NextResponse.json(
        { error: "Failed to track action" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
