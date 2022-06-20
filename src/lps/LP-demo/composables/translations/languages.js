import flags from "../../../../composables/translations/flags";

const languages = () => {
  const lpLangs = [
    "en",
    "it",
    "ms",
    "ar",
    // ""
  ];
  const defaultLang = "ms";
  const { flagPath } = flags();

  return { lpLangs, defaultLang, flagPath };
};

export default languages;
