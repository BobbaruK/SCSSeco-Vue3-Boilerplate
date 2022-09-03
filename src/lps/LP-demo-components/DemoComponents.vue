<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import languages from "./composables/translations/languages";
import Header from "./components/Header.vue";
import BreadCrumbs from "../../components/global_components/Breadcrumbs/Breadcrumbs.vue";
import Footer from "./components/Footer.vue";
import "./assets/scss/scsseco_lp.scss";
export default {
  name: "LP~DemoComponents",
  components: { Header, BreadCrumbs, Footer },
  props: {
    lang: String,
  },
  setup() {
    // redirect
    const { lpLangs, defaultLang } = languages();
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (lpLangs.indexOf(route.params.lang) == -1) {
        router.replace({ name: "DemoComponentsHome", params: { lang: defaultLang } });
      }
    });

    return {};
  },
};
</script>

<template>
  <Header :lang="lang" />
  <main>
    <BreadCrumbs :lang="lang" />
    <router-view />
  </main>
  <Footer :lang="lang" />
</template>

<style lang="scss">
@use "../../assets/scss/brand/abstracts/variables" as vars;

#siteWrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
