<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import languages from "./composables/translations/languages";
import './assets/scss/scsseco_app.scss'
export default {
  name: "Demo",
  setup() {
    const { lang, defaultLang } = languages();
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (lang.indexOf(route.params.lang) == -1) {
        router.push({ name: "demoHome", params: { lang: defaultLang } });
      }
    });
  },
};
</script>

<template>
  Demo.vue <br />
  <router-view />
</template>

<style lang="scss">
#siteWrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
