<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import languages from "./composables/translations/languages";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "./assets/scss/scsseco_lp.scss";
export default {
  name: "Demo",
  components: { Header, Footer },
  props: ['lang'],
  setup() {
    const { lang, defaultLang } = languages();
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (lang.indexOf(route.params.lang) == -1) {
        router.push({ name: "Demo1Home", params: { lang: defaultLang } });
      }
    });
  },
};
</script>

<template>
  <Header :lang="lang" />
  <main>
    <router-view />
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
