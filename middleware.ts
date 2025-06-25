import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const isProtectRoute = createRouteMatcher(["/", "/api(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // If the current route matches protected routes and the user is not signed in
  if (isProtectRoute(req) && !(await auth()).userId) {
    // Redirect to sign-in page or return 401
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Allow request to continue
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
