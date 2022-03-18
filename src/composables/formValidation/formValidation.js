import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { isValidNumberForRegion } from "libphonenumber-js";
import { setTimeout } from "core-js";
import countryList from "./countryList";
import formErrors from "../translations/form/formErrors";
import getCountry from "./getCountry";

// console.log(token);

const formValidation = () => {
  // Form validation
  const firstNameValue = ref(null); // First Name
  const firstNameError = ref({}); // First Name Error
  const lastNameValue = ref(null); // Last Name
  const lastNameError = ref({}); // Last Name Error
  const emailValue = ref(null); // E-mail
  const emailError = ref({}); // E-mail Error
  const prefixValue = ref(null); // Prefix
  const phoneValue = ref(null); // Phone number
  const phoneError = ref({}); // Phone number Error
  const { countries } = countryList(); // Countries
  const countryValue = ref(null); // Country
  const countryCode = ref(null); // Country code
  const countryError = ref({}); // Country Error
  const agreementValue = ref(true); // Agreement
  const agreementError = ref({}); // Agreement Error
  const validate = ref(true);
  const router = useRouter();
  const route = useRoute();

  // Errors
  const {
    firstNameErr,
    lastNameErr,
    emailEmptyErr,
    invalidEmailErr,
    phoneEmptyErr,
    invalidPhoneErr,
    countryErr,
    agreementErr,
  } = formErrors();

  // countryValue.value = lang.toUpperCase();
  getCountry(countryValue, validate);

  // Update prefix when country select
  watchEffect(() => {
    countries.forEach((country) => {
      if (country.code === countryValue.value) {
        prefixValue.value = country.dial_code;
        countryCode.value = country.code;
      }
    });
  });

  // Submit validation
  const validateForm = (e) => {
    firstNameError.value = {};
    lastNameError.value = {};
    emailError.value = {};
    phoneError.value = {};
    countryError.value = {};
    agreementError.value = {};

    // First name empty
    if (firstNameValue.value == null || firstNameValue.value.length == 0) {
      firstNameError.value = firstNameErr;
    }

    // Last name empty
    if (lastNameValue.value == null || lastNameValue.value.length == 0) {
      lastNameError.value = lastNameErr;
    }

    // E-mail empty
    if (emailValue.value == null || emailValue.value.length == 0) {
      emailError.value = emailEmptyErr;
    }

    // Invalid e-mail
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // E-mail Pattern
    const emailPatternBool = emailPattern.test(emailValue.value);
    if (emailPatternBool == false && emailValue.value != null && emailValue.value.length != 0) {
      emailError.value = invalidEmailErr;
    }

    // Phone empty
    if (phoneValue.value == null || phoneValue.value.length == 0) {
      phoneError.value = phoneEmptyErr;
    } else if (!isValidNumberForRegion(phoneValue.value, countryCode.value.toUpperCase())) {
      // Invalid phone

      phoneError.value = invalidPhoneErr;
    }

    // Country select
    if (countryValue.value == null) {
      countryError.value = countryErr;
    }

    // Agreement check
    if (agreementValue.value === false) {
      agreementError.value = agreementErr;
    }

    // If a field is empty return
    if (
      firstNameValue.value == null ||
      firstNameValue.value.length == 0 ||
      lastNameValue.value == null ||
      lastNameValue.value.length == 0 ||
      emailValue.value == null ||
      emailValue.value.length == 0 ||
      emailPatternBool == false ||
      phoneValue.value == null ||
      phoneValue.value.length == 0 ||
      !isValidNumberForRegion(phoneValue.value, countryCode.value.toUpperCase()) ||
      countryValue.value == null ||
      agreementValue.value === false
    ) {
      return;
    }

    validate.value = true;

    // Validate
    setTimeout(() => {
      validate.value = false;
      console.log(firstNameValue.value);
      console.log(lastNameValue.value);
      console.log(emailValue.value);
      console.log(countryValue.value);
      console.log(prefixValue.value, phoneValue.value);
      router.push({ name: "ThankYou", params: { lang: route.params.lang } });
    }, 3000);
  };

  return {
    // clientCountry,
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
};

export default formValidation;
