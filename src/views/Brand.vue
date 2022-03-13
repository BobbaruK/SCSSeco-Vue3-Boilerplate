<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import languages from "../composables/translations/languages";
export default {
  name: "Brand",
  setup() {
    const { lang, defaultLang } = languages();
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (lang.indexOf(route.params.lang) == -1) {
        router.push({ name: "Home", params: { lang: defaultLang } });
      }
    });
  },
};
</script>

<template>Brand.vue <br>
  <router-view />
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
