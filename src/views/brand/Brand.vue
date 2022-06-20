<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import languages from "../../composables/translations/languages";
import { useRoute, useRouter } from "vue-router";
import { onMounted, onUpdated, ref } from "@vue/runtime-core";

import { gsap } from "gsap";
import { onClickOutside } from "@vueuse/core";

import Form from "../../components/Form.vue";

import "../../assets/scss/globals/scsseco_global.scss";
import "../../assets/scss/brand/scsseco_brand.scss";
export default {
  name: "Brand",
  components: { Header, Footer, Form },
  props: {
    lang: String,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    /**
     * Form Anims
     */
    // Is this form rendered on this page?
    const formActiveOnPage = ref(false);
    const renderForm = () => {
      if (route.name == "Home") {
        formActiveOnPage.value = true;
      }
    };
    renderForm();
    onUpdated(() => {
      renderForm();
    });

    const formTl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.35,
        ease: "none",
      },
    });

    const onBeforeFormLoad = (e) => {
      gsap.set(e, {
        autoAlpha: 0,
      });
      gsap.set(e.querySelector(".formWrapper"), {
        yPercent: -150,
        scale: 0,
      });

      formTl
        .to(e, {
          autoAlpha: 1,
          onStart: () => {
            document.body.style.overflow = "hidden";
          },
        })
        .to(
          e.querySelector(".formWrapper"),
          {
            yPercent: 0,
            scale: 1,
          },
          "<"
        );
    };

    const playPauseFormAnim = () => {
      document.body.style.overflow = "auto";
      formTl.reverse();
    };

    // This form has a title?
    const formCall = (e) => {
      formTl.play();
    };

    const formTitle = ref({});
    const formDetails = ref({});
    const eFormDets = (e) => {
      if (e.title != null || e.title != "undefined") {
        formTitle.value = e.title;
      }
      formDetails.value = e;
    };

    // click on the form overlay
    const formWrapper = ref(null);
    onMounted(() => {
      onClickOutside(formWrapper, () => {
        document.body.style.overflow = "auto";
        formTl.reverse();
      });
    });

    /**
     * Redirect
     */
    const { lang } = languages();
    onMounted(() => {
      if (lang.indexOf(route.params.lang) == -1) {
        router.replace({ name: "HomeRedirect" });
      }
    });


    return {
      formActiveOnPage,
      formWrapper,
      formTitle,
      onBeforeFormLoad,
      playPauseFormAnim,
      formCall,
      eFormDets,
      formDetails,
    };
  },
};
</script>

<template>
  <Header :lang="lang" />
  <main>
    <router-view @showForm="formCall" @formDetails="eFormDets" />
  </main>
  <Footer :lang="lang" @showForm="formCall" />
  <transition appear @before-enter="onBeforeFormLoad" :css="false">
    <div v-if="formActiveOnPage" class="formOverlay">
      <div ref="formWrapper" class="formWrapper">
        <div class="close" @click="playPauseFormAnim">&#215; Close</div>
        <span v-if="formTitle" class="h3">{{ formTitle[lang] }}</span>
        <Form :lang="lang" :formDetails="formDetails" />
      </div>
    </div>
  </transition>
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
