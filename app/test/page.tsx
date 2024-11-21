import { Metadata } from "next";

export const metadata: Metadata = {
    title: "eng",
    description: "test",
};

export default async function Page() {
    return (
        <>
            <div className="btn btn-square">Hellop</div>
        </>
    );
}
