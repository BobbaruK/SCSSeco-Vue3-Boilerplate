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
    }, 250);

    const formCall = () => {
      ctx.emit("showForm", {
        en: "Form Title - Demo1 - en",
        it: "Form Title - Demo1 - it",
        tr: "Form Title - Demo1 - tr",
        ro: "Form Title - Demo1 - ro",
        hu: "Form Title - Demo1 - hu",
        ar: "Form Title - Demo1 - ar",
        de: "Form Title - Demo1 - de",
        es: "Form Title - Demo1 - es",
        sv: "Form Title - Demo1 - sv",
        pt: "Form Title - Demo1 - pt",
        fi: "Form Title - Demo1 - fi",
        pl: "Form Title - Demo1 - pl",
        th: "Form Title - Demo1 - th",
        ms: "Form Title - Demo1 - ms",
      });
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
