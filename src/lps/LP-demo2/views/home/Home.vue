<script>
import languages from "../../composables/translations/languages";
import checkLangAndMeta from "../../../../composables/translations/checkLangAndMeta";
import Section1 from "./Section1.vue";
import { onUpdated } from "@vue/runtime-core";

export default {
  name: "Demo2Home",
  components: { Section1 },
  emits: ["showForm"],
  props: {
    lang: String,
  },
  setup(props, ctx) {
    const documentTitleTransl = {
      en: "Demo2",
      it: "Demo2",
      tr: "Demo2",
      ro: "Demo2",
      hu: "Demo2",
      ar: "Demo2",
      de: "Demo2",
      es: "Demo2",
      sv: "Demo2",
      pt: "Demo2",
      fi: "Demo2",
      pl: "Demo2",
      th: "Demo2",
      ms: "Demo2",
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
