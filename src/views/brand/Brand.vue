<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import languages from "../../composables/translations/languages";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

import "../../assets/scss/globals/scsseco_global.scss";
import "../../assets/scss/brand/scsseco_brand.scss";
export default {
  name: "Brand",
  components: { Header, Footer },
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
