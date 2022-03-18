<script>
import LanguageChooser from "./LanguageChooser.vue";
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar, LanguageChooser },
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
          <LanguageChooser :lang="lang" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12" style="position: static">
          <h2>Header - {{ lang }}</h2>
          <Navbar :lang="lang" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header#header.siteHeader {
  background-color: greenyellow;
}
</style>
