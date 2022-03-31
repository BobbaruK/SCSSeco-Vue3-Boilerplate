<script>
import { onMounted } from "@vue/runtime-core";
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
    }, 4000);

    const formCall = () => {
      ctx.emit("showForm", {
        en: "Form Title - Demo2 - en",
        it: "Form Title - Demo2 - it",
        tr: "Form Title - Demo2 - tr",
        ro: "Form Title - Demo2 - ro",
        hu: "Form Title - Demo2 - hu",
        ar: "Form Title - Demo2 - ar",
        de: "Form Title - Demo2 - de",
        es: "Form Title - Demo2 - es",
        sv: "Form Title - Demo2 - sv",
        pt: "Form Title - Demo2 - pt",
        fi: "Form Title - Demo2 - fi",
        pl: "Form Title - Demo2 - pl",
        th: "Form Title - Demo2 - th",
        ms: "Form Title - Demo2 - ms",
      });
      clearTimeout(formTimeOut);
    };

    onMounted(() => {
      setTimeout(() => {
        formCall();
      }, 2000);
    });

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
