<template>
  <section class="notFound">
    <h1>404!</h1>
    <h4>{{ title }}</h4>
    <div class="buttons">
      <button @click="goBack">Back</button>
      <button @click="goHome">Home</button>
    </div>
  </section>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import checkLangAndMeta from "../composables/translations/checkLangAndMeta";
import switchLang from "../composables/translations/switchLang";
import languages from "../composables/translations/languages";
import notFoundTransl from "../composables/translations/pages/notFound/notFoundTransl";
import { ref } from "@vue/reactivity";
export default {
  name: "PageNotFound",
  props: ["lang"],
  setup(props) {
    // Go Back Go Home
    const router = useRouter();
    const {  defaultLang } = languages();

    const goBack = () => {
      router.go(-1);
    };
    const goHome = () => {
      window.location.href = `/${defaultLang}`;
    };

    // Translations
    checkLangAndMeta(props.lang);

    const pageTitle = ref();
    const titleTransl = {
      en: "404",
      it: "404",
      tr: "404",
      ro: "404",
      hu: "404",
      ar: "404",
      de: "404",
      es: "404",
      sv: "404",
      pt: "404",
      fi: "404",
      pl: "404",
    };
    switchLang(pageTitle, titleTransl, props.lang);

    const title = ref();
    const { notFoundTitleTransl } = notFoundTransl();
    switchLang(title, notFoundTitleTransl, props.lang);

    // head tag
    const docTitle = document.querySelector("title");
    docTitle.innerText = `${process.env.VUE_APP_BRAND_TITLE} | ${pageTitle.value}`;

    return { goBack, goHome, title };
  },
};
</script>

<style lang="scss">
.notFound {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  .buttons {
    display: flex;
    gap: 1rem;
  }
}
</style>
