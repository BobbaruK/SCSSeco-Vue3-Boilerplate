<script>
import checkLangAndMeta from "../../../composables/translations/checkLangAndMeta";
import languages from "../../composables/translations/languages";
import Section1 from "./Section1.vue";
import { onUpdated } from "@vue/runtime-core";

export default {
  name: "About",
  components: { Section1 },
  props: ["lang"],
  setup(props) {
    const { lang } = languages();

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
