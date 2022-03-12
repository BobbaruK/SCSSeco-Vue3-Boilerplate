<script>
import Form from "../../components/Form.vue";
import homeSection1Transl from "../../composables/translations/pages/home/homeSection1Transl";

export default {
  name: "HomeSection1",
  components: { Form },
  props: ["lang"],
  setup() {
    const { title, content } = homeSection1Transl();

    return { title, content };
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
        <div class="col-12"><Form :lang="lang" /></div>
        <div class="col-12" v-html="content[lang]"></div>
        <div class="col-12"><Form :lang="lang" /></div>
      </div>
    </div>
  </section>
</template>

<style></style>
