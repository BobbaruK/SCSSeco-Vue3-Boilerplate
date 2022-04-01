<script>
import { onUpdated } from "@vue/runtime-core";
import languages from "../../../../../composables/translations/languages";
import checkLangAndMeta from "../../../../../composables/translations/checkLangAndMeta";
import Section1 from "./Section1.vue";

export default {
  name: "WebServicesCode",
  components: { Section1 },
  props: {
    lang: String,
  },
  setup(props) {
    const documentTitleTransl = {
      en: "Code - Web Services",
      it: "Code - Web Services",
      tr: "Code - Web Services",
      ro: "Code - Web Services",
      hu: "Code - Web Services",
      ar: "Code - Web Services",
      de: "Code - Web Services",
      es: "Code - Web Services",
      sv: "Code - Web Services",
      pt: "Code - Web Services",
      fi: "Code - Web Services",
      pl: "Code - Web Services",
      th: "Code - Web Services",
      ms: "Code - Web Services",
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
