<script>
export default {
  name: "BrandName",
  setup() {
    const brandName = process.env.VUE_APP_BRAND_TITLE; // get the brand title

    return { brandName };
  },
};
</script>

<template>
  {{ brandName }}
</template>

<style></style>
