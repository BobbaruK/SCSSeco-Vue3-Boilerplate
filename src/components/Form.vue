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
          'col-12': layout == 1 || layout == 2 || layout == 3,
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
          'col-12': layout == 1 || layout == 2 || layout == 3,
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

<style lang="scss"></style>
