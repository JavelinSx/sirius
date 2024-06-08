import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
  // если пользователь существует, и путь начинается с дашборда, то посылаем его туда
  if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
  if (!currentUser && request.nextUrl.pathname.startsWith('/reset-password')) {
    return Response.redirect(new URL('/reset-password', request.url))
  }
  if (!currentUser && request.nextUrl.pathname.startsWith('/auth-coach')) {
    return Response.redirect(new URL('/auth-coach', request.url))
  }
  if (!currentUser && request.nextUrl.pathname.startsWith('/register')) {
    return Response.redirect(new URL('/register', request.url))
  }
  // если пользователя не существует, то посылаем его на логин
  if (!currentUser) {
    return Response.redirect(new URL('/', request.url))
  }
}
 
export const config = {
  matcher: ['/dashboard/:path*'],
}