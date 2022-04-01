<script>
import languages from "../../composables/translations/languages";
import checkLangAndMeta from "../../../../composables/translations/checkLangAndMeta";
import Section1 from "./Section1.vue";
import { onUpdated } from "@vue/runtime-core";

export default {
  name: "Contact",
  components: { Section1 },
  props: {
    lang: String,
  },
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
