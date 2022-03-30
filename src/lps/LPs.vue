<script>
import { onMounted, ref } from "@vue/runtime-core";
import { gsap } from "gsap";
import { onClickOutside } from "@vueuse/core";
import Form from "../components/Form.vue";

import "../assets/scss/globals/scsseco_global.scss";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "LPs",
  components: { Form },
  props: ["lang"],
  setup() {
    const route = useRoute();
    const router = useRouter();

    console.log(route.name);
    // form anims
    const showFormOnLoad = ref(false);
    if (route.name == "Demo1Home" || route.name == "Demo2Home" || route.name == "Demo3Home") {
      showFormOnLoad.value = ref(true);
    }
    const formWrapper = ref(null);

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
        scale: 0,
      });

      formTl
        .to(e, {
          autoAlpha: 1,
        })
        .to(e.querySelector(".formWrapper"), {
          scale: 1,
        });
    };

    const onFormLoad = (e, done) => {
      if (showFormOnLoad.value) {
        // setTimeout(() => {
        //   formTl.play();
        // }, 1500);
        formTl.play();
      }
      done();
    };

    const playPauseFormAnim = () => {
      showFormOnLoad.value = !showFormOnLoad.value;
      if (!showFormOnLoad.value) {
        formTl.reverse();
      }
      if (showFormOnLoad.value) {
        formTl.play();
      }
    };

    const formCall = (e) => {
      showFormOnLoad.value = e; // true
      formTl.play();
    };

    onMounted(() => {
      onClickOutside(formWrapper, () => {
        showFormOnLoad.value = false;
        formTl.reverse();
      });
    });

    // form btn translations
    const formBtnText = ref({});

    const formBtn = (e) => {
      formBtnText.value = e;
    };

    return {
      showFormOnLoad,
      formWrapper,
      onBeforeFormLoad,
      onFormLoad,
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
  <transition appear @before-enter="onBeforeFormLoad" @enter="onFormLoad" :css="false">
    <div class="formOverlay">
      <div ref="formWrapper" class="formWrapper">
        <div class="close" @click="playPauseFormAnim">&#215; Close</div>
        <Form :lang="lang" :formBtnText="formBtnText" />
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.formOverlay {
  align-content: center;
  align-items: center;
  background: rgba(#0c1327, 0.9);
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: 20;
  .formWrapper {
    background: var(--clr-brandSecondaryColor-500);
    border-radius: 7px;
    border: 2px solid var(--clr-brandPrimaryColor-400);
    color: var(--clr-brandPrimaryColor);
    max-width: 500px;
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
        right: auto;
        left: 0;
      }
    }
  }
}
</style>
