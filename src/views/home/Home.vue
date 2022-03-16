<script>
import { onUpdated } from "@vue/runtime-core";
import checkLangAndMeta from "../../composables/translations/checkLangAndMeta";
import Section1 from "./Section1.vue";

export default {
  name: "Home",
  components: { Section1 },
  props: ["lang"],
  setup(props) {
    const documentTitleTransl = {
      en: "Home",
      it: "Casa",
      tr: "Ev",
      ro: "Acasă",
      hu: "Itthon",
      ar: "مسكن",
      de: "Heim",
      es: "Casa",
      sv: "Hem",
      pt: "Casa",
      fi: "Koti",
      pl: "Dom",
      th: "บ้าน",
      ms: "Rumah",
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
