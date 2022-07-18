<script>
import beatSection1Transl from "../../../../../composables/translations/pages/services/webServices/design/designSection1Transl";

export default {
  name: "Brand~WebServices~Design~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup(props) {
    const { title, content } = beatSection1Transl();

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
