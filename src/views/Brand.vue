<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import "../assets/scss/scsseco_app.scss";
export default {
  name: "Brand",
  components: { Header, Footer },
  props: ["lang"],
  setup() {
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
