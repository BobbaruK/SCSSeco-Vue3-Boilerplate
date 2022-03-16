<script>
import checkLangAndMeta from "../../../composables/translations/checkLangAndMeta";
import languages from "../../composables/translations/languages";
import Section1 from "./Section1.vue";
import { onUpdated } from "@vue/runtime-core";

export default {
  name: "Demo1Home",
  components: { Section1 },
  props: ["lang"],
  setup(props) {
    const { lang } = languages();

    const documentTitleTransl = {
      en: "Demo1",
      it: "Demo1",
      tr: "Demo1",
      ro: "Demo1",
      hu: "Demo1",
      ar: "Demo1",
      de: "Demo1",
      es: "Demo1",
      sv: "Demo1",
      pt: "Demo1",
      fi: "Demo1",
      pl: "Demo1",
      th: "Demo1",
      ms: "Demo1",
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
