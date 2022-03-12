<template>
  <Header :lang="lang" />
  <main>
    <Section1 :lang="lang" />
  </main>
  <Footer :lang="lang" />
</template>

<script>
import { onBeforeMount, ref } from "@vue/runtime-core";
import checkLangAndMeta from "../../composables/translations/checkLangAndMeta";
import languages from "../../composables/translations/languages";
import switchLang from "../../composables/translations/switchLang";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Section1 from "./Section1.vue";

export default {
  name: "Home",
  components: { Header, Footer, Section1 },
  props: ["lang"],
  setup(props) {
    const { lang, defaultLang } = languages()

    // Translations
    onBeforeMount(() => {
      checkLangAndMeta(props.lang);
    });

    const pageTitle = ref("Home");
    const titleTransl = {
      en: "Home",
      it: "Casa",
      tr: "Ev",
      ro: "Acasă",
      hu: "Itthon",
      ar: "مسكن",
      de: "Heim",
      es: "Casa",
      sv: "Hem",
      pt: "Casa",
      fi: "Koti",
      pl: "Dom",
    };
    switchLang(pageTitle, titleTransl, props.lang);

    // head tag
    const docTitle = document.querySelector("title");
    docTitle.innerText = `${pageTitle.value} | ${process.env.VUE_APP_BRAND_TITLE}`;

    return {};
  },
};
</script>
