<script>
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

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
    const backToTop = () => {
      gsap.to(window, { scrollTo: "#siteWrapper" });
    };

    return { backToTop };
  },
};
</script>

<template>
  <button @click="backToTop" :id="bttDetails.bttID" class="backToTop" aria-label="Back to top">
    <svg width="32" height="32" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3L86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
      />
    </svg>
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
  opacity: 0.6;
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
    border: 1px solid var(--clr-brandSecondaryColor);
    svg {
      path {
        fill: var(--clr-brandSecondaryColor);
      }
    }
  }
}

html[dir="rtl"] {
  #backToTop {
    inset: auto auto 1rem 1rem;
    @include mxns.mediamin(sm) {
      inset: auto auto 2rem 1.5rem;
    }
  }
}
</style>
