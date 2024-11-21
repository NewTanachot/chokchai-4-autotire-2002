export type Locale = "EN" | "TH";

export const EN: Locale = "EN";
export const TH: Locale = "TH";
export const DefaultUserLang: Locale = TH;
export const ValidUserLang = new Set<string>([EN, TH]);
export const UserLangCookieKey = "COOKIE_KEY_USER_LANG";

export interface UserLang {
    lang: Locale;
}
