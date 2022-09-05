<script>
import aboutLPSection1Transl from "../../../composables/translations/pages/about/about_lp/aboutLPSection1Transl";

export default {
  name: "LP~DemoComponents~About~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    const { title, content } = aboutLPSection1Transl();

    return {
      title,
      content,
    };
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
      </div>
    </div>
  </section>
</template>

<style></style>
