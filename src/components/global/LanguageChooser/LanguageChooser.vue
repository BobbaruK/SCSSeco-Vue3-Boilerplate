<script>
import { onMounted, ref } from "@vue/runtime-core";
import { gsap } from "gsap";
import { onClickOutside } from "@vueuse/core";

export default {
  name: "LanguageChooser",
  props: {
    lang: String,
    details: Object,
  },
  setup() {
    const openMenu = ref(false);
    const langMenuRef = ref(null);
    const openMenuRef = ref(null);

    const openCloseTL = gsap.timeline({
      paused: true,
      defaults: {
        // children inherit these defaults
        duration: 0.5,
        ease: "power4.inOut",
        transformOrigin: "top",
      },
    });

    onClickOutside(langMenuRef, (event) => {
      openCloseTL.reverse();
      openMenu.value = false;
    });

    const langClick = () => {
      if (openMenu.value === false) {
        openCloseTL.play();
        openMenu.value = true;
      } else {
        openCloseTL.reverse();
        openMenu.value = false;
      }
    };

    onMounted(() => {
      openCloseTL.from(openMenuRef.value, {
        yPercent: -5,
        opacity: 0,
        // scaleY: 0,
        pointerEvents: "none",
      });
    });

    return { openMenu, langMenuRef, openMenuRef, langClick };
  },
};
</script>

<template>
  <div class="lang-chooser" ref="langMenuRef">
    <div class="activeLang" @click.native="langClick">
      <router-link :to="{ name: $route.name, params: { lang: lang } }">
        <img :src="details.flagPath[lang]" :alt="lang.toUpperCase()" width="32" height="24" />
        {{ lang.toUpperCase() }}
      </router-link>
    </div>
    <ul ref="openMenuRef">
      <router-link
        v-for="(lng, index) in details.lpLangs"
        :key="index"
        :to="{ name: $route.name, params: { lang: lng } }"
        custom
        v-slot="{ href, isActive, isExactActive }"
      >
        <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
          <a :href="href">
            <img :src="details.flagPath[lng]" :alt="lng.toUpperCase()" width="32" height="24" />
            {{ lng.toUpperCase() }}</a
          >
        </li>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
@use "../../../assets/scss/brand/abstracts/variables" as vars;
@use "../../../assets/scss/brand/abstracts/mixins" as mxns;

$langSpace: 0.5rem;

.lang-chooser {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 40;
  width: 75px;
  img {
    border-radius: 50%;
    border: 2px solid var(--clr-white);
    height: 27px;
    object-fit: cover;
    width: 27px;
  }
  a {
    color: var(--clr-brandSecondaryColor);
    &:hover,
    &:focus {
      color: var(--clr-brandSecondaryColor-600);
    }
    &:focus {
      outline: none;
    }
  }
  .activeLang {
    border: 1px solid transparent;
    padding: $langSpace;
    > a {
      align-content: center;
      align-items: center;
      flex-direction: row;
      display: flex;
      gap: $langSpace;
    }
  }
  ul {
    background-color: var(--clr-white);
    border: 1px solid var(--clr-black);
    border-radius: vars.$borderRadius;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: $langSpace;
    list-style: none;
    margin: 0;
    padding: $langSpace;
    position: absolute;
    // right: calc($langSpace * -1);
    top: calc(100% + $langSpace);
    z-index: 1;
    width: 100%;
    li {
      a {
        align-content: center;
        align-items: center;
        color: var(--clr-black);
        flex-direction: row;
        display: flex;
        gap: $langSpace;
        justify-content: flex-start;
        &:hover {
          color: var(--clr-black);
        }
      }
      &.router-link-active,
      &.router-link-exact-active {
        display: none;
        a {
          font-weight: bold;
        }
      }
    }
    img {
      border-color: var(--clr-brandPrimaryColor-light);
    }
  }
}

html[dir="rtl"] {
  .lang-chooser {
    ul {
      // right: auto;
      // left: calc($langSpace * -1);
    }
  }
}
</style>
