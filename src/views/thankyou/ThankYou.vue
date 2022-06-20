<script>
import { gsap } from "gsap";
import checkLangAndMeta from "../../composables/translations/checkLangAndMeta";
import languages from "../../composables/translations/languages";
import "../../assets/scss/globals/scsseco_global.scss";
import "../../assets/scss/thankyou/scsseco_thankyou.scss";
import { onMounted, onUpdated } from "@vue/runtime-core";
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
    const title = {
      en: "Thank you!",
      it: "Grazie",
      tr: "Teşekkürler!",
      ro: "Mulțumesc!",
      hu: "Köszönjük!",
      ar: "شكرًا لك!",
      de: "",
      es: "Gracias!",
      sv: "Tack!",
      pt: "",
      fi: "Kiitos!",
      pl: "Dziękujemy!",
      th: "",
      ms: "Terima kasih!",
    };

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, lpLangs, title);
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, title);
    });

    // Redirect
    onMounted(() => {
      setTimeout(() => {
        window.location.href = "/";
      }, 10000);
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
