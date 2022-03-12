<script>
import checkLangAndMeta from "../../composables/translations/checkLangAndMeta";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Section1 from "./Section1.vue";

export default {
  name: "About",
  components: { Header, Footer, Section1 },
  props: ["lang"],
  setup(props) {
    const documentTitleTransl = {
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
      th: "เกี่ยวกับ",
      ms: "Tentang",
    };

    checkLangAndMeta(props.lang, documentTitleTransl);

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
