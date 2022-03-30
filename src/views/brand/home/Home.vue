<script>
import { onUpdated } from "@vue/runtime-core";
import languages from "../../../composables/translations/languages";
import checkLangAndMeta from "../../../composables/translations/checkLangAndMeta";
import Section1 from "./Section1.vue";

export default {
  name: "Home",
  components: { Section1 },
  emits: ["showForm"],
  props: ["lang"],
  setup(props, ctx) {
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
