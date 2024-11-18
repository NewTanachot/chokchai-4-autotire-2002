import { DefaultLang, Locale, UserLangCookieKey } from "../common/metadata";
import { GetMetaDataFromJSON } from "../repositories/metadata";
import { cookies } from "next/headers";
import { IsValidUserLang } from "../validator/metadata";

// Metadata
export const GetMetaData = () => GetMetaDataFromJSON();

// Cockie
const cookieObj = await cookies();

export const GetUserLang = async (): Promise<Locale> => {
  let lang = cookieObj.get(UserLangCookieKey)?.value;
  if (!IsValidUserLang(lang)) {
    lang = DefaultLang;
  }

  return lang as Locale;
};

export const SetUserLang = (lang: Locale): void => {
  if (!IsValidUserLang(lang)) {
    throw new Error("[SetUserLang]: invalid user lang");
  }

  cookieObj.set(UserLangCookieKey, lang);
};

export const IsUserLangConfigExist = (): boolean => {
  let lang = cookieObj.get(UserLangCookieKey)?.value;
  return IsValidUserLang(lang);
};
