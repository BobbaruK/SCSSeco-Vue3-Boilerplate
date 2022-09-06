<script>
import { onMounted } from "@vue/runtime-core";

import footerTransl from "@/composables/global/footerTransl";

export default {
  name: "LP~Demo3~Footer",
  props: {
    lang: String,
  },
  setup() {
    const { content } = footerTransl();

    onMounted(() => {
      if (document.getElementById("year")) {
        document.getElementById("year").innerText = new Date().getFullYear(); // year
      }
    });

    return { content };
  },
};
</script>

<template>
  <footer id="footer" class="siteFooter">
    <div class="container">
      <div class="row">
        <div class="col-12" v-html="content[lang]"></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer#footer.siteFooter {
  background-color: var(--clr-brandPrimaryColor);
  color: var(--clr-brandSecondaryColor);
}
</style>
