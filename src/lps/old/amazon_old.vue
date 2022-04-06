<script>
import { onMounted } from "@vue/runtime-core";
export default {
  name: "AmazonOld",
  emits: ["formBtnText", "showForm"],
  props: {},
  setup() {
    // redirect

    onMounted(() => {
      window.location.href = "/old/lp/amazon";
    });

    return {};
  },
};
</script>

<template>amazon old</template>

<style lang="scss"></style>
