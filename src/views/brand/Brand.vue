<script>
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

import languages from "../../composables/brand/languages";
import { useWebStoreBrand } from "@/stores/WebStoreBrand"; // web store

import Header from "@/components/brand/Header.vue";
import BreadCrumbs from "@/components/global/Breadcrumbs/Breadcrumbs.vue";
import Footer from "@/components/brand/Footer.vue";
import BackToTop from "@/components/global/BackToTop/BackToTop.vue";

import "@/assets/scss/brand/scsseco_brand.scss";

export default {
  name: "Brand",
  components: { Header, BreadCrumbs, Footer, BackToTop },
  props: {
    lang: String,
    productID: String,
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

    // fetch products
    const webStore = useWebStoreBrand(); // web store
    webStore.productsFetch();

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
  <BackToTop :bttDetails="{ bttID: 'backToTopBrand' }" />
</template>

<style lang="scss"></style>
