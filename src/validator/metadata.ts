import { ValidUserLang } from "../common/metadata";
import { OptionalString } from "../utils/string";

export const IsValidUserLang = (lang?: OptionalString): boolean => {
  return lang ? ValidUserLang.has(lang) : false;
};
