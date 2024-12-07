import metadata from "@/src/sources/metadata.json";
import { MetaDataEntity } from "@/src/common/metadata";

export const GetMetaDataFromJSON = (): MetaDataEntity => {
    return metadata;
};
