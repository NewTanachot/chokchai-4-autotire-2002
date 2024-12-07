import { NextRequest, NextResponse } from "next/server";
import { EN, Locale, TH, UserLangCookieKey } from "@/src/common/metadata";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const pathname = request.nextUrl.pathname;
    const lang = getLangFormPath(pathname);

    if (lang) {
        response.cookies.set(UserLangCookieKey, lang);
    }

    return response;
}

const getLangFormPath = (path: string): Locale | null => {
    if (path.endsWith("/en") || path.includes("/en/")) {
        return EN;
    }

    if (path.endsWith("/th") || path.includes("/th/")) {
        return TH;
    }

    return null;
};

export const config = {
    matcher: ["/th/:path*", "/en/:path*"],
};
