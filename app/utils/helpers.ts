export function getPropertiesArray<T>(
  items?: (T | string | null | undefined)[],
  options?: {
    getValue?: (item: T) => string | undefined;
    fallback?: string;
  },
): string[] {
  if (!Array.isArray(items)) {
    return [];
  }

  const { getValue, fallback } = options || {};

  return items
    .map((item) => {
      if (!item) {
        return fallback;
      }

      if (typeof item === "string") {
        return item.trim() || fallback;
      }

      if (getValue) {
        return getValue(item)?.trim() || fallback;
      }

      return fallback;
    })
    .filter((v): v is string => Boolean(v));
}
