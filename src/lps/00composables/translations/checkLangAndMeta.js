import { useRoute } from "vue-router";
import languages from "../../demoLP/composables/translations/languages";

const checkLangAndMeta = (lng) => {
  const route = useRoute();
  const htmlDoc = document.querySelector("html");
  const { lang, defaultLang, lpNamePath } = languages();

  if (lang.indexOf(lng) > -1) {
    htmlDoc.setAttribute("lang", lng);
    if (lng == "ar") {
      htmlDoc.setAttribute("dir", "rtl");
    } else {
      htmlDoc.setAttribute("dir", "ltr");
    }
  }

  if (lang.indexOf(lng) == -1 && route.name != "PageNotFound") {
    window.location.href = `/lp/${lpNamePath}/${defaultLang}`;
  }

  return {};
};

export default checkLangAndMeta;
