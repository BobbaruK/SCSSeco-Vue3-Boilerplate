<script>
import beatSection1Transl from "@/composables/brand/pages/services/musicServices/beat/beatSection1Transl";

export default {
  name: "Brand~MusicServices~Beat~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup() {
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
