<script>
import demoSection1Transl from "../../composables/translations/pages/home/demoSection1Transl";

export default {
  name: "DemoHomeSection1",
  emits: ["showForm"],
  props: ["lang"],
  setup(_, ctx) {
    // Translations
    const { title, content, formBtn } = demoSection1Transl();

    // form call
    const formTimeOut = setTimeout(() => {
      formCall();
    }, 3000);

    const formCall = () => {
      ctx.emit("showForm");
      clearTimeout(formTimeOut);
    };

    return { title, content, formBtn, formCall };
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
          <button class="scssecoBtn" @click="formCall">{{ formBtn[lang] }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
