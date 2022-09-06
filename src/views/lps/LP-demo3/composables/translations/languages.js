import flags from "@/composables/global/flags";

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
