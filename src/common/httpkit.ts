import { NextResponse } from "next/server";

export enum StatusCode {
    OK = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    MovedPermanently = 301,
    Found = 302,
    NotModified = 304,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    Conflict = 409,
    UnprocessableEntity = 422,
    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
}

const StatusCodeMap: Map<StatusCode, string> = new Map([
    [StatusCode.OK, "OK"],
    [StatusCode.Created, "Created"],
    [StatusCode.Accepted, "Accepted"],
    [StatusCode.NoContent, "No Content"],
    [StatusCode.MovedPermanently, "Moved Permanently"],
    [StatusCode.Found, "Found"],
    [StatusCode.NotModified, "Not Modified"],
    [StatusCode.BadRequest, "Bad Request"],
    [StatusCode.Unauthorized, "Unauthorized"],
    [StatusCode.Forbidden, "Forbidden"],
    [StatusCode.NotFound, "Not Found"],
    [StatusCode.MethodNotAllowed, "Method Not Allowed"],
    [StatusCode.Conflict, "Conflict"],
    [StatusCode.UnprocessableEntity, "Unprocessable Entity"],
    [StatusCode.InternalServerError, "Internal Server Error"],
    [StatusCode.NotImplemented, "Not Implemented"],
    [StatusCode.BadGateway, "Bad Gateway"],
    [StatusCode.ServiceUnavailable, "Service Unavailable"],
    [StatusCode.GatewayTimeout, "Gateway Timeout"],
]);

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
