import flags from "./flags";

const languages = () => {
  const lang = ["en", "it", "tr", "ro", "hu", "ar", "de", "es", "sv", "pt", "fi", "pl"];
  const defaultLang = "ro";
  const { flagPath } = flags();

  return { lang, defaultLang, flagPath };
};

export default languages;
