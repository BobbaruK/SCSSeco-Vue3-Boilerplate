<template>
  <footer id="footer" class="siteFooter">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p>
            Trading carries a high level of risk for your capital due to the volatility of the underlying market.
            Trading is not suitable for everyone and may result in you losing all your investment.
            <BrandName /> products may not be suitable for all investors. Therefore, you should ensure that you
            understand the risks and seek advice from an independent and suitably licensed financial advisor.
            <span id="year"></span> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import BrandName from "../components/BrandName.vue";

export default {
  name: "Footer",
  components: { BrandName },
  props: ["lang"],
  setup() {
    onMounted(() => {
      document.getElementById("year").innerText = new Date().getFullYear(); // year
    });
  },
};
</script>

<style lang="scss">
footer#footer.siteFooter {
}
</style>
