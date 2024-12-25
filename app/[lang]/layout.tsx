import { AppParams, ParamsValue } from "@/components/params";
import { GetLocaleEnum } from "@/src/common/metadata";
import { NewMetadata } from "@/src/services/server/metadata";

export async function generateMetadata({ params }: AppParams) {
    const { lang } = await params;
    const userLang = GetLocaleEnum(lang);

    return NewMetadata(userLang);
}

export default async function LayoutHome({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<ParamsValue>;
}>) {
    const { lang } = await params;
    const userLang = GetLocaleEnum(lang);

    return <div lang={userLang}>{children}</div>;
}
