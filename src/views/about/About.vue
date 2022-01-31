<template>
  <Header :lang="lang" />
  <main>
    <!-- <LanguageNotAvailable v-if="langExist" /> -->
    <Section1 :lang="lang" />
  </main>
  <Footer :lang="lang" />
</template>

<script>
import { ref } from "@vue/runtime-core";
import checkLangAndMeta from "../../composables/translations/checkLangAndMeta";
import switchLang from "../../composables/translations/switchLang";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Section1 from "./Section1.vue";

export default {
  name: "About",
  components: { Header, Footer, Section1 },
  props: ["lang"],
  setup(props) {
    // Translations
    checkLangAndMeta(props.lang);

    const pageTitle = ref("About");
    const titleTransl = {
      en: "About",
      it: "Di",
      tr: "Hakkında",
      ro: "Despre",
      hu: "Ról ről",
      ar: "عن",
      de: "Etwa",
      es: "Acerca de",
      sv: "Handla om",
      pt: "Cerca de",
      fi: "Noin",
      pl: "O",
    };
    switchLang(pageTitle, titleTransl, props.lang);


    // Head tag
    const docTitle = document.querySelector("title");
    docTitle.innerText = `${process.env.VUE_APP_BRAND_TITLE} | ${pageTitle.value}`;

    return {};
  },
};
</script>
