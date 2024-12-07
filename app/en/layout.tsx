import { EN } from "@/src/common/metadata";
import { NewMetadata } from "@/src/services/server/metadata";
import { Metadata } from "next";

export const metadata: Metadata = NewMetadata(EN);

export default async function LayoutEN({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div lang={EN}>{children}</div>;
}
