<script>
import formValidation from "@/composables/global/form/formValidation/formValidation";
import formTranslations from "@/composables/global/form/translations/formTranslations";
import Loader from "@/components/global/Loader.vue";

export default {
  name: "Form",
  components: { Loader },
  props: {
    lang: String,
    formDetails: Object,
  },
  setup(props) {
    /**
     * Form Layout
     *
     * Layout 1
     * |  First Name   |
     * |  Last Name    |
     * |  Email        |
     * |  Country      |
     * |  Phone        |
     * |  Agreement(s) |
     * |  Submit       |
     *
     * Layout 2
     * |  First Name   ||  Last Name    |
     * |  Email                         |
     * |  Country                       |
     * |  Phone                         |
     * |  Agreement(s)                  |
     * |  Submit                        |
     *
     * Layout 3
     * |  First Name   ||  Last Name    ||  Email        |
     * |  Country      ||  Phone        ||  Submit       |
     * |  Agreement(s)                                   |
     *
     */
    const layout =
      !isNaN(props.formDetails.layout) || typeof props.formDetails.layout != "undefined" ? props.formDetails.layout : 1;

    // translate form
    const { firstName, lastName, email, country, phone, agreement, gdpr } = formTranslations(props.formDetails.button);

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

    return {
      layout,
      firstName,
      lastName,
      email,
      country,
      phone,
      agreement,
      gdpr,
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

<template>
  <form @submit.prevent="validateForm" novalidate class="registerForm" :id="`${formDetails.formID}-form`">
    <div class="row">
      <div
        :class="{
          'col-12': layout == 1 || layout == 2 || layout == 3,
          'col-sm-6': layout == 2,
          'col-sm-6 col-md-4': layout == 3,
          'order-1': layout == 1 || layout == 2 || layout == 3,
        }"
      >
        <div class="row">
          <div class="col-12">
            <div class="form-control">
              <label :for="`${formDetails.formID}-firstName`">{{ firstName[lang] }}</label>
              <input
                v-model="firstNameValue"
                type="text"
                :id="`${formDetails.formID}-firstName`"
                :placeholder="firstName[lang]"
              />
            </div>
          </div>
          <div v-if="firstNameError[lang]" class="col-12 error">
            {{ firstNameError[lang] }}
          </div>
        </div>
      </div>
      <div
        :class="{
          'col-12': layout == 1 || layout == 2 || layout == 3,
          'col-sm-6': layout == 2,
          'col-sm-6 col-md-4': layout == 3,
          'order-2': layout == 1 || layout == 2 || layout == 3,
        }"
      >
        <div class="row">
          <div class="col-12">
            <div class="form-control">
              <label :for="`${formDetails.formID}-lastName`">{{ lastName[lang] }}</label>
              <input
                v-model="lastNameValue"
                type="text"
                :id="`${formDetails.formID}-lastName`"
                :placeholder="lastName[lang]"
              />
            </div>
          </div>
          <div v-if="lastNameError[lang]" class="col-12 error">
            {{ lastNameError[lang] }}
          </div>
        </div>
      </div>
      <div
        :class="{
          'col-12': layout == 1 || layout == 2 || layout == 3,
          'col-md-4': layout == 3,
          'order-3': layout == 1 || layout == 2 || layout == 3,
        }"
      >
        <div class="row">
          <div class="col-12">
            <div class="form-control">
              <label :for="`${formDetails.formID}-email`">{{ email[lang] }}</label>
              <input v-model="emailValue" type="email" :id="`${formDetails.formID}-email`" :placeholder="email[lang]" />
            </div>
          </div>
          <div v-if="emailError[lang]" class="col-12 error">
            {{ emailError[lang] }}
          </div>
        </div>
      </div>
      <div
        :class="{
          'col-12': layout == 1 || layout == 2 || layout == 3,
          'col-md-4': layout == 3,
          'order-4': layout == 1 || layout == 2 || layout == 3,
        }"
      >
        <div class="row">
          <div class="col-12">
            <div class="form-control country">
              <label :for="`${formDetails.formID}-country`">{{ country[lang] }}</label>
              <select v-model="countryValue" :id="`${formDetails.formID}-country`">
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
      <div
        :class="{
          'col-12': layout == 1 || layout == 2 || layout == 3,
          'col-md-4': layout == 3,
          'order-5': layout == 1 || layout == 2 || layout == 3,
        }"
      >
        <div class="row">
          <div class="col-12">
            <div class="form-control">
              <label :for="`${formDetails.formID}-phone`">{{ phone[lang] }}</label>
              <div class="phone">
                <input v-model="prefixValue" type="text" placeholder="prefix" tabindex="0" disabled />
                <input v-model="phoneValue" type="tel" :id="`${formDetails.formID}-phone`" :placeholder="phone[lang]" />
              </div>
            </div>
          </div>
          <div v-if="phoneError[lang]" class="col-12 error">
            {{ phoneError[lang] }}
          </div>
        </div>
      </div>
      <div
        :class="{
          'col-12': layout == 1 || layout == 2 || layout == 3,
          'col-md-12': layout == 3,
          'order-6': layout == 1 || layout == 2,
          'order-6 order-md-7': layout == 3,
        }"
      >
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <div class="form-control">
                  <input v-model="agreementValue" type="checkbox" :id="`${formDetails.formID}-agreement`" />
                  <label class="agreement" :for="`${formDetails.formID}-agreement`">{{ agreement[lang] }}</label>
                </div>
              </div>
              <div v-if="agreementError[lang]" class="col-12 error">
                {{ agreementError[lang] }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="{
          'col-12': layout == 1 || layout == 2 || layout == 3,
          'col-md-4': layout == 3,
          'order-7': layout == 1 || layout == 2,
          'order-7 order-md-6': layout == 3,
        }"
      >
        <div class="form-control">
          <button class="scssecoBtn" type="submit">
            {{ typeof formDetails.button != "undefined" ? formDetails.button[lang] : "" }}
          </button>
        </div>
      </div>
      <div class="col-12"></div>
    </div>
    <div class="row formLoader" v-if="validate">
      <Loader />
    </div>
  </form>
</template>

<style lang="scss">
#siteWrapper,
#modals {
  form.registerForm {
    padding-bottom: 1rem;
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
      }
      input[type="text"],
      input[type="email"],
      input[type="tel"],
      select {
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
      .phone {
        direction: ltr;
        display: flex;
        [type="text"] {
          max-width: 80px;
          border-right: 1px solid var(--clr-gray-100);
        }
        [type="tel"] {
        }
      }
      input[type="checkbox"] {
        margin-right: 0.5rem;
      }
      button[type="submit"] {
        cursor: pointer;
        font-weight: bold;
        padding: 10px 15px;
        transition: 350ms;
        width: 100%;
        &:hover {
          background: var(--clr-brandPrimaryColor-light); /* Old browsers */
          color: var(--clr-brandPrimaryColor-dark);
        }
      }
    }

    .formLoader {
      inset: 0;
      margin: 0;
      position: absolute;
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
  }
}

html[dir="rtl"] {
  #siteWrapper {
    form.registerForm {
      .form-control {
        .phone {
          [type="tel"] {
            &::placeholder {
              text-align: end;
            }
          }
        }
        input[type="checkbox"] {
          margin-left: 0.5rem;
        }
      }
    }
  }
}
</style>
