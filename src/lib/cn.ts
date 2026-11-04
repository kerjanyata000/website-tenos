type ClassValue = string | false | null | undefined;

/** Lightweight className joiner — no extra dependency. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
