<script>
import Modal from "../../../components/global_components/Modal/Modal.vue";
import Form from "../../../components/global_components/Form/Form.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "Brand~Home~Section2",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup() {
    const formDetailsSection = {
      formID: "brand-home-section2",
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

    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-section2-modalForm",
      maxWidth: "700px",
      // delay: 500,
    };

    const showModalFormFunct = () => {
      showModalForm.value = true;
      // clearTimeout(timeOut);
    };

    // const timeOut = setTimeout(showModalFormFunct, 3000);

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

    return {
      formDetailsSection,
      showModalForm,
      modalDetailsForm,
      showModalFormFunct,
      closeModalForm,
      formDetails,
    };
  },
};
</script>

<template>
  <section id="section2" class="">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <button class="scssecoBtn" @click="showModalFormFunct">Modal form</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Form :lang="lang" :formDetails="formDetailsSection" />
        </div>
      </div>
    </div>
    <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="closeModalForm">
      <h1>Lorem, ipsum dolor.</h1>
      <Form :lang="lang" :formDetails="formDetails" />
    </Modal>
  </section>
</template>

<style lang="scss">
$borderRadius: 10px;

#brand-home-section2-form {
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
  #brand-home-section2-form {
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
