import { Metadata } from "next";
import {
    DefaultUserLang,
    Locale,
    UserLangCookieKey,
} from "../../common/metadata";
import { GetMetaDataFromJSON } from "../../repositories/metadata";
import { cookies } from "next/headers";
import { IsValidUserLang } from "../../validator/metadata";
import { OptionalString } from "../../utils/string";

// Metadata
export const NewMetadata = (lang: Locale): Metadata => {
    const data = GetMetaDataFromJSON();

    return {
        title: data.title[lang],
        description: data.description[lang],
    };
};

// Cookie
export const GetUserLangFromCookie = async (): Promise<OptionalString> => {
    const cookie = await cookies();
    return cookie.get(UserLangCookieKey)?.value;
};

export const GetUserLangFromCookieOrDefault = async (): Promise<Locale> => {
    const cookie = await cookies();
    let lang = cookie.get(UserLangCookieKey)?.value;
    if (!IsValidUserLang(lang)) {
        lang = DefaultUserLang;
    }

    return lang as Locale;
};
