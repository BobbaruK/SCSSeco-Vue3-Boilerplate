<script>
import { useRouter } from "vue-router";
import languages from "../../composables/translations/languages";
import "../../assets/scss/globals/scsseco_global.scss";
import "../../assets/scss/notfound/scsseco_notfound.scss";
export default {
  name: "PageNotFound",
  setup() {
    // Go Back Go Home
    const router = useRouter();
    const { defaultLang } = languages();

    const goBack = () => {
      router.go(-1);
    };
    const goHome = () => {
      window.location.href = `/${defaultLang}`;
    };

    // head tag
    const docTitle = document.querySelector("title");
    docTitle.innerText = `${process.env.VUE_APP_BRAND_TITLE} | 404`;

    return { goBack, goHome };
  },
};
</script>

<template>
  <section class="notFound">
    <h1>404!</h1>
    <h4>Not Found!</h4>
    <div class="buttons">
      <button @click="goBack">Back</button>
      <button @click="goHome">Home</button>
    </div>
  </section>
</template>

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
