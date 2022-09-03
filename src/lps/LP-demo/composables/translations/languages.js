import flags from "../../../../composables/translations/flags";

const languages = () => {
  const lpLangs = [
    "en",
    "it",
    "ms",
    "ar",
    // ""
  ];
  const defaultLang = "en";
  const { flagPath } = flags();

  return { lpLangs, defaultLang, flagPath };
};

export default languages;
