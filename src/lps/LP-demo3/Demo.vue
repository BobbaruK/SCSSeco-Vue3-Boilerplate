<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import languages from "./composables/translations/languages";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "./assets/scss/scsseco_lp.scss";
export default {
  name: "Demo3",
  components: { Header, Footer },
  emits: ["formBtnText", "showForm"],
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // form button translate
    ctx.emit("formBtnText", {
      en: "Join",
      it: "Giuntura",
      tr: "Katılmak",
      ro: "Alătură-te",
      hu: "Csatlakozik",
      ar: "انضم",
      de: "Beitreten",
      es: "Entrar",
      sv: "Ansluta sig",
      pt: "Juntar",
      fi: "Liittyä seuraan",
      pl: "Dołączyć",
      th: "เข้าร่วม",
      ms: "Sertai",
    });

    // redirect
    const { lang, defaultLang } = languages();
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (lang.indexOf(route.params.lang) == -1) {
        router.replace({ name: "Demo3Home", params: { lang: defaultLang } });
      }
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
  <Header :lang="lang" />
  <main>
    <router-view @showForm="formCall" />
  </main>
  <Footer :lang="lang" />
</template>

<style lang="scss">
#siteWrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
