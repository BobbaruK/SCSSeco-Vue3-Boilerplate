/**
 *  check Lang and Meta (Brand)
 */

import { useRoute } from "vue-router";
import languages from "./languages";

const checkLangAndMeta = (propsLang) => {
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

  return {};
};

export default checkLangAndMeta;
