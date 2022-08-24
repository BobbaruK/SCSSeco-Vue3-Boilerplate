import flags from "./flags";

const languages = () => {
  const lpLangs = [
    "en",
    "it",
    "tr",
    "ro",
    "hu",
    "ar",
    "de",
    "es",
    "sv",
    "pt",
    "fi",
    "pl",
    "th",
    "ms",
    // ""
  ];
  const defaultLang = "ro";
  const { flagPath } = flags();

  return { lpLangs, defaultLang, flagPath };
};

export default languages;
