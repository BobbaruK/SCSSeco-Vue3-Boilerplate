<template>
  <router-view />
</template>

<script>
export default {
  name: "SiteWrapper",
  setup() {},
};
</script>

<style lang="scss">
@use "./assets/scss/abstracts/variables" as vars;
@use "./assets/scss/abstracts/mixins" as mxns;

#siteWrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
