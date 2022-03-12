const switchLang = (arg1, arg2, lang) => {
  switch (lang) {
    case "en":
      arg1.value = arg2.en;
      break;
    case "it":
      arg1.value = arg2.it;
      break;
    case "tr":
      arg1.value = arg2.tr;
      break;
    case "ro":
      arg1.value = arg2.ro;
      break;
    case "hu":
      arg1.value = arg2.hu;
      break;
    case "ar":
      arg1.value = arg2.ar;
      break;
    case "de":
      arg1.value = arg2.de;
      break;
    case "es":
      arg1.value = arg2.es;
      break;
    case "sv":
      arg1.value = arg2.sv;
      break;
    case "pt":
      arg1.value = arg2.pt;
      break;
    case "fi":
      arg1.value = arg2.fi;
      break;
    case "pl":
      arg1.value = arg2.pl;
      break;
    case "th":
      arg1.value = arg2.th;
      break;
    case "ms":
      arg1.value = arg2.ms;
      break;

    default:
      arg1.value = arg2.en;
      break;
  }
};
export default switchLang;
