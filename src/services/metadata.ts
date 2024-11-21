import {
    DefaultUserLang,
    Locale,
    UserLang,
    UserLangCookieKey,
} from "../common/metadata";
import { GetMetaDataFromJSON } from "../repositories/metadata";
import { cookies } from "next/headers";
import { IsValidUserLang } from "../validator/metadata";
import axios from "axios";
import { IsSuccessStatusCode } from "../common/httpkit";
import cfg from "../config/envconfig";

// Metadata
export const GetMetaData = () => GetMetaDataFromJSON();

// Cockie

export const GetUserLangFromCookie = async (): Promise<Locale> => {
    const cookie = await cookies();
    let lang = cookie.get(UserLangCookieKey)?.value;
    if (!IsValidUserLang(lang)) {
        lang = DefaultUserLang;
    }

    return lang as Locale;
};

export const SetUserLangCookieToBrowser = async (
    lang: Locale
): Promise<void> => {
    if (!IsValidUserLang(lang)) {
        throw new Error("[SetUserLang]: invalid user lang");
    }

    const body: UserLang = {
        lang: lang,
    };

    const url = cfg.BASE_URL_API + cfg.SET_USER_LANG_TO_COOKIE_PATH;
    const response = await axios.post(url, body);

    if (!IsSuccessStatusCode(response.status)) {
        throw new Error(
            `[SetUserLang]: cannot set user lang to cookie, ${response.status} ${response.statusText}: ${response.data}`
        );
    }
};

export const IsUserLangConfigExist = async (): Promise<boolean> => {
    const cookie = await cookies();
    const lang = cookie.get(UserLangCookieKey)?.value;

    return IsValidUserLang(lang);
};
