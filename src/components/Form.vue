<script>
import formValidation from "../composables/formValidation/formValidation";
import Loader from "../components/Loader.vue";
import formTranslations from "../composables/translations/form/formTranslations";
import { useRoute } from "vue-router";
// import { AsYouType } from "libphonenumber-js";

export default {
  name: "Form",
  components: { Loader },
  props: {
    lang: String,
    formBtnText: Object,
  },
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
      th: "เข้าร่วม",
      ms: "Sertai",
    };

    const { firstName, lastName, email, country, phone, agreement, gdpr, submitBtn } = formTranslations(
      props.lang,
      props.formBtnText
    ); // translate form

    const route = useRoute();
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
      gdprValue,
      gdprError,
      validate,
      validateForm,
    } = formValidation();

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
          } else if ((sibling || {}).type === "checkbox" && sibling.dataset.name == "gdpr") {
            gdprValue.value = gdprValue.value === true ? false : true; // check/uncheck gdpr
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
      gdpr,
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
      gdprValue,
      gdprError,
      validate,
      validateForm,
    };
  },
};
</script>

<template>
  <form @submit.prevent="validateForm" novalidate class="registerForm">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <div class="form-control">
              <label @click="labelClick" for="firstName">{{ firstName[lang] }}</label>
              <input v-model="firstNameValue" type="text" data-name="firstName" :placeholder="firstName[lang]" />
            </div>
          </div>
          <div v-if="firstNameError[lang]" class="col-12 error">
            {{ firstNameError[lang] }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <div class="form-control">
              <label @click="labelClick" for="lastName">{{ lastName[lang] }}</label>
              <input v-model="lastNameValue" type="text" data-name="lastName" :placeholder="lastName[lang]" />
            </div>
          </div>
          <div v-if="lastNameError[lang]" class="col-12 error">
            {{ lastNameError[lang] }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <div class="form-control">
              <label @click="labelClick" for="email">{{ email[lang] }}</label>
              <input v-model="emailValue" type="email" data-name="email" :placeholder="email[lang]" />
            </div>
          </div>
          <div v-if="emailError[lang]" class="col-12 error">
            {{ emailError[lang] }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <div class="form-control">
              <label @click="labelClick" for="country">{{ country[lang] }}</label>
              <select v-model="countryValue" data-name="country">
                <option
                  v-for="(country, index) in countries"
                  :key="index"
                  :value="country.code"
                  :data-dial-code="country.dial_code"
                >
                  {{ country.name }} ({{ country.code }})
                </option>
              </select>
            </div>
          </div>
          <div v-if="countryError[lang]" class="col-12 error">
            {{ countryError[lang] }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <div class="form-control phone">
              <label @click="labelClick" for="phone">{{ phone[lang] }}</label>
              <input v-model="prefixValue" type="text" placeholder="prefix" tabindex="1" disabled />
              <input v-model="phoneValue" type="tel" data-name="phone" :placeholder="phone[lang]" />
            </div>
          </div>
          <div v-if="phoneError[lang]" class="col-12 error">
            {{ phoneError[lang] }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <div class="form-control">
              <input v-model="agreementValue" type="checkbox" data-name="agreement" />
              <label @click="labelClick" for="agreement">{{ agreement[lang] }}</label>
            </div>
          </div>
          <div v-if="agreementError[lang]" class="col-12 error">
            {{ agreementError[lang] }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <div class="form-control">
              <input v-model="gdprValue" type="checkbox" data-name="gdpr" />
              <label @click="labelClick" for="gdpr">{{ gdpr[lang] }}</label>
            </div>
          </div>
          <div v-if="gdprError[lang]" class="col-12 error">
            {{ gdprError[lang] }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="form-control">
          <button class="scssecoBtn" type="submit">
            {{ formBtnText[lang] }}
          </button>
        </div>
      </div>
    </div>
    <div class="row formLoader" v-if="validate">
      <Loader />
    </div>
  </form>
</template>

<style lang="scss">
.registerForm {
  position: relative;
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
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select {
      border: none;
      max-width: 100%;
      padding: 5px;
      width: 100%;
    }
    &.phone {
      display: flex;
      [type="text"] {
        max-width: 60px;
        border-right: 1px solid var(--clr-gray-200);
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
  .registerForm {
    .form-control {
      &.phone {
        [type="text"] {
          max-width: 60px;
          border-left: 1px solid var(--clr-gray-200);
        }
      }
    }
  }
}
</style>
