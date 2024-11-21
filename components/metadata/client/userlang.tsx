"use client";

import { useEffect } from "react";
import { DefaultUserLang, EN, Locale, TH } from "@/src/common/metadata";
import { SetUserLangCookieToBrowser } from "@/src/services/metadata";

export interface SetUserLangToCookieProps {
    lang?: Locale;
}

const GetUserBrowserPreferlang = (): Locale => {
    let preferLang: Locale = DefaultUserLang;
    navigator.languages.forEach((x) => {
        if (x.startsWith("th")) {
            return TH;
        }

        if (x.startsWith("en")) {
            preferLang = EN;
        }
    });

    return preferLang;
};

// set userlang cookie to web browser need to execute on client-side page
export default function SetUserLangCookieToBrowserClient(
    props: SetUserLangToCookieProps
) {
    useEffect(() => {
        if (props.lang) {
            SetUserLangCookieToBrowser(props.lang);
        } else {
            const preferLang = GetUserBrowserPreferlang();
            SetUserLangCookieToBrowser(preferLang);
        }
    }, [props.lang]);

    return null;
}
