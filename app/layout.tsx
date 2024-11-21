import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GetMetaData } from "@/src/services/metadata";
import { TH } from "@/src/common/metadata";

const jetBrainsMono = localFont({
    src: "../public/fonts/JetBrainsMono-Regular.woff2",
    variable: "--font-jetbrain-mono",
    //   weight: "100 900",
});

const data = GetMetaData();
export const metadata: Metadata = {
    title: data.title[TH],
    description: data.description[TH],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${jetBrainsMono.className} antialiased`}>
                {children}
                <p>Chokchai 4 is my company</p>
            </body>
        </html>
    );
}
