import flags from "../../../../composables/translations/flags";

const languages = () => {
  const lang = [
    "de",
    "tr",
    "fi",
    "ar",
    // ""
  ];
  const defaultLang = "de";
  const { flagPath } = flags();

  return { lang, defaultLang, flagPath };
};

export default languages;
