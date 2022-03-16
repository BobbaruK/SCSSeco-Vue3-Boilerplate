<script>
import { onUpdated } from "@vue/runtime-core";
import checkLangAndMeta from "../../../../composables/translations/checkLangAndMeta";
import Section1 from "./Section1.vue";

export default {
  name: "MusicServicesBeat",
  components: { Section1 },
  props: ["lang"],
  setup(props) {
    const documentTitleTransl = {
      en: "Beat - Music Services",
      it: "Beat - Music Services",
      tr: "Beat - Music Services",
      ro: "Beat - Music Services",
      hu: "Beat - Music Services",
      ar: "Beat - Music Services",
      de: "Beat - Music Services",
      es: "Beat - Music Services",
      sv: "Beat - Music Services",
      pt: "Beat - Music Services",
      fi: "Beat - Music Services",
      pl: "Beat - Music Services",
      th: "Beat - Music Services",
      ms: "Beat - Music Services",
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
