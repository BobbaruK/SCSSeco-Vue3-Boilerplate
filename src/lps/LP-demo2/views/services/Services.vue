<script>
import checkLangAndMeta from "../../../composables/translations/checkLangAndMeta";
import languages from "../../composables/translations/languages";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Section1 from "./Section1.vue";

export default {
  name: "Services",
  components: { Header, Footer, Section1 },
  props: ["lang"],
  setup(props) {
    const { lang } = languages();
    
    const documentTitleTransl = {
      en: "Services",
      it: "Services",
      tr: "Services",
      ro: "Services",
      hu: "Services",
      ar: "Services",
      de: "Services",
      es: "Services",
      sv: "Services",
      pt: "Services",
      fi: "Services",
      pl: "Services",
      th: "Services",
      ms: "Services",
    };
    checkLangAndMeta(props.lang, lang, documentTitleTransl);

    return {};
  },
};
</script>

<template>
  <Header :lang="lang" />
  <main>
    <Section1 :lang="lang" />
  </main>
  <Footer :lang="lang" />
</template>
