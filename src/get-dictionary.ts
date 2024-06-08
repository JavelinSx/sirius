import type { Locale } from "../i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: require("./dictionaries/en.json"),
  ru: require("./dictionaries/ru.json"),
};

export const getDictionary = (locale: Locale) => dictionaries[locale];
