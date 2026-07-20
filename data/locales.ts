export const supportedLocales = [
  { code: "pt", label: "Português", status: "active" },
  { code: "en", label: "English", status: "prepared" },
  { code: "es", label: "Español", status: "prepared" },
  { code: "it", label: "Italiano", status: "prepared" },
] as const;

export type SupportedLocale = (typeof supportedLocales)[number]["code"];
