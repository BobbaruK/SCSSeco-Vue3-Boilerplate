<script>
import homeSection1Transl from "../../../composables/translations/pages/home/homeSection1Transl";

export default {
  name: "HomeSection1",
  emits: ["showForm"],
  props: ["lang"],
  setup(_, ctx) {
    // Translations
    const { title, content, formBtn } = homeSection1Transl();

    // form call
    const formTimeOut = setTimeout(() => {
      formCall();
    }, 3000);

    const formCall = () => {
      ctx.emit("showForm", {
        en: "Form Title - Brand - en",
        it: "Form Title - Brand - it",
        tr: "Form Title - Brand - tr",
        ro: "Form Title - Brand - ro",
        hu: "Form Title - Brand - hu",
        ar: "Form Title - Brand - ar",
        de: "Form Title - Brand - de",
        es: "Form Title - Brand - es",
        sv: "Form Title - Brand - sv",
        pt: "Form Title - Brand - pt",
        fi: "Form Title - Brand - fi",
        pl: "Form Title - Brand - pl",
        th: "Form Title - Brand - th",
        ms: "Form Title - Brand - ms",
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
