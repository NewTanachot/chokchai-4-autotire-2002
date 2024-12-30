import { StatusCode } from "./httpkit";

export interface ErrorInfo {
    code: StatusCode;
    message: string;
    dateTime: Date;
}

const NewErrorInfo = (code: StatusCode, message: string): ErrorInfo => {
    return {
        code: code,
        message: message,
        dateTime: new Date(),
    };
};

export const NewError = (code: StatusCode, message: string): Error => {
    const errMsg = JSON.stringify(NewErrorInfo(code, message));
    return new Error(errMsg);
};

export const ParseToErrorInfoObject = (errStr: string): ErrorInfo => {
    let err: ErrorInfo;
    try {
        err = JSON.parse(errStr);
    } catch {
        err = NewErrorInfo(
            StatusCode.InternalServerError,
            "cannot parse error message"
        );
    }

    return err;
};
