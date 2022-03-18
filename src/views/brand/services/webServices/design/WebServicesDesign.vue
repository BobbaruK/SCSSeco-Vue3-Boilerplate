<script>
import { onUpdated } from "@vue/runtime-core";
import languages from "../../../../../composables/translations/languages";
import checkLangAndMeta from "../../../../../composables/translations/checkLangAndMeta";
import Section1 from "./Section1.vue";

export default {
  name: "WebServicesDesign",
  components: { Section1 },
  props: ["lang"],
  setup(props) {
    const documentTitleTransl = {
      en: "Design - Web Services",
      it: "Design - Web Services",
      tr: "Design - Web Services",
      ro: "Design - Web Services",
      hu: "Design - Web Services",
      ar: "Design - Web Services",
      de: "Design - Web Services",
      es: "Design - Web Services",
      sv: "Design - Web Services",
      pt: "Design - Web Services",
      fi: "Design - Web Services",
      pl: "Design - Web Services",
      th: "Design - Web Services",
      ms: "Design - Web Services",
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
