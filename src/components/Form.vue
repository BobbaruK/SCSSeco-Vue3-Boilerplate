<template>
  <form @submit.prevent="validateForm" novalidate class="registerForm">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <label @click="labelClick" for="firstName">{{ firstName }}</label>
            <input v-model="firstNameValue" type="text" data-name="firstName" :placeholder="firstName" />
          </div>
          <div v-if="firstNameError.length" class="col-12 error">
            {{ firstNameError }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <label @click="labelClick" for="lastName">{{ lastName }}</label>
            <input v-model="lastNameValue" type="text" data-name="lastName" :placeholder="lastName" />
          </div>
          <div v-if="lastNameError.length" class="col-12 error">
            {{ lastNameError }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <label @click="labelClick" for="email">{{ email }}</label>
            <input v-model="emailValue" type="email" data-name="email" :placeholder="email" />
          </div>
          <div v-if="emailError.length" class="col-12 error">
            {{ emailError }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <label @click="labelClick" for="country">{{ country }}</label>
            <select v-model="countryValue" data-name="country">
              <option
                v-for="country in countries"
                :key="country.code"
                :value="country.code"
                :data-dial-code="country.dial_code"
              >
                {{ country.name }} ({{ country.code }})
              </option>
            </select>
          </div>
          <div v-if="countryError.length" class="col-12 error">
            {{ countryError }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <label @click="labelClick" for="phone">{{ phone }}</label>
            <input v-model="prefixValue" type="text" placeholder="prefix" tabindex="1" disabled />
            <input v-model="phoneValue" type="tel" data-name="phone" :placeholder="phone" />
          </div>
          <div v-if="phoneError.length" class="col-12 error">
            {{ phoneError }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <input v-model="agreementValue" type="checkbox" data-name="agreement" />
            <label @click="labelClick" for="agreement">{{ agreement }}</label>
          </div>
          <div v-if="agreementError.length" class="col-12 error">
            {{ agreementError }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <button class="scssecoBtn" type="submit">
          {{ submitBtn }}
        </button>
      </div>
    </div>
    <div class="row formLoader" v-if="validate">
      <Loader />
    </div>
  </form>
</template>

<script>
import formValidation from "../composables/formValidation/formValidation";
import Loader from "../components/Loader.vue";
import formTranslations from "../composables/translations/form/formTranslations";
// import { AsYouType } from "libphonenumber-js";

export default {
  name: "Footer",
  components: { Loader },
  props: ["lang"],
  setup(props) {
    const formBtnTransl = {
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
    };
    const { firstName, lastName, email, country, phone, agreement, submitBtn } = formTranslations(
      props.lang,
      formBtnTransl
    );

    const {
      firstNameValue,
      firstNameError,
      lastNameValue,
      lastNameError,
      emailValue,
      emailError,
      prefixValue,
      phoneValue,
      phoneError,
      countries,
      countryValue,
      countryError,
      agreementValue,
      agreementError,
      validate,
      validateForm,
    } = formValidation(props.lang);

    // Label click
    const getSiblings = (e) => {
      // get the siblings of the clicked label
      let siblings = []; // for collecting siblings
      if (!e.parentNode) {
        // if no parent, return no sibling
        return siblings;
      }
      let sibling = e.parentNode.firstChild; // first child of the parent node
      while (sibling) {
        // collecting siblings
        if (sibling.nodeType === 1 && sibling !== e) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }
      return siblings;
    };
    const labelClick = (e) => {
      const siblings = getSiblings(e.target);
      const labelFor = e.target.getAttribute("for");
      siblings.forEach((sibling) => {
        if (sibling.dataset.name == labelFor) {
          if ((sibling || {}).type === "checkbox" && sibling.dataset.name == "agreement") {
            agreementValue.value = agreementValue.value === true ? false : true; // check/uncheck agreement
          }
          sibling.focus();
        }
      });
    };

    return {
      labelClick,
      firstName,
      lastName,
      email,
      country,
      phone,
      agreement,
      submitBtn,
      firstNameValue,
      firstNameError,
      lastNameValue,
      lastNameError,
      emailValue,
      emailError,
      prefixValue,
      phoneValue,
      phoneError,
      countries,
      countryValue,
      countryError,
      agreementValue,
      agreementError,
      validate,
      validateForm,
    };
  },
};
</script>

<style lang="scss">
@use "../assets/scss/abstracts/variables" as vars;
@use "../assets/scss/abstracts/mixins" as mxns;

.registerForm {
  position: relative;
  .error {
    color: var(--clr-danger);
    font-size: 80%;
    padding-bottom: 3px;
    padding-top: 1px;
  }
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
</style>
