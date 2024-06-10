import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const protectPath = pathname.startsWith('/dashboard');
  const cookie = request.cookies.getAll();
  const currentUser = cookie.find((cookie) => cookie.name);

  const publicPaths = ['/reset-password', '/auth-coach', '/register'];
  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

  if (isPublicPath || currentUser) {
    return NextResponse.next();
  }
  console.log(pathname);
  if (currentUser && pathname === '/dashboard') {
    console.log('hello');
    if (protectPath) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/dashboard/home', request.url));
  }

  if (!currentUser && pathname !== '/') {
    return NextResponse.redirect(new URL(`/`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
