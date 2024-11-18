export type OptionalString = string | null | undefined;

export const MapToOptionalString = (string: string): OptionalString => {
  return string;
};

export const MapToString = (
  oString: OptionalString,
  defaultVal?: string
): string => {
  if (!IsValidString(oString)) {
    return defaultVal ?? "";
  }

  return String(oString);
};

export const IsValidString = (oString: OptionalString): boolean => {
  return oString != null && oString != undefined;
};
