<script>
import aboutSection1Transl from "../../composables/translations/pages/about/aboutSection1Transl";

export default {
  name: "LP~Demo3~About~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup(props) {
    const { title, content } = aboutSection1Transl();

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
        <div class="col-12" v-html="content[lang]"></div>
      </div>
    </div>
  </section>
</template>

<style></style>
