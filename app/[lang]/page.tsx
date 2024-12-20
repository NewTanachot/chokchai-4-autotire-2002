import AppParams from "@/components/params";
import { GetLocaleEnum } from "@/src/common/metadata";

export default async function Home({ params }: AppParams) {
    const { lang } = await params;
    const userLang = GetLocaleEnum(lang);

    return <h1>this is dynamic {userLang} page</h1>;
}
