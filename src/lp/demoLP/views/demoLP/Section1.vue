<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ title }}</h1>
        </div>
        <div class="col-12"><Form :lang="lang" /></div>
        <div class="col-12">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit temporibus, natus consequatur a illo dolore cumque animi earum nobis maxime eveniet sit? Mollitia saepe ipsum, soluta odio itaque facere magni, id ducimus expedita accusantium eum in dolor eveniet nostrum libero? Praesentium, adipisci necessitatibus. Ut exercitationem odit alias corporis error magnam natus aspernatur dolore tenetur unde quas rem fugit saepe repellendus quos a voluptas ipsum sapiente eligendi, dolores et placeat aliquam architecto harum! Eos quam architecto eaque vitae quisquam distinctio praesentium unde sed ea. Iste ipsa officiis consectetur tenetur cum asperiores corrupti explicabo dolor ipsum necessitatibus repudiandae praesentium dolore, voluptates commodi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit temporibus, natus consequatur a illo dolore cumque animi earum nobis maxime eveniet sit? Mollitia saepe ipsum, soluta odio itaque facere magni, id ducimus expedita accusantium eum in dolor eveniet nostrum libero? Praesentium, adipisci necessitatibus. Ut exercitationem odit alias corporis error magnam natus aspernatur dolore tenetur unde quas rem fugit saepe repellendus quos a voluptas ipsum sapiente eligendi, dolores et placeat aliquam architecto harum! Eos quam architecto eaque vitae quisquam distinctio praesentium unde sed ea. Iste ipsa officiis consectetur tenetur cum asperiores corrupti explicabo dolor ipsum necessitatibus repudiandae praesentium dolore, voluptates commodi.</p>
        </div>
        <div class="col-12"><Form :lang="lang" /></div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import Form from "../../components/Form.vue";
import demoLPSection1Transl from "../../composables/translations/pages/home/demoLPSection1Transl";
import switchLang from "../../../../composables/translations/switchLang";

export default {
  name: "HomeSection1",
  components: { Form },
  props: ["lang"],
  setup(props) {
    const title = ref();
    const { titleTransl } = demoLPSection1Transl();

    switchLang(title, titleTransl, props.lang);

    return { title };
  },
};
</script>

<style></style>
