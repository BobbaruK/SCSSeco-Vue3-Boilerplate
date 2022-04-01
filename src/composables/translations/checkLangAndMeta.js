/**
 *  check Lang and Meta
 */

const checkLangAndMeta = (propsLang = "", lang = "", documentPageTitle = {}, metaDescription = {}) => {
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

  // <head> title
  const docTitle = document.querySelector("title");
  docTitle.innerText = `${documentPageTitle[propsLang]} | ${process.env.VUE_APP_BRAND_TITLE}`;

  // meta description
  document.querySelectorAll("meta").forEach((meta) => {
    if (meta.name == "description") {
      meta.content = metaDescription[propsLang];
    }
  });

  return {};
};

export default checkLangAndMeta;
