<script>
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Footer",
  props: ["lang"],
  setup() {
    onMounted(() => {
      document.getElementById("year").innerText = new Date().getFullYear(); // year
    });
  },
};
</script>

<template>
  <footer id="footer" class="siteFooter">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p>
            Trading carries a high level of risk for your capital due to the volatility of the underlying market.
            Trading is not suitable for everyone and may result in you losing all your investment.
            <!-- {{ process.env.VUE_APP_BRAND_TITLE }} products may not be suitable for all investors. Therefore, you should ensure that you -->
            understand the risks and seek advice from an independent and suitably licensed financial advisor.
            <span id="year"></span> All rights reserved.
          </p>
        </div>
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
