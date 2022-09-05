import flags from "@/composables/translations/flags";

const languages = () => {
  const lpLangs = [
    "de",
    "tr",
    "fi",
    "ar",
    // ""
  ];
  const defaultLang = "tr";
  const { flagPath } = flags();

  return { lpLangs, defaultLang, flagPath };
};

export default languages;
