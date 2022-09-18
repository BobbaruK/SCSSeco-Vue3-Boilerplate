<script>
import { ref } from "@vue/reactivity";

import demoSection1Transl from "../../composables/translations/pages/home/demoSection1Transl";
import translationsGlossary from "@/composables/global/translationsGlossary";

import Modal from "../../../../../components/global/Modal/Modal.vue";
import Form from "@/components/global/Form/Form.vue";

export default {
  name: "LP~DemoComponents~Home~Section1",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, content, formBtn } = demoSection1Transl();

    // Modal with form
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-modal-form",
      delay: 3000,
    };

    const formDetails = {
      formID: "DemoComponents-section1",
      layout: 1,
      button: translationsGlossary.j.join,
    };

    return {
      title,
      content,
      formBtn,
      showModalForm,
      modalDetailsForm,
      formDetails,
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
        <div class="col-12">
          <button class="scssecoBtn" @click="showModalForm = !showModalForm">{{ formBtn[lang] }}</button>
        </div>
      </div>
    </div>
  </section>
  <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="showModalForm = false">
    <h1>Lorem, ipsum dolor.</h1>
    <Form :lang="lang" :formDetails="formDetails" />
  </Modal>
</template>

<style lang="scss">
$borderRadius: 10px;

#DemoComponents-section1-form {
  .form-control {
    label {
      &:not(.agreement):not(.gdpr) {
        bottom: 5px;
        display: none;
        left: 0;
        padding: 5px;
        // pointer-events: none;
        // position: absolute;
      }
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#41220b+0,41220b+44,c36522+100 */
      background: var(--clr-brandPrimaryColor-dark); /* Old browsers */
      background: -moz-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

      border-radius: var(--borderRadius);
      border: 1px solid var(--clr-brandPrimaryColor-dark);
      color: var(--clr-white);
      height: 40px;
    }
    .phone {
      [type="text"] {
        border-radius: var(--borderRadius) 0 0 var(--borderRadius);
      }
      [type="tel"] {
        border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
      }
    }
    button[type="submit"] {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#41220b+0,41220b+44,c36522+100 */
      background: var(--clr-brandPrimaryColor-dark); /* Old browsers */
      background: -moz-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      border-radius: var(--borderRadius);
      border: 2px solid var(--clr-brandPrimaryColor-light);
      color: var(--clr-brandPrimaryColor-light);
      height: 40px;
      &:hover {
        border: 2px solid var(--clr-brandPrimaryColor);
      }
    }
  }
}
</style>
