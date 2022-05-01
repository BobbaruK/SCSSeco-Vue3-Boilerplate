<script>
import Form from "../../../components/Form.vue";

export default {
  name: "HomeSection2",
  components: { Form },
  emits: ["showForm"],
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // Translations
    const formDetails = {
      id: "brand-home-section2",
      layout: 1,
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
    };

    return { formDetails };
  },
};
</script>

<template>
  <section id="section2" class="">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Form :lang="lang" :formDetails="formDetails" />
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
