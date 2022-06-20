<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import languages from "./composables/translations/languages";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "./assets/scss/scsseco_lp.scss";
export default {
  name: "Demo3",
  components: { Header, Footer },
  emits: ["showForm", "formDetails"],
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // redirect
    const { lpLangs, defaultLang } = languages();
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (lpLangs.indexOf(route.params.lang) == -1) {
        router.replace({ name: "Demo3Home", params: { lang: defaultLang } });
      }
    });

    // form call
    const formCall = (e) => {
      ctx.emit("showForm");
    };

    const eFormDets = (e) => {
      ctx.emit("formDetails", e);
    };

    return { formCall, eFormDets };
  },
};
</script>

<template>
  <Header :lang="lang" />
  <main>
    <router-view @showForm="formCall" @formDetails="eFormDets" />
  </main>
  <Footer :lang="lang" />
</template>

<style lang="scss">
@use "../../assets/scss/brand/abstracts/variables" as vars;

#siteWrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.formOverlay {
  align-content: center;
  align-items: center;
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: 40;
  &::before {
    background-color: var(--clr-brandPrimaryColor);
    content: "";
    inset: 0;
    opacity: 0.9;
    position: absolute;
    z-index: 0;
  }
  .formWrapper {
    background: var(--clr-brandPrimaryColor-dark);
    border-radius: 7px;
    border: 2px solid var(--clr-brandPrimaryColor-400);
    color: var(--clr-white);
    margin: 0 calc(vars.$gap / 2);
    max-height: 100vh;
    max-width: 500px;
    overflow-y: auto;
    padding: 30px 15px 15px;
    position: relative;
    .close {
      background: var(--clr-brandPrimaryColor-400);
      border-radius: 0 0 0 5px;
      cursor: pointer;
      font-weight: bold;
      padding: 3px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}

html[dir="rtl"] {
  .formOverlay {
    .formWrapper {
      .close {
        border-radius: 0 0 5px 0;
        right: auto;
        left: 0;
      }
    }
  }
}
</style>
