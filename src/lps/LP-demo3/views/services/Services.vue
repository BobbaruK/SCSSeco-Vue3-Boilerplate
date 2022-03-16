<script>
import checkLangAndMeta from "../../../composables/translations/checkLangAndMeta";
import languages from "../../composables/translations/languages";
import Section1 from "./Section1.vue";
import { onUpdated } from "@vue/runtime-core";

export default {
  name: "Services",
  components: { Section1 },
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
