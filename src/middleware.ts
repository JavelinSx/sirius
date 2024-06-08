import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "@/i18n-config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Разбиваем путь на части для извлечения локали
  const pathnameParts = pathname.split('/');
  const locale = pathnameParts[1];

  // Убираем локаль из пути для проверки маршрутов
  const pathnameWithoutLocale = `/${pathnameParts.slice(2).join('/')}`;

  // Пример проверки текущего пользователя и перенаправления
  const currentUser = request.cookies.get('currentUser')?.value;

  if (currentUser && !pathnameWithoutLocale.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url));
  }

  if (!currentUser && (pathnameWithoutLocale.startsWith('/reset-password') || pathnameWithoutLocale.startsWith('/auth-coach') || pathnameWithoutLocale.startsWith('/register'))) {
    return NextResponse.next();
  }

  if (!currentUser && pathnameWithoutLocale !== '/') {
    return NextResponse.redirect(new URL(`/${locale}/`, request.url));
  }

  // Разрешаем запрос, если все проверки пройдены
  return NextResponse.next();
}

export const config = {
  matcher: ["/:locale((?!api|_next/static|_next/image|favicon.ico).*)"],
};
