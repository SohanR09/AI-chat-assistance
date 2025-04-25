// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Match only `/c` route and its subpaths (e.g., /c, /c/123, etc.)
const isProtectedRoute = createRouteMatcher(["/c(.*)?"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    if (!(await auth())?.userId) {
      const origin = req.nextUrl.origin;
      const signInUrl = new URL("/auth/sign-in", req.url);
      signInUrl.searchParams.set(
        "redirect_url",
        `${origin}/${req.nextUrl.pathname}`
      );
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
