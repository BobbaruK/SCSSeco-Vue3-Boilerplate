<script>
import languages from "../../../../../composables/translations/languages";
import checkLangAndMeta from "../../../../../composables/translations/checkLangAndMeta";
import Header from "../../../../../components/Header.vue";
import Footer from "../../../../../components/Footer.vue";
import Section1 from "./Section1.vue";
import { onMounted, onUpdated } from "@vue/runtime-core";

export default {
  name: "MusicServicesBeat",
  components: { Header, Footer, Section1 },
  props: ["lang"],
  setup(props) {
    const documentTitleTransl = {
      en: "Verse - Music Services",
      it: "Verse - Music Services",
      tr: "Verse - Music Services",
      ro: "Verse - Music Services",
      hu: "Verse - Music Services",
      ar: "Verse - Music Services",
      de: "Verse - Music Services",
      es: "Verse - Music Services",
      sv: "Verse - Music Services",
      pt: "Verse - Music Services",
      fi: "Verse - Music Services",
      pl: "Verse - Music Services",
      th: "Verse - Music Services",
      ms: "Verse - Music Services",
    };

    const { lang } = languages();
    checkLangAndMeta(props.lang, lang, documentTitleTransl);
    onUpdated(() => {
      checkLangAndMeta(props.lang, lang, documentTitleTransl);
    });

    return {};
  },
};
</script>

<template>
  <Section1 :lang="lang" />
</template>
