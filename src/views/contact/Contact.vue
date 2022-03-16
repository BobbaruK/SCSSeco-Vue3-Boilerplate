<script>
import { onUpdated } from "@vue/runtime-core";
import checkLangAndMeta from "../../composables/translations/checkLangAndMeta";
import Section1 from "./Section1.vue";

export default {
  name: "Contact",
  components: { Section1 },
  props: ["lang"],
  setup(props) {
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

    checkLangAndMeta(props.lang, documentTitleTransl);

    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl);
    });

    return {};
  },
};
</script>

<template>
  <Section1 :lang="lang" />
</template>
