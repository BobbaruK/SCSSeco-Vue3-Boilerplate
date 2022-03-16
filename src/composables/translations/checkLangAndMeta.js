/**
 *  check Lang and Meta (Brand)
 */

import languages from "./languages";

const checkLangAndMeta = (propsLang, documentPageTitle) => {
  // <html> lang and dir
  const htmlDoc = document.querySelector("html");
  const { lang } = languages();

  if (lang.indexOf(propsLang) > -1) {
    htmlDoc.setAttribute("lang", propsLang);
    if (propsLang == "ar") {
      htmlDoc.setAttribute("dir", "rtl");
    } else {
      htmlDoc.setAttribute("dir", "ltr");
    }
  }

  // <head> title and meta
  const docTitle = document.querySelector("title");
  docTitle.innerText = `${process.env.VUE_APP_BRAND_TITLE} | ${documentPageTitle[propsLang]}`;

  return {};
};

export default checkLangAndMeta;
