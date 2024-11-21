const GetBaseUrlApi = (): string => {
    const value = process.env.NEXT_PUBLIC_BASE_URL_API;
    if (!value) {
        throw new Error(
            "[GetBaseApiPath]: NEXT_PUBLIC_BASEURL_API env is require"
        );
    }

    return value;
};

const GetSetUserLangToCookiePath = (): string => {
    const value = process.env.NEXT_PUBLIC_POST_METADATA_PATH;
    if (!value) {
        throw new Error(
            "[GetBaseApiPath]: NEXT_PUBLIC_POST_METADATA_PATH env is require"
        );
    }

    return value;
};

const Config = {
    BASE_URL_API: GetBaseUrlApi(),
    SET_USER_LANG_TO_COOKIE_PATH: GetSetUserLangToCookiePath(),
};

export default Config;
