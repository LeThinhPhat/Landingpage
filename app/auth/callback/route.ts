import { createClient } from "@/app/lib/supabase/client";
import { NextResponse } from "next/server";
import { verifySupabaseToken } from "@/app/Service/auth/authService";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.session) {
      try {
        await verifySupabaseToken(data.session.access_token);
        return NextResponse.redirect(new URL("/", requestUrl.origin));
      } catch (error) {
        console.error("Token verification failed:", error);
        return NextResponse.redirect(
          new URL("/login?error=verification_failed", requestUrl.origin)
        );
      }
    }
  }

  return NextResponse.redirect(
    new URL("/login?error=invalid_code", requestUrl.origin)
  );
}
