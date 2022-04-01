<script>
import { onMounted, onUpdated, ref } from "@vue/runtime-core";
import { gsap } from "gsap";
import { onClickOutside } from "@vueuse/core";
import Form from "../components/Form.vue";

import "../assets/scss/globals/scsseco_global.scss";
import { useRoute } from "vue-router";
export default {
  name: "LPs",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    const route = useRoute();

    /**
     * Form Anims
     */
    // Is this form rendered on this page?
    const formActiveOnPage = ref(false);
    const renderForm = () => {
      if (route.name == "Demo1Home" || route.name == "Demo2Home" || route.name == "Demo3Home") {
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
    const formTitle = ref({});
    const formCall = (e) => {
      if (e != null || e != "undefined") {
        formTitle.value = e;
      }
      formTl.play();
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
     * form btn translations
     */
    const formBtnText = ref({});
    const formBtn = (e) => {
      formBtnText.value = e;
    };

    return {
      formActiveOnPage,
      formWrapper,
      formTitle,
      onBeforeFormLoad,
      playPauseFormAnim,
      formCall,
      formBtnText,
      formBtn,
    };
  },
};
</script>

<template>
  <router-view @formBtnText="formBtn" @showForm="formCall" />
  <transition appear @before-enter="onBeforeFormLoad" :css="false">
    <div v-if="formActiveOnPage" class="formOverlay">
      <div ref="formWrapper" class="formWrapper">
        <div class="close" @click="playPauseFormAnim">&#215; Close</div>
        <span v-if="formTitle" class="h3">{{ formTitle[lang] }}</span>
        <Form :lang="lang" :formBtnText="formBtnText" />
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.formOverlay {
  align-content: center;
  align-items: center;
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: 20;
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
    margin: 0 15px;
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
        left: 0;
        right: auto;
      }
    }
  }
}
</style>
