import { Locale, UserLang } from "@/src/common/metadata";
import { IsValidUserLang } from "@/src/validator/metadata";
import cfg from "../../config/envconfig";
import axios from "axios";
import { IsSuccessStatusCode } from "@/src/common/httpkit";

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
