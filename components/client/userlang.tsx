"use client";

import { useEffect } from "react";
import { DefaultUserLang, EN, Locale, TH } from "@/src/common/metadata";
import { useRouter } from "next/navigation";
import { SetUserLangCookieToBrowser } from "@/src/services/client/metadata";

const GetUserBrowserPreferlang = (): Locale => {
    let preferLang: Locale = DefaultUserLang;
    for (const lang of navigator.languages) {
        if (lang.startsWith(TH)) {
            return TH;
        }

        if (lang.startsWith(EN)) {
            preferLang = EN;
        }
    }

    return preferLang;
};

// set userlang cookie to web browser need to execute on client-side page
export default function SetUserLangCookieToBrowserClientAndRedirect() {
    const router = useRouter();

    useEffect(() => {
        const preferLang = GetUserBrowserPreferlang();
        SetUserLangCookieToBrowser(preferLang);
        router.push(`/${preferLang}`);
    });

    return null;
}
