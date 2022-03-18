/**
 *  check Lang and Meta
 */

const checkLangAndMeta = (propsLang, lang, documentPageTitle) => {
  // <html> lang and dir
  const htmlDoc = document.querySelector("html");
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
  docTitle.innerText = `${documentPageTitle[propsLang]} | ${process.env.VUE_APP_BRAND_TITLE}`;

  return {};
};

export default checkLangAndMeta;
