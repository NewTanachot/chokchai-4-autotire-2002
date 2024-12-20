import { LocaleString } from "@/src/common/string";

export type Locale = "en" | "th";

export const EN: Locale = "en";
export const TH: Locale = "th";
export const DefaultUserLang: Locale = TH;
export const ValidUserLang = new Set<string>([EN, TH]);
export const UserLangCookieKey = "COOKIE_KEY_USER_LANG";

export const GetLocaleEnum = (lang: string): Locale => {
    switch (lang) {
        case "en":
            return EN;
        case "th":
            return TH;
        default:
            return DefaultUserLang;
    }
};

export interface UserLang {
    lang: Locale;
}

export interface MetaDataEntity {
    title: LocaleString;
    description: LocaleString;
}
