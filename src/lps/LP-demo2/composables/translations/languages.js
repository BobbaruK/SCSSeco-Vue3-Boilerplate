import flags from "../../../../composables/translations/flags";

const languages = () => {
  const lang = [
    "es",
    "th",
    "hu",
    "ar",
    // ""
  ];
  const defaultLang = "th";
  const { flagPath } = flags();

  return { lang, defaultLang, flagPath };
};

export default languages;
