import { useRoute } from "vue-router";
import languages from "./languages";

const checkLangAndMeta = (lng) => {
  const route = useRoute();
  const htmlDoc = document.querySelector("html");
  const { lang, defaultLang } = languages();

  if (lang.indexOf(lng) > -1) {
    htmlDoc.setAttribute("lang", lng);
    if (lng == "ar") {
      htmlDoc.setAttribute("dir", "rtl");
    } else {
      htmlDoc.setAttribute("dir", "ltr");
    }
  }
  if (lang.indexOf(lng) == -1 && route.name != "PageNotFound") {
    const lpName = "demolp"; // name of the LP
    window.location.href = `/lp/${lpName}/${defaultLang}`;
  }

  return {};
};

export default checkLangAndMeta;
