<script>
import checkLangAndMeta from "../../composables/translations/checkLangAndMeta";
import "../../assets/scss/scsseco_app.scss";
export default {
  name: "ThankYou",
  props: ["lang"],
  setup(props) {
    const documentTitleTransl = {
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
    checkLangAndMeta(props.lang, documentTitleTransl);

    const title = {
      en: "Thank You, Bitch!",
      it: "Grazie, puttana!",
      tr: "Teşekkürler, Kaltak!",
      ro: "Mulțumesc, cățea!",
      hu: "Köszönöm Szuka!",
      ar: "شكرا أيتها العاهرة!",
      de: "Danke, Hündin!",
      es: "¡Gracias, perra!",
      sv: "Tack, Bitch!",
      pt: "Obrigado, cadela!",
      fi: "Kiitos, Narttu!",
      pl: "Dziękuję, suko!",
      th: "ขอบคุณ นังบ้า!",
      ms: "Terima kasih, Jalang!",
    };

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
