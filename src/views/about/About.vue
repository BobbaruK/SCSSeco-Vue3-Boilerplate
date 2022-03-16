<script>
import { onUpdated } from "@vue/runtime-core";
import checkLangAndMeta from "../../composables/translations/checkLangAndMeta";
import Section1 from "./Section1.vue";

export default {
  name: "About",
  components: { Section1 },
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
