"use client";

import { ParseToErrorInfoObject } from "@/src/common/error";

export default function GlobalError({
    error,
}: {
    error: Error & { digest?: string };
}) {
    const errDetail = ParseToErrorInfoObject(error.message);
    return (
        <div className="text-center">
            <h1>THIS IS ERROR PAGE</h1>
            <h1>{errDetail.code}</h1>
            <h2>{errDetail.message}</h2>
            <h3>{errDetail.dateTime.toString()}</h3>
        </div>
    );
}
