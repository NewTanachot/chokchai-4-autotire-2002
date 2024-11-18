import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  GetMetaData,
  GetUserLang,
  IsUserLangConfigExist,
  SetUserLang,
} from "@/src/services/metadata";
import { DefaultLang } from "@/src/common/metadata";

const jetBrainsMono = localFont({
  src: "../public/fonts/JetBrainsMono-Regular.woff2",
  variable: "--font-jetbrain-mono",
  //   weight: "100 900",
});

const lang = await GetUserLang();
const data = GetMetaData();

export const metadata: Metadata = {
  title: data.title[lang],
  description: data.description[lang],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // if (!IsUserLangConfigExist()) {
  //   SetUserLang(DefaultLang);
  // }

  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} antialiased`}>
        {children}
        <p>Chokchai 4 is my company</p>
      </body>
    </html>
  );
}
