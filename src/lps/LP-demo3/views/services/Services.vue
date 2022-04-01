<script>
import languages from "../../composables/translations/languages";
import checkLangAndMeta from "../../../../composables/translations/checkLangAndMeta";
import Section1 from "./Section1.vue";
import { onUpdated } from "@vue/runtime-core";

export default {
  name: "Services",
  components: { Section1 },
  props: {
    lang: String,
  },
  setup(props) {

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
