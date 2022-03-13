<script>
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar },
  name: "Header",
  props: ["lang"],
  setup() {
    // Language
    return {};
  },
};
</script>

<template>
  <header id="header" class="siteHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Header - {{ lang }}</h2>
          <nav class="scsseco-menu">
            <router-link :to="{ name: 'Demo-Home', params: { lang: lang } }" class="logo">Logo</router-link>
            <Navbar :lang="lang" />
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header#header.siteHeader {
  background: crimson;
}
</style>
