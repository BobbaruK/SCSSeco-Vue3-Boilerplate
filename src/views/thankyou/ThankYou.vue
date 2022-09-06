<script>
import { onMounted, onUpdated } from "@vue/runtime-core";
import { gsap } from "gsap";

import checkLangAndMeta from "@/composables/global/checkLangAndMeta";
import languages from "@/composables/brand/languages";
import thankYouSection1Transl from "@/composables/thankYou/thankYouSection1Transl";

import "@/assets/scss/global/scsseco_global.scss";
import "@/assets/scss/thankyou/scsseco_thankyou.scss";

export default {
  name: "ThankYou",
  props: {
    lang: String,
  },
  setup(props) {
    // Animations
    onMounted(() => {
      gsap.from("h1", {
        scale: 0,
        duration: 0.6,
      });
    });

    // Meta
    const { tyTitleTransl } = thankYouSection1Transl();
    const title = tyTitleTransl;

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, lpLangs, title);
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, title);
    });

    return { title };
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 thankYou">
        <h1>{{ title[lang] }}</h1>
      </div>
    </div>
  </div>
</template>

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
