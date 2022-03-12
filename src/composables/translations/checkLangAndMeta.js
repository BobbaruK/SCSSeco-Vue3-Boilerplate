/**
 *  check Lang and Meta (Brand)
 */

import { useRoute } from "vue-router";
import languages from "./languages";

const checkLangAndMeta = (propsLang, documentPageTitle) => {
  const route = useRoute();
  const htmlDoc = document.querySelector("html");
  const { lang, defaultLang } = languages();

  if (lang.indexOf(propsLang) > -1) {
    htmlDoc.setAttribute("lang", propsLang);
    if (propsLang == "ar") {
      htmlDoc.setAttribute("dir", "rtl");
    } else {
      htmlDoc.setAttribute("dir", "ltr");
    }
  }

  if (lang.indexOf(propsLang) == -1 && route.name != "PageNotFound") {
    window.location.href = `/${defaultLang}`;
  }

  // in the <head> tag
  const docTitle = document.querySelector("title");
  docTitle.innerText = `${process.env.VUE_APP_BRAND_TITLE} | ${documentPageTitle[propsLang]}`;

  return {};
};

export default checkLangAndMeta;
