<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import languages from "../composables/translations/languages";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import "../assets/scss/scsseco_app.scss";
export default {
  name: "Brand",
  components: { Header, Footer },
  props: ["lang"],
  setup() {
    const { lang } = languages();
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (lang.indexOf(route.params.lang) == -1) {
        router.push({ name: "HomeRedirect" });
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
@use "../assets/scss/abstracts/variables" as vars;
@use "../assets/scss/abstracts/mixins" as mxns;

#siteWrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
