<template>
  <section class="notFound">
    <h1>{{ title }}</h1>
    <p>Redirect to home in: {{ redirectHomeCounter }}</p>
    <button @click.prevent="goHome" class="scssecoBtn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--teenyicons"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 15 15"
      >
        <g fill="none">
          <path
            d="M7.854.146a.5.5 0 0 0-.708 0L1 6.293V13.5A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.293L7.854.146z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    </button>
  </section>
</template>

<script>
import checkLangAndMeta from "../composables/translations/checkLangAndMeta";
import switchLang from "../composables/translations/switchLang";
import langNotFoundTransl from "../composables/translations/pages/langNotFound/langNotFoundTransl";
import { ref } from "@vue/reactivity";
export default {
  name: "LanguageNotFound",
  props: ["lang"],
  setup(props) {
    // Redirect
    const redirectHomeCounter = ref(6);
    const goHome = () => {
      // router.push({ name: "index" });
      window.location.replace(process.env.VUE_APP_SITE_URL);
    };
    const counter = setInterval(() => {
      redirectHomeCounter.value--;
      if (redirectHomeCounter.value == 0) {
        clearInterval(counter);
        redirectHomeCounter.value = "";
        goHome();
      }
    }, 1000);

    // Translations
    checkLangAndMeta(props.lang);

    const title = ref();
    const { langNotFoundTitleTransl } = langNotFoundTransl();
    switchLang(title, langNotFoundTitleTransl, props.lang);

    // head tag
    const docTitle = document.querySelector("title");
    docTitle.innerText = `${process.env.VUE_APP_BRAND_TITLE} | ${title.value}`;

    return { redirectHomeCounter, goHome, title };
  },
};
</script>

<style lang="scss">
.notFound {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  .buttons {
    display: flex;
    gap: 1rem;
  }
}
</style>
