import flags from "../../../../composables/translations/flags";

const languages = () => {
  const lang = [
    "en",
    "it",
    "ms",
    "ar",
    // ""
  ];
  const defaultLang = "ms";
  const { flagPath } = flags();

  return { lang, defaultLang, flagPath };
};

export default languages;
