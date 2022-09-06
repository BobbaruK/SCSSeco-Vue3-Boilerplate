import flags from "@/composables/global/flags";

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
