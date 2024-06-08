import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Get the current user from the cookies
  const currentUser = request.cookies.get('currentUser')?.value;

  // Allow access to certain paths if the user is not logged in
  const publicPaths = ['/reset-password', '/auth-coach', '/register'];
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  if (isPublicPath) {
    return NextResponse.next();
  }

  // If the user is logged in and not on the dashboard, redirect to the dashboard
  if (currentUser && !pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL(`/dashboard`, request.url));
  }

  // Proceed without redirection if the user is not logged in
  if (!currentUser) {
    return NextResponse.next();
  }
  // Allow other requests to proceed
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
