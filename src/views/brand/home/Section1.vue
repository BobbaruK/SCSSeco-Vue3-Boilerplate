<script>
import homeSection1Transl from "../../../composables/translations/pages/home/homeSection1Transl";

export default {
  name: "HomeSection1",
  emits: ["showForm"],
  props: ["lang"],
  setup(_, ctx) {
    // Translations
    const { title, content } = homeSection1Transl();

    // form call
    const formCall = () => {
      ctx.emit("showForm", true);
    };

    return { title, content, formCall };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ title[lang] }}</h1>
        </div>
        <div class="col-12" v-html="content[lang]"></div>
        <div class="col-12">
          <button class="scssecoBtn" @click="formCall">asd</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
