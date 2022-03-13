<script>
import checkLangAndMeta from "../../../composables/translations/checkLangAndMeta";
import languages from "../../composables/translations/languages";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Section1 from "./Section1.vue";

export default {
  name: "Contact",
  components: { Header, Footer, Section1 },
  props: ["lang"],
  setup(props) {
    const { lang } = languages();
    
    const documentTitleTransl = {
      en: "Contact",
      it: "Contact",
      tr: "Contact",
      ro: "Contact",
      hu: "Contact",
      ar: "Contact",
      de: "Contact",
      es: "Contact",
      sv: "Contact",
      pt: "Contact",
      fi: "Contact",
      pl: "Contact",
      th: "Contact",
      ms: "Contact",
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
