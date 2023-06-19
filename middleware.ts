import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const KEY = request.headers.get("Authorization");

  if (KEY === null || KEY === undefined) {
    if (request.headers.get("User-Agent")?.startsWith("Mozilla/")) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return NextResponse.json({
        Success: false,
        Message: "Undefined API Key",
        ErrorCode: "0405x89",
        API_KEY: "No API Key available",
      });
    }
  }
  if (KEY !== process.env.ENCRYPTION_KEY) {
    return NextResponse.json({
      Success: false,
      Message: "Authroization Failed",
      ErrorCode: "0490x78",
      API_KEY: "Invalid Api Key ",
    });
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/server/:path*",
};
