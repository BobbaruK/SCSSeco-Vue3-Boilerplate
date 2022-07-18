<script>
import Modal from "../../../components/global_components/Modal/Modal.vue";
import Form from "../../../components/global_components/Form/Form.vue";
import homeSection1Transl from "../../../composables/translations/pages/home/homeSection1Transl";
import { ref } from "@vue/reactivity";

export default {
  name: "Brand~Home~Section1",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, content, formBtn } = homeSection1Transl();

    // Modal with form
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-modal-form",
      maxWidth: "600px",
    };

    const showModalFormFunct = () => {
      showModalForm.value = true;
      clearTimeout(timeOut);
    };

    const timeOut = setTimeout(showModalFormFunct, 3000);

    const closeModalForm = () => {
      showModalForm.value = false;
    };

    const formDetails = {
      formID: "brand-modal",
      layout: 2,
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

    // Modal other
    const modalDetailsOther = {
      modalID: "brand-home-modal-other",
    };

    const showModalOther = ref(false);

    const showModalOtherFunct = () => {
      showModalOther.value = true;
      clearTimeout(timeOut);
    };

    const closeModalOther = () => {
      showModalOther.value = false;
    };

    return {
      title,
      content,
      formBtn,
      showModalForm,
      modalDetailsForm,
      showModalFormFunct,
      closeModalForm,
      formDetails,
      modalDetailsOther,
      showModalOther,
      showModalOtherFunct,
      closeModalOther,
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
          <button class="scssecoBtn" @click="showModalFormFunct">{{ formBtn[lang] }}</button>
          &nbsp;
          <button class="scssecoBtn" @click="showModalOtherFunct">Other Modal</button>
        </div>
      </div>
    </div>
  </section>
  <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="closeModalForm">
    <h1>Lorem, ipsum dolor.</h1>
    <Form :lang="lang" :formDetails="formDetails" />
  </Modal>
  <Modal :lang="lang" :modalDetails="modalDetailsOther" v-model="showModalOther" @closeModal="closeModalOther">
    <h1>Lorem, ipsum dolor.</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate asperiores culpa fuga corporis excepturi?
      Molestias quam minima assumenda numquam error.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa perspiciatis similique eum hic earum adipisci
      quod nobis reiciendis, consectetur provident rerum exercitationem impedit quia incidunt dicta nesciunt. Nesciunt,
      similique.
    </p>
    <hr />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ducimus.</p>
  </Modal>
</template>

<style lang="scss">
$borderRadius: 10px;

#brand-modal-form {
  // position: relative;
  .error {
    color: var(--clr-danger);
    font-size: 80%;
    padding-bottom: 3px;
    padding-top: 1px;
  }

  label {
    cursor: pointer;
  }

  .form-control {
    padding-top: 1rem;
    position: relative;
    label {
      font-size: 1rem;
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

      border-radius: $borderRadius;
      border: 1px solid var(--clr-brandPrimaryColor-dark);
      color: var(--clr-white);
      height: 40px;
      max-width: 100%;
      padding: 5px 15px;
      transition: 350ms;
      width: 100%;
      &:hover {
      }
      &:focus {
        outline: none;
        border-bottom: 1px solid var(--clr-brandSecondaryColor);
      }
      &::placeholder {
        color: var(--clr-white);
      }
    }
    select option {
      margin: 40px;
      background: var(--clr-brandPrimaryColor-light);
      color: #fff;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
    }
    &.phone {
      display: flex;
      [type="text"] {
        max-width: 80px;
        border-radius: $borderRadius 0 0 $borderRadius;
        border-right: 1px solid var(--clr-gray-100);
      }
      [type="tel"] {
        border-radius: 0 $borderRadius $borderRadius 0;
      }
    }
    input[type="checkbox"] {
      margin-right: 0.5rem;
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
      border-radius: $borderRadius;
      border: 2px solid var(--clr-brandPrimaryColor-light);
      color: var(--clr-brandPrimaryColor-light);
      cursor: pointer;
      display: block;
      font-weight: bold;
      padding: 10px 15px;
      transition: 350ms;
      width: 100%;
      &:hover {
        background: var(--clr-brandPrimaryColor-light); /* Old browsers */
        border: 2px solid var(--clr-brandPrimaryColor);
        color: var(--clr-brandPrimaryColor-dark);
      }
    }
  }

  // Loader
  .loader {
    background: rgb(0 0 0 / 0.7);
    inset: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    .lds-ring {
      div {
        border-color: var(--clr-brandSecondaryColor) transparent transparent transparent;
      }
    }
  }
}

html[dir="rtl"] {
  #brand-modal-form {
    .form-control {
      &.phone {
        [type="text"] {
          border-radius: 0 $borderRadius $borderRadius 0;
          border-left: 1px solid var(--clr-gray-200);
          border-right: 1px solid var(--clr-brandPrimaryColor-dark);
        }
        [type="tel"] {
          border-radius: $borderRadius 0 0 $borderRadius;
        }
      }
      input[type="checkbox"] {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
