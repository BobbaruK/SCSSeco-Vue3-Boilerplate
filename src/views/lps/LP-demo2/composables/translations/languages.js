import flags from "@/composables/translations/flags";

const languages = () => {
  const lpLangs = [
    "es",
    "th",
    "hu",
    "ar",
    // ""
  ];
  const defaultLang = "es";
  const { flagPath } = flags();

  return { lpLangs, defaultLang, flagPath };
};

export default languages;
