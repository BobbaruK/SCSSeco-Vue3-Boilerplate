/**
 *  check Lang and Meta (LPs)
 */

import { useRoute } from "vue-router";

const checkLangAndMeta = (propsLang, lang, defaultLang, lpNamePath, documentPageTitle) => {
  const route = useRoute();
  const htmlDoc = document.querySelector("html");

  if (lang.indexOf(propsLang) > -1) {
    htmlDoc.setAttribute("lang", propsLang);
    if (propsLang == "ar") {
      htmlDoc.setAttribute("dir", "rtl");
    } else {
      htmlDoc.setAttribute("dir", "ltr");
    }
  }

  if (lang.indexOf(propsLang) == -1 && route.name != "PageNotFound") {
    window.location.href = `/lp/${lpNamePath}/${defaultLang}`;
  }

  // in the <head> tag
  const docTitle = document.querySelector("title");
  docTitle.innerText = `${documentPageTitle[propsLang]} | ${process.env.VUE_APP_BRAND_TITLE}`;

  return {};
};

export default checkLangAndMeta;
