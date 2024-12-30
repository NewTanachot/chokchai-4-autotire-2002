import { ErrorInfo } from "@/src/common/error";

export interface AppParams {
    params: Promise<ParamsValue>;
    error: ErrorInfo;
}

export interface ParamsValue {
    lang: string;
}
