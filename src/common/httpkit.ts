import { NextResponse } from "next/server";
import { StatusCode, StatusCodeMap } from "./constant";

const UnspecifyErrorMessage: string = "Unspecified Error Message";

const SuccessStatusSet = new Set<number>([
    StatusCode.OK,
    StatusCode.Created,
    StatusCode.Accepted,
    StatusCode.NoContent,
]);

const ErrorStatusSet = new Set<number>([
    StatusCode.BadRequest,
    StatusCode.Unauthorized,
    StatusCode.Forbidden,
    StatusCode.NotFound,
    StatusCode.MethodNotAllowed,
    StatusCode.Conflict,
    StatusCode.UnprocessableEntity,
    StatusCode.InternalServerError,
    StatusCode.NotImplemented,
    StatusCode.BadGateway,
    StatusCode.ServiceUnavailable,
    StatusCode.GatewayTimeout,
]);

export const NewNextResponse = (
    code: StatusCode,
    msg: string
): NextResponse => {
    return NextResponse.json(
        {
            code: `${code} ${StatusCodeMap.get(code) ?? UnspecifyErrorMessage}`,
            message: msg,
        },
        { status: code }
    );
};

export const IsSuccessStatusCode = (code: number) => {
    return SuccessStatusSet.has(code);
};

export const IsErrorStatusCode = (code: number) => {
    return ErrorStatusSet.has(code);
};
