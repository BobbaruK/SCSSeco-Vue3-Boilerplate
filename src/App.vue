<script>
import BackToTop from "@/components/global/BackToTop/BackToTop.vue";

export default {
  name: "SiteWrapper",
  components: { BackToTop },
  setup() {},
};
</script>

<template>
  <router-view />
  <BackToTop />
</template>

<style lang="scss">
#siteWrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  position: relative;
}

pre code.hljs {
  @media screen and (max-width: 575px) {
    max-width: 250px;
  }
}
</style>
