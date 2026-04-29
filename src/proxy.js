import { NextResponse } from "next/server";

const PROTECTED_PREFIXES = ["/cursos"];

const AUTH_ROUTES = ["/login", "/cadastro", "/forgot-password", "/reset-password"];

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("session_token")?.value;

  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  const isAuthRoute = AUTH_ROUTES.some((route) => pathname === route);

  if (isProtected && !sessionToken) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && sessionToken) {
    const cursosUrl = new URL("/cursos", request.url);
    return NextResponse.redirect(cursosUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
