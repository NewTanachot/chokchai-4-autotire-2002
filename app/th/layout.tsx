import { TH } from "@/src/common/metadata";
import { NewMetadata } from "@/src/services/server/metadata";
import { Metadata } from "next";

export const metadata: Metadata = NewMetadata(TH);

export default async function LayoutTH({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div lang={TH}>{children}</div>;
}
