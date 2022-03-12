<script>
import { onMounted, ref } from "@vue/runtime-core";
import checkLangAndMeta from "../../composables/translations/checkLangAndMeta";
import languages from "../composables/translations/languages";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Section1 from "./Section1.vue";
import { useRoute } from "vue-router";

export default {
  name: "DemoLP",
  components: { Header, Footer, Section1 },
  props: ["lang"],
  setup(props) {
    const { lang, defaultLang, lpNamePath } = languages();

    const documentTitleTransl = {
      en: "DemoLP",
      it: "DemoLP",
      tr: "DemoLP",
      ro: "DemoLP",
      hu: "DemoLP",
      ar: "DemoLP",
      de: "DemoLP",
      es: "DemoLP",
      sv: "DemoLP",
      pt: "DemoLP",
      fi: "DemoLP",
      pl: "DemoLP",
    };
    checkLangAndMeta(props.lang, lang, defaultLang, lpNamePath, documentTitleTransl);

    // redirect if not default lang
    const route = useRoute();
    onMounted(() => {
      if (lang.indexOf(route.params.lang) == -1) {
        window.location.href = `/lp/${lpNamePath}/${defaultLang}`;
      }
    });

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
