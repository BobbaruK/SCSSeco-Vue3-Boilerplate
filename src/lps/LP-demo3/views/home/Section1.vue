<script>
import demoSection1Transl from "../../composables/translations/pages/home/demoSection1Transl";

export default {
  name: "DemoHomeSection1",
  emits: ["showForm", "formDetails"],
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // Translations
    const { title, content, formBtn } = demoSection1Transl();

    // form call
    const formTimeOut = setTimeout(() => {
      formCall();
    }, 1000);

    ctx.emit("formDetails", {
      id: "brand-modal",
      layout: 1,
      title: {
        en: "Form Title - Demo3 - en",
        it: "Form Title - Demo3 - it",
        tr: "Form Title - Demo3 - tr",
        ro: "Form Title - Demo3 - ro",
        hu: "Form Title - Demo3 - hu",
        ar: "Form Title - Demo3 - ar",
        de: "Form Title - Demo3 - de",
        es: "Form Title - Demo3 - es",
        sv: "Form Title - Demo3 - sv",
        pt: "Form Title - Demo3 - pt",
        fi: "Form Title - Demo3 - fi",
        pl: "Form Title - Demo3 - pl",
        th: "Form Title - Demo3 - th",
        ms: "Form Title - Demo3 - ms",
      },
      button: {
        en: "Join",
        it: "Giuntura",
        tr: "Katılmak",
        ro: "Alătură-te",
        hu: "Csatlakozik",
        ar: "انضم",
        de: "Beitreten",
        es: "Entrar",
        sv: "Ansluta sig",
        pt: "Juntar",
        fi: "Liittyä seuraan",
        pl: "Dołączyć",
        th: "เข้าร่วม",
        ms: "Sertai",
      },
    });

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
