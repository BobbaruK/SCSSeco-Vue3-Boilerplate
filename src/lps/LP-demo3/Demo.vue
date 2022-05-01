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
  emits: ["showForm", "formDetails"],
  props: {
    lang: String,
  },
  setup(_, ctx) {
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
      ctx.emit("showForm");
    };

    const eFormDets = (e) => {
      ctx.emit("formDetails", e);
    };

    return { formCall, eFormDets };
  },
};
</script>

<template>
  <Header :lang="lang" />
  <main>
    <router-view @showForm="formCall" @formDetails="eFormDets" />
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
