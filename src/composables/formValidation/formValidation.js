import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { isValidNumberForRegion } from "libphonenumber-js";
import { setTimeout } from "core-js";
import countryList from "./countryList";
import formErrors from "../translations/form/formErrors";
import switchLang from "../translations/switchLang";

const formValidation = (lang) => {
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
  const countryCode = ref(null); // Country
  const countryError = ref({}); // Country Error
  const agreementValue = ref(true); // Agreement
  const agreementError = ref({}); // Agreement Error
  const validate = ref(false);
  const router = useRouter();

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
      switchLang(firstNameError, firstNameErr, lang);
    }

    // Last name empty
    if (lastNameValue.value == null || lastNameValue.value.length == 0) {
      switchLang(lastNameError, lastNameErr, lang);
    }

    // E-mail empty
    if (emailValue.value == null || emailValue.value.length == 0) {
      switchLang(emailError, emailEmptyErr, lang);
    }

    // Invalid e-mail
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // E-mail Pattern
    const emailPatternBool = emailPattern.test(emailValue.value);
    if (emailPatternBool == false && emailValue.value != null && emailValue.value.length != 0) {
      switchLang(emailError, invalidEmailErr, lang);
    }

    // Phone empty
    if (phoneValue.value == null || phoneValue.value.length == 0) {
      switchLang(phoneError, phoneEmptyErr, lang);
    } else if (!isValidNumberForRegion(phoneValue.value, countryCode.value.toUpperCase())) {
      // Invalid phone
      switchLang(phoneError, invalidPhoneErr, lang);
    }

    // Country select
    if (countryValue.value == null) {
      switchLang(countryError, countryErr, lang);
    }

    // Agreement check
    if (agreementValue.value === false) {
      switchLang(agreementError, agreementErr, lang);
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

    // Validate
    validate.value = true;
    setTimeout(() => {
      validate.value = false;
      router.push({ name: "ThankYou" });
    }, 3000);
  };

  return {
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
