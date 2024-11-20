import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Supported locales
const locales = ["ar", "en"] as const;
const defaultLocale: (typeof locales)[number] = "ar"; // Always default to 'ar'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already includes a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // If the pathname already includes a locale, no need to redirect
    return NextResponse.next();
  }

  // Redirect to the default locale if no locale is found
  const newPathname = `/${defaultLocale}${pathname}`;
  const url = request.nextUrl.clone();
  url.pathname = newPathname;

  return NextResponse.redirect(url);
}

// Config to specify which paths the middleware applies to
export const config = {
  matcher: [
    // Match all paths except internal (_next) and API paths
    "/((?!_next|api).*)",
  ],
};
