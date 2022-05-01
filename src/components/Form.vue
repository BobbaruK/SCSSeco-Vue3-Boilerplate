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
    const { firstName, lastName, email, country, phone, agreement, gdpr, submitBtn } = formTranslations(
      props.lang,
      props.formDetails.button
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
      gdprValue,
      gdprError,
      validate,
      validateForm,
    } = formValidation();

    return {
      layout,
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
  <form @submit.prevent="validateForm" novalidate class="registerForm" :id="`${formDetails.id}-form`">
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
              <label :for="`${formDetails.id}-firstName`">{{ firstName[lang] }}</label>
              <input
                v-model="firstNameValue"
                type="text"
                :id="`${formDetails.id}-firstName`"
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
              <label :for="`${formDetails.id}-lastName`">{{ lastName[lang] }}</label>
              <input
                v-model="lastNameValue"
                type="text"
                :id="`${formDetails.id}-lastName`"
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
              <label :for="`${formDetails.id}-email`">{{ email[lang] }}</label>
              <input v-model="emailValue" type="email" :id="`${formDetails.id}-email`" :placeholder="email[lang]" />
            </div>
          </div>
          <div v-if="emailError[lang]" class="col-12 error">
            {{ emailError[lang] }}
          </div>
        </div>
      </div>
      <div
        :class="{
          'col-12': layout == 1  || layout == 2 || layout == 3,
          'col-md-4': layout == 3,
          'order-4': layout == 1 || layout == 2 || layout == 3,
        }"
      >
        <div class="row">
          <div class="col-12">
            <div class="form-control country">
              <label :for="`${formDetails.id}-country`">{{ country[lang] }}</label>
              <select v-model="countryValue" :id="`${formDetails.id}-country`">
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
          'col-12': layout == 1  || layout == 2 || layout == 3,
          'col-md-4': layout == 3,
          'order-5': layout == 1 || layout == 2 || layout == 3,
        }"
      >
        <div class="row">
          <div class="col-12">
            <div class="form-control phone">
              <label :for="`${formDetails.id}-phone`">{{ phone[lang] }}</label>
              <input v-model="prefixValue" type="text" placeholder="prefix" tabindex="0" disabled />
              <input v-model="phoneValue" type="tel" :id="`${formDetails.id}-phone`" :placeholder="phone[lang]" />
            </div>
          </div>
          <div v-if="phoneError[lang]" class="col-12 error">
            {{ phoneError[lang] }}
          </div>
        </div>
      </div>
      <div
        :class="{
          'col-12': layout == 1  || layout == 2 || layout == 3,
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
                  <input v-model="agreementValue" type="checkbox" :id="`${formDetails.id}-agreement`" />
                  <label class="agreement" :for="`${formDetails.id}-agreement`">{{ agreement[lang] }}</label>
                </div>
              </div>
              <div v-if="agreementError[lang]" class="col-12 error">
                {{ agreementError[lang] }}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <div class="form-control">
                  <input v-model="gdprValue" type="checkbox" :id="`${formDetails.id}-gdpr`" />
                  <label class="gdpr" :for="`${formDetails.id}-gdpr`">{{ gdpr[lang] }}</label>
                </div>
              </div>
              <div v-if="gdprError[lang]" class="col-12 error">
                {{ gdprError[lang] }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="{
          'col-12': layout == 1  || layout == 2 || layout == 3,
          'col-md-4': layout == 3,
          'order-7': layout == 1 || layout == 2,
          'order-7 order-md-6': layout == 3,
        }"
      >
        <div class="form-control">
          <button class="" type="submit">
            {{ typeof formDetails.button != "undefined" ? formDetails.button[lang] : "" }}
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
$borderRadius: 10px;

.registerForm {
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
  .registerForm {
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
