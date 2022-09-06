<script>
import Header from "../../components/brand/Header.vue";
import BreadCrumbs from "../../components/global/Breadcrumbs/Breadcrumbs.vue";
import Footer from "../../components/brand/Footer.vue";
import languages from "../../composables/translations/languages";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

import "../../assets/scss/global/scsseco_global.scss";
import "../../assets/scss/brand/scsseco_brand.scss";
export default {
  name: "Brand",
  components: { Header, BreadCrumbs, Footer },
  props: {
    lang: String,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    /**
     * Redirect
     */
    const { lpLangs } = languages();
    onMounted(() => {
      if (lpLangs.indexOf(route.params.lang) == -1) {
        router.replace({ name: "HomeRedirect" });
      }
    });

    return {};
  },
};
</script>

<template>
  <Header :lang="lang" />
  <main>
    <BreadCrumbs :lang="lang" :showHomeIcon="true" />
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
