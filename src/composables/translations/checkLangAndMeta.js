/**
 *  check Lang and Meta
 */

const checkLangAndMeta = (propsLang = "", lang = "", documentPageTitle = {}, metaDescription = {}, brandColor = "") => {
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

  // meta description && theme colors
  document.querySelectorAll("meta").forEach((meta) => {
    if (meta.name == "description") {
      meta.content = metaDescription[propsLang];
    }
    if (meta.name == "theme-color") {
      meta.content = brandColor;
    }
    if (meta.name == "msapplication-TileColor") {
      meta.content = brandColor;
    }
  });

  document.querySelectorAll("link").forEach((link) => {
    if (link.rel === "mask-icon") {
      console.log(link.setAttribute("color", brandColor));
    }
  });

  return {};
};

export default checkLangAndMeta;
