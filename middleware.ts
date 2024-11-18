// TODO REMOVE ME (Refactor to use api route plz)

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { DefaultLang, UserLangCookieKey } from "./src/common/metadata";

export async function middleware(req: Request) {
  const cookieStore = await cookies();
  const userLang = cookieStore.get(UserLangCookieKey)?.value;

  if (!userLang) {
    const res = NextResponse.next();
    res.cookies.set(UserLangCookieKey, DefaultLang, {
      path: "/",
      httpOnly: true,
    });
    return res;
  }

  return NextResponse.next();
}
