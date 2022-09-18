<script>
import { ref } from "@vue/reactivity";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { onMounted } from "@vue/runtime-core";

gsap.registerPlugin(ScrollToPlugin);

export default {
  name: "BackToTop",
  props: {
    bttDetails: {
      type: Object,
    },
  },
  setup(props) {
    // Action
    const bttFunct = () => {
      gsap.to(window, { scrollTo: "#siteWrapper" });
    };

    const backToTop = ref();

    const bttAnims = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.1,
        ease: "none",
      },
    });

    onMounted(() => {
      gsap.set(`#${backToTop.value.id}`, {
        autoAlpha: 0,
        yPercent: 70,
      });

      bttAnims.to(`#${backToTop.value.id}`, {
        autoAlpha: 1,
        yPercent: 0,
      });
    });

    //
    const progress = ref();
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      progress.value = Math.round(scrollPercent * 100);

      if (progress.value > 0) {
        bttAnims.play();
      } else if (progress.value == 0) {
        bttAnims.reverse();
      }
    });

    return { bttFunct, backToTop, progress };
  },
};
</script>

<template>
  <button ref="backToTop" @click="bttFunct" :id="bttDetails.bttID" class="backToTop" aria-label="Back to top">
    <svg width="32" height="32" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3L86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
      />
    </svg>
    <div class="progress" :style="{ width: progress + '%' }"></div>
  </button>
</template>

<style lang="scss">
// @use "../../../assets/scss/brand/abstracts/variables" as vars;
@use "../../../assets/scss/brand/abstracts/mixins" as mxns;

.backToTop {
  align-content: center;
  align-items: center;
  background: var(--clr-brandSecondaryColor);
  border-radius: 5px;
  border: 1px solid var(--clr-brandPrimaryColor);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 30px;
  inset: auto 1rem 1rem auto;
  justify-content: center;
  opacity: 0.7;
  overflow: hidden;
  position: fixed;
  transition: all 320ms linear;
  width: 30px;
  cursor: pointer;
  @include mxns.mediamin(sm) {
    inset: auto 1.5rem 2rem auto;
  }
  @include mxns.mediamin(xl) {
    height: 35px;
    width: 35px;
  }
  @include mxns.mediamin(xxl) {
    height: 40px;
    width: 40px;
  }
  svg {
    path {
      fill: var(--clr-brandPrimaryColor);
    }
  }
  &.nearBottom,
  &:hover,
  &:focus {
    opacity: 1;
  }
  &:hover,
  &:focus {
    background: var(--clr-brandPrimaryColor);
    // border: 1px solid var(--clr-brandSecondaryColor);
    svg {
      path {
        fill: var(--clr-brandSecondaryColor);
      }
    }
    .progress {
      background: var(--clr-brandSecondaryColor);
    }
  }
  .progress {
    background: var(--clr-brandPrimaryColor);
    height: 3px;
    inset: auto auto 0 0;
    position: absolute;
  }
}

html[dir="rtl"] {
  .backToTop {
    inset: auto auto 1rem 1rem;
    @include mxns.mediamin(sm) {
      inset: auto auto 2rem 1.5rem;
    }
    .progress {
      inset: auto 0 0 auto;
    }
  }
}
</style>
