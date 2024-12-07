import React from "react";
import { TH } from "@/src/common/metadata";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";
import { NewMetadata } from "@/src/services/server/metadata";

const jetBrainsMono = localFont({
    src: "../public/fonts/JetBrainsMono-Regular.woff2",
    variable: "--font-jetbrain-mono",
    //   weight: "100 900",
});

export const metadata: Metadata = NewMetadata(TH);

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={TH}>
            <body className={`${jetBrainsMono.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
