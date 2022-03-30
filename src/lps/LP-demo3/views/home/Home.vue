<script>
import languages from "../../composables/translations/languages";
import checkLangAndMeta from "../../../../composables/translations/checkLangAndMeta";
import Section1 from "./Section1.vue";
import { onUpdated } from "@vue/runtime-core";

export default {
  name: "Demo3Home",
  components: { Section1 },
  emits: ["showForm"],
  props: ["lang"],
  setup(props, ctx) {
    const documentTitleTransl = {
      en: "Demo3",
      it: "Demo3",
      tr: "Demo3",
      ro: "Demo3",
      hu: "Demo3",
      ar: "Demo3",
      de: "Demo3",
      es: "Demo3",
      sv: "Demo3",
      pt: "Demo3",
      fi: "Demo3",
      pl: "Demo3",
      th: "Demo3",
      ms: "Demo3",
    };

    const { lang } = languages();
    checkLangAndMeta(props.lang, lang, documentTitleTransl);
    onUpdated(() => {
      checkLangAndMeta(props.lang, lang, documentTitleTransl);
    });

    // form call
    const formCall = (e) => {
      ctx.emit("showForm", e);
    };

    return { formCall };
  },
};
</script>

<template>
  <Section1 :lang="lang" @showForm="formCall" />
</template>
