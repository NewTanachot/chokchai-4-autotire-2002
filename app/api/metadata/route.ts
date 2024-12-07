import { NextRequest, NextResponse } from "next/server";
import { UserLang, UserLangCookieKey } from "@/src/common/metadata";
import { NewNextResponse, StatusCode } from "@/src/common/httpkit";

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const userLang: UserLang = await request.json();

        if (!userLang.lang) {
            return NewNextResponse(StatusCode.BadRequest, "lang is require");
        }

        const response = NewNextResponse(
            StatusCode.Created,
            "set user language cookie to browser successfully"
        );
        response.cookies.set(UserLangCookieKey, userLang.lang);

        return response;
    } catch (error) {
        console.error("[SetUserLangCookieToBrowser]: ", error);
        return NewNextResponse(
            StatusCode.InternalServerError,
            "Failed to process request"
        );
    }
}
