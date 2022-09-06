import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { isValidNumberForRegion, AsYouType } from "libphonenumber-js";
import countryList from "./countryList";
import formErrors from "../translations/formErrors";
import getCountry from "./getCountry";
import dataSite from "../../../../../dataSite.json";

const formValidation = (lang) => {
  // Form validation
  const firstNameValue = ref(null); // FirstName
  const firstNameError = ref({}); // First Name Error
  const lastNameValue = ref(null); // LastName
  const lastNameError = ref({}); // Last Name Error
  const emailValue = ref(null); // EMail
  const emailError = ref({}); // Email Error
  const prefixValue = ref(null); // PhoneCountryCode
  const phoneValue = ref(null); // PhoneNumber
  const phoneError = ref({}); // Phone number Error
  const { countries } = countryList(); // Countries
  const countryValue = ref(null); // Country
  const countryName = ref(null); // IPCountry
  const countryCode = ref(null); // Country
  const countryError = ref({}); // Country Error
  const agreementValue = ref(true); // AcceptTermsAndConditions
  const agreementError = ref({}); // Agreement Error

  const language = ref(lang); // Language
  const IPAddress = ref(null);

  const validate = ref(true);
  const route = useRoute();

  // console.log(route);
  // console.log(route.path);
  // console.log(route.fullPath);
  // console.log(route.query);
  // console.log(window.location.href);

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
  getCountry(countryValue, IPAddress, countryName, validate);

  // Update prefix when country select
  watchEffect(() => {
    countries.forEach((country) => {
      if (country.code === countryValue.value) {
        prefixValue.value = country.dial_code;
        countryCode.value = country.code;
      }
    });
    phoneValue.value = phoneValue.value ? new AsYouType(countryValue.value).input(phoneValue.value) : "";
  });

  // Submit validation
  const validateForm = (e) => {
    // console.log(e);
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

    // Email empty
    if (emailValue.value == null || emailValue.value.length == 0) {
      emailError.value = emailEmptyErr;
    }

    // Invalid email
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Email Pattern
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
    const sendToCRM = async () => {
      const logs = process.env.VUE_APP_LOG_ERRORS;
      const logStylesAPI = ["font-size: 14px", "font-weight: bold"].join(";");

      try {
        //* Main country API
        let data = "";
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("DNT", "1");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        const urlencoded = new URLSearchParams();
        urlencoded.append("FirstName", firstNameValue.value);
        urlencoded.append("LastName", lastNameValue.value);
        urlencoded.append("EMail", emailValue.value);
        urlencoded.append("Country", countryValue.value);
        urlencoded.append("PhoneCountryCode", prefixValue.value);
        urlencoded.append("PhoneNumber", phoneValue.value);
        urlencoded.append("Language", language.value.toUpperCase());
        urlencoded.append("CampaignName", `${process.env.VUE_APP_BRAND_TITLE} - ${lang.toUpperCase()}`);
        urlencoded.append("Advertiser", "");
        urlencoded.append("Referrer", document.referrer === "" ? window.location.href : document.referrer);
        urlencoded.append(
          "Cookie",
          `${window.location.origin}/${lang}/thank-you?fname=${firstNameValue.value}&lName=${
            lastNameValue.value
          }&email=${emailValue.value}&phone=${phoneValue.value.replace(/\s/g, "")}&country=${countryValue.value}`
        );
        urlencoded.append("CustomField", "");
        urlencoded.append("AcceptTermsAndConditions", agreementValue.value);
        urlencoded.append("ApproveReceiveCommercial", true);
        urlencoded.append("IPAddress", IPAddress.value);
        urlencoded.append("IPCountry", countryName.value);
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: urlencoded,
          redirect: "follow",
        };
        const loadDataFXAPI = await fetch(dataSite.fxoroRegisterUser, requestOptions);

        if (!loadDataFXAPI.ok) {
          throw Error();
        }

        // data = await loadDataFXAPI.json();

        validate.value = false;

        // router.push({ name: "ThankYou", params: { lang: route.params.lang } }); // go to thank you page
        // window.location.href = `/${route.params.lang}/thank-you`; // go to thank you page
        window.location.href = `/${lang}/thank-you?fname=${firstNameValue.value}&lName=${lastNameValue.value}&email=${
          emailValue.value
        }&phone=${phoneValue.value.replace(/\s/g, "")}&country=${countryValue.value}`; // go to thank you page
      } catch (err) {
        if (logs === "true") {
          console.log(`%cLooks like there was a problem with the register API(s):`, logStylesAPI, err);
        }
      }
    };

    if (process.env.VUE_APP_SEND_TO_CRM == "true") {
      sendToCRM();
    } else if (process.env.VUE_APP_SEND_TO_CRM == "false") {
      console.log(`FirstName: ${firstNameValue.value}`);
      console.log(`LastName: ${lastNameValue.value}`);
      console.log(`EMail: ${emailValue.value}`);
      console.log(`Country: ${countryValue.value}`);
      console.log(`PhoneCountryCode: ${prefixValue.value}`);
      console.log(`PhoneNumber: ${phoneValue.value}`);
      console.log(`Language: ${language.value.toUpperCase()}`);
      console.log(`CampaignName: ${process.env.VUE_APP_BRAND_TITLE} - ${lang.toUpperCase()}`);
      console.log(`Advertiser: `);
      console.log(`Referrer: ${document.referrer === "" ? window.location.href : document.referrer}`);
      console.log(
        `Cookie: ${window.location.origin}/${lang}/thank-you?fname=${firstNameValue.value}&lName=${
          lastNameValue.value
        }&email=${emailValue.value}&phone=${phoneValue.value.replace(/\s/g, "")}&country=${countryValue.value}`
      );
      console.log(`CustomField: `);
      console.log(`AcceptTermsAndConditions: ${agreementValue.value}`);
      console.log(`ApproveReceiveCommercial: ${true}`);
      console.log(`IPAddress: ${IPAddress.value}`);
      console.log(`IPCountry: ${countryName.value}`);

      // router.push({ name: "ThankYou", params: { lang: route.params.lang } });
      setTimeout(() => {
        validate.value = false;
        window.location.href = `/${lang}/thank-you?fname=${firstNameValue.value}&lName=${lastNameValue.value}&email=${
          emailValue.value
        }&phone=${phoneValue.value.replace(/\s/g, "")}&country=${countryValue.value}`; // go to thank you page
        // window.location.href = `/${route.params.lang}/thank-you`; // go to thank you page
      }, 3000);
    }
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
