<script>
import aboutSection1Transl from "../../../composables/translations/pages/about/about/aboutSection1Transl";

export default {
  name: "LP~DemoComponents~About~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup() {
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
          <router-link class="scssecoBtn" :to="{ name: 'DemoComponentsAboutLP', params: { lang: lang } }">
            about lp
          </router-link>
        </div>
        <div class="col-12" v-html="content[lang]"></div>
      </div>
    </div>
  </section>
</template>

<style></style>
