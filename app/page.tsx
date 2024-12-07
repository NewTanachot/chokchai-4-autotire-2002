import SetUserLangCookieToBrowserClientAndRedirect from "@/components/client/userlang";
import { GetUserLangFromCookie } from "@/src/services/server/metadata";
import { redirect } from "next/navigation";

export default async function Gateway() {
    const lang = await GetUserLangFromCookie();
    if (lang) {
        redirect(`/${lang}`);
    }

    return (
        <SetUserLangCookieToBrowserClientAndRedirect></SetUserLangCookieToBrowserClientAndRedirect>
    );
}
