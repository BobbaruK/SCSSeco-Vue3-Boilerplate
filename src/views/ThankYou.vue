<template>
  <div class="container">
    <div class="row">
      <div class="col-12 thankYou">
        <h1>{{ title }}</h1>
        <!-- <p>go <a @click.prevent="goBack">back</a> or go <a @click.prevent="goHome">home</a></p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
// import { useRoute, useRouter } from "vue-router";
import checkLangAndMeta from "../composables/translations/checkLangAndMeta";
import switchLang from "../composables/translations/switchLang";
import thankYouSection1Transl from "../composables/translations/pages/thankYou/thankYouSection1Transl";
export default {
  name: "ThankYou",
  props: ["lang"],
  setup(props) {
    // Translations
    checkLangAndMeta(props.lang);

    const pageTitle = ref();
    const titleTransl = {
      en: "Thank You",
      it: "Grazie",
      tr: "Teşekkürler",
      ro: "Mulțumesc",
      hu: "Köszönöm",
      ar: "شكرا لكم",
      de: "Danke schön",
      es: "Gracias",
      sv: "Tack",
      pt: "Obrigada",
      fi: "Kiitos",
      pl: "Dziękuję",
    };
    switchLang(pageTitle, titleTransl, props.lang);

    const title = ref();
    const { tyTitleTransl } = thankYouSection1Transl();
    switchLang(title, tyTitleTransl, props.lang);


    // head tag
    const docTitle = document.querySelector("title");
    docTitle.innerText = `${process.env.VUE_APP_BRAND_TITLE} | ${pageTitle.value}`;

    return { title };
  },
};
</script>

<style lang="scss">
.thankYou {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  a {
    cursor: pointer;
  }
}
</style>
