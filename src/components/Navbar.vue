<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Navbar",
  components: {},
  props: ["lang"],
  setup() {
    const isMobileOpen = ref(false);
    const isMobileViewport = ref(false);
    const isMenuOverlayParent = ref(false);
    let windowWidth;

    const removeStylesMenu = () => {
      windowWidth = window.innerWidth;

      if (windowWidth < 992) {
        isMobileOpen.value = !isMobileOpen.value;
      }

      if (isMobileOpen.value === true) {
        document.querySelector("body").style = "overflow: hidden";
      }

      if (isMobileOpen.value === false) {
        document.querySelector("body").style = "";
      }

      const allParentMenuItems = document.querySelectorAll("[data-dropdown]");
      allParentMenuItems.forEach((menuItem) => {
        menuItem.dataset.dropdown = "";
        menuItem.children[2].classList.remove("open");
        menuItem.children[2].style.maxHeight = "";
      });
    };

    const openMobileMenu = () => {
      removeStylesMenu();
    };

    const menuItemClick = (e) => {
      const siblings = getSiblings(e.target);

      windowWidth = window.innerWidth;

      if (e.target.parentElement.classList.contains("sub-menu")) {
        e.target.parentElement.style.maxHeight = `${
          e.target.parentElement.scrollHeight + e.target.children[2].scrollHeight
        }px`;
      }

      siblings.forEach((sibling) => {
        if (sibling.dataset.dropdown) {
          sibling.dataset.dropdown = "";
          sibling.children[2].classList.remove("open");
          sibling.children[2].style.maxHeight = "";
          const childrendOfSiblings = sibling.querySelectorAll("[data-dropdown]");
          childrendOfSiblings.forEach((siblingChild) => {
            siblingChild.dataset.dropdown = "";
            siblingChild.children[2].classList.remove("open");
            siblingChild.children[2].style.maxHeight = "";
          });
        }
      });

      if (e.target.dataset.dropdown == "dropdown") {
        e.target.dataset.dropdown = "";

        e.target.children[2].classList.remove("open");
        e.target.children[2].style.maxHeight = "";

        const children = e.target.querySelectorAll("[data-dropdown]");
        children.forEach((siblingChild) => {
          siblingChild.dataset.dropdown = "";
          siblingChild.children[2].classList.remove("open");
          siblingChild.children[2].style.maxHeight = "";
        });
      } else {
        e.target.dataset.dropdown = "dropdown";
        e.target.children[2].classList.add("open");
        e.target.children[2].style.maxHeight = `${e.target.children[2].scrollHeight}px`;
      }
    };

    const getSiblings = function (e) {
      // for collecting siblings
      let siblings = [];
      // if no parent, return no sibling
      if (!e.parentNode) {
        return siblings;
      }
      // first child of the parent node
      let sibling = e.parentNode.firstChild;

      // collecting siblings
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }
      return siblings;
    };

    onMounted(() => {
      // Resize
      const resizeFunction = () => {
        windowWidth = window.innerWidth;
        const allParentMenuItems = document.querySelectorAll("[data-dropdown]");

        document.querySelector("body").style = "";

        allParentMenuItems.forEach((menuItem) => {
          menuItem.dataset.dropdown = "";
          menuItem.children[2].classList.remove("open");
          menuItem.children[2].style.maxHeight = "";
        });

        if (windowWidth < 992) {
          isMobileViewport.value = true;
        }
        if (windowWidth >= 992) {
          isMobileViewport.value = false;
          isMobileOpen.value = false;
        }
      };
      resizeFunction();
      window.addEventListener("resize", (e) => {
        resizeFunction();
      });
    });

    const closeMenuItemClick = () => {
      removeStylesMenu();
    };

    const parentOverlay = (e) => {
      windowWidth = window.innerWidth;

      if (windowWidth > 991) {
        if (isMenuOverlayParent.value === false) {
          isMenuOverlayParent.value = true;
        }
        if (e.target.classList.contains("menuOverlay")) {
          isMenuOverlayParent.value = false;
          removeStylesMenu();
        }
      }
    };

    const closeOverlay = (e) => {
      isMenuOverlayParent.value = false;
    };

    return {
      isMobileOpen,
      isMobileViewport,
      isMenuOverlayParent,
      openMobileMenu,
      closeMenuItemClick,
      closeOverlay,
      menuItemClick,
      parentOverlay,
    };
  },
};
</script>

<template>
  <teleport to="#overlays">
    <div @click.self="parentOverlay" class="menuOverlay" :class="{ active: isMenuOverlayParent }"></div>
  </teleport>

  <button class="menu-burger" :class="{ open: isMobileOpen }" @click="openMobileMenu">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>

  <ul class="menu" :class="{ open: isMobileOpen, mobile: isMobileViewport }">
    <li>
      <router-link
        :to="{ name: 'Home', params: { lang: lang } }"
        @click="[closeMenuItemClick($event), closeOverlay($event)]"
        >Home</router-link
      >
    </li>
    <li>
      <router-link :to="{ name: 'About' }" @click="[closeMenuItemClick($event), closeOverlay($event)]"
        >About</router-link
      >
    </li>
    <li data-dropdown @click.self="[menuItemClick($event), parentOverlay($event)]">
      <router-link to="/">Parent</router-link>

      <span class="carret">
        <svg viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="caret">
          <path
            id="Vector"
            d="M21.7093 1.7125L11.7093 11.7125C11.5181 11.8973 11.2627 12.0006 10.9968 12.0006C10.7309 12.0006 10.4754 11.8973 10.2843 11.7125L0.284278 1.7125C0.148618 1.56792 0.0566668 1.38788 0.0190611 1.19321C-0.0185446 0.99855 -0.000267632 0.797216 0.0717778 0.612505C0.148279 0.430504 0.276943 0.275219 0.441553 0.166221C0.606163 0.0572224 0.799353 -0.000612701 0.996778 4.8951e-06H20.9968C21.1942 -0.000612701 21.3874 0.0572224 21.552 0.166221C21.7166 0.275219 21.8453 0.430504 21.9218 0.612505C21.9938 0.797216 22.0121 0.99855 21.9745 1.19321C21.9369 1.38788 21.8449 1.56792 21.7093 1.7125Z"
            fill="black"
          />
        </svg>
      </span>
      <ul class="sub-menu">
        <li data-dropdown @click.self="[menuItemClick($event), parentOverlay($event)]">
          <router-link to="/">Child</router-link>
          <span class="carret">
            <svg viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="caret">
              <path
                id="Vector"
                d="M21.7093 1.7125L11.7093 11.7125C11.5181 11.8973 11.2627 12.0006 10.9968 12.0006C10.7309 12.0006 10.4754 11.8973 10.2843 11.7125L0.284278 1.7125C0.148618 1.56792 0.0566668 1.38788 0.0190611 1.19321C-0.0185446 0.99855 -0.000267632 0.797216 0.0717778 0.612505C0.148279 0.430504 0.276943 0.275219 0.441553 0.166221C0.606163 0.0572224 0.799353 -0.000612701 0.996778 4.8951e-06H20.9968C21.1942 -0.000612701 21.3874 0.0572224 21.552 0.166221C21.7166 0.275219 21.8453 0.430504 21.9218 0.612505C21.9938 0.797216 22.0121 0.99855 21.9745 1.19321C21.9369 1.38788 21.8449 1.56792 21.7093 1.7125Z"
                fill="black"
              />
            </svg>
          </span>
          <ul class="sub-menu">
            <li>
              <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Grand Child</router-link>
            </li>
            <li>
              <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Grand Child</router-link>
            </li>
            <li>
              <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Grand Child</router-link>
            </li>
            <li>
              <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Grand Child</router-link>
            </li>
          </ul>
        </li>
        <li data-dropdown @click.self="[menuItemClick($event), parentOverlay($event)]">
          <router-link to="/">Child</router-link>
          <span class="carret">
            <svg viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="caret">
              <path
                id="Vector"
                d="M21.7093 1.7125L11.7093 11.7125C11.5181 11.8973 11.2627 12.0006 10.9968 12.0006C10.7309 12.0006 10.4754 11.8973 10.2843 11.7125L0.284278 1.7125C0.148618 1.56792 0.0566668 1.38788 0.0190611 1.19321C-0.0185446 0.99855 -0.000267632 0.797216 0.0717778 0.612505C0.148279 0.430504 0.276943 0.275219 0.441553 0.166221C0.606163 0.0572224 0.799353 -0.000612701 0.996778 4.8951e-06H20.9968C21.1942 -0.000612701 21.3874 0.0572224 21.552 0.166221C21.7166 0.275219 21.8453 0.430504 21.9218 0.612505C21.9938 0.797216 22.0121 0.99855 21.9745 1.19321C21.9369 1.38788 21.8449 1.56792 21.7093 1.7125Z"
                fill="black"
              />
            </svg>
          </span>
          <ul class="sub-menu">
            <li>
              <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Grand Child</router-link>
            </li>
            <li>
              <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Grand Child</router-link>
            </li>
            <li>
              <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Grand Child</router-link>
            </li>
            <li>
              <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Grand Child</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li data-dropdown @click.self="[menuItemClick($event), parentOverlay($event)]">
      <router-link to="/">Parent</router-link>
      <span class="carret">
        <svg viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="caret">
          <path
            id="Vector"
            d="M21.7093 1.7125L11.7093 11.7125C11.5181 11.8973 11.2627 12.0006 10.9968 12.0006C10.7309 12.0006 10.4754 11.8973 10.2843 11.7125L0.284278 1.7125C0.148618 1.56792 0.0566668 1.38788 0.0190611 1.19321C-0.0185446 0.99855 -0.000267632 0.797216 0.0717778 0.612505C0.148279 0.430504 0.276943 0.275219 0.441553 0.166221C0.606163 0.0572224 0.799353 -0.000612701 0.996778 4.8951e-06H20.9968C21.1942 -0.000612701 21.3874 0.0572224 21.552 0.166221C21.7166 0.275219 21.8453 0.430504 21.9218 0.612505C21.9938 0.797216 22.0121 0.99855 21.9745 1.19321C21.9369 1.38788 21.8449 1.56792 21.7093 1.7125Z"
            fill="black"
          />
        </svg>
      </span>
      <ul class="sub-menu">
        <li>
          <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Child</router-link>
        </li>
        <li>
          <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Child</router-link>
        </li>
        <li>
          <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Child</router-link>
        </li>
        <li>
          <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Child</router-link>
        </li>
      </ul>
    </li>
    <li>
      <router-link to="/" @click="[closeMenuItemClick($event), closeOverlay($event)]">Contact</router-link>
    </li>
  </ul>
</template>

<style lang="scss">
@use "../assets/scss/abstracts/variables" as vars;
@use "../assets/scss/abstracts/mixins" as mxns;

.menu-burger {
  align-items: flex-end;
  background-color: var(--clr-brandSecondaryColor);
  border-radius: vars.$borderRadius;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 40px;
  justify-content: space-around;
  padding: 8px;
  position: relative;
  width: 40px;
  z-index: 7;
  @include mxns.mediamin(lg) {
    display: none;
  }
  .bar {
    background-color: var(--clr-black);
    border-radius: 3px;
    height: 3px;
    width: 100%;
    transition: width 320ms ease-in-out;
    &:first-child {
    }
    &:nth-child(2) {
      width: 80%;
    }
    &:last-child {
      width: 50%;
    }
  }
  &.open {
    .bar {
      width: 100%;
    }
  }
}

nav.scsseco-menu {
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 11;
  svg.caret {
    path {
      fill: var(--clr-black);
    }
  }
  ul.menu.mobile,
  ul.menu.mobile ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul.menu.mobile {
    align-content: center;
    align-items: center;
    background-color: var(--clr-brandSecondaryColor);
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    left: 100%;
    opacity: 0;
    overflow: hidden auto;
    padding: 100px 0 0 0;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(0%);
    transition: transform vars.$animDur ease-in-out, opacity vars.$animDur ease-in-out;
    width: 100%;
    z-index: 2;
    ul.sub-menu {
      width: 100%;
      transition: transform vars.$animDur ease-in-out, max-height vars.$animDur ease-in-out;
    }
    li {
      align-content: center;
      align-items: center;
      border-top: 1px solid var(--clr-brandSecondaryColor-400);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      width: 100%;
      @include mxns.mediamin(lg) {
        border: none;
      }
      &:hover {
        a {
          text-decoration: underline;
        }
      }
    }
    > li {
      &:first-child {
        border-top: 0;
      }
      &:last-child {
        border-bottom: 1px solid var(--clr-brandSecondaryColor-400);
      }
      > ul {
        // children
        > li {
          > a {
            text-indent: 30px;
          }
          > ul {
            // grand children
            > li {
              > a {
                text-indent: 60px;
              }
            }
          }
        }
      }
    }
    li[data-dropdown] {
      > ul {
        max-height: 0;
        overflow: hidden;
      }
      > a {
        pointer-events: none;
      }
    }
    li[data-dropdown="dropdown"] {
      > ul {
      }
      > span.carret {
        transform: rotate(180deg);
      }
    }
    a {
      color: var(--clr-black);
      display: block;
      padding: 20px 10px;
      text-align: left;
      text-decoration: none;
      width: 100%;
      &.router-link-active,
      &.router-link-exact-active {
        font-weight: bold;
      }
    }
    span.carret {
      align-content: center;
      align-items: center;
      display: flex;
      height: 60px;
      justify-content: center;
      padding: 3px;
      position: absolute;
      right: 10px;
      top: 0;
      transform: rotate(0);
      transition: transform vars.$animDur linear;
      width: auto;
      z-index: -1;
      img,
      svg {
        height: 10px;
        width: 10px;
      }
    }
  }
  ul.menu.mobile.open {
    transform: translateX(-100%);
    opacity: 1;
  }

  ul.menu:not(.mobile) {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    padding: 0;
    position: relative;
    z-index: 11;
    ul.sub-menu {
      background: var(--clr-white);
      margin: 0;
      min-width: 130px;
      opacity: 0;
      padding: 0;
      pointer-events: none;
      position: absolute;
      top: 100%;
      transform: translate(0, -20px);
      transition: transform vars.$animDur ease-out, opacity vars.$animDur ease-out, visibility vars.$animDur ease-out;
      visibility: hidden;
      span.carret {
        transform: rotate(-90deg);
      }
      ul.sub-menu {
        transform: translate(-10px, 0);
        left: 100%;
        top: 0;
        span.carret {
          transform: rotate(90deg);
        }
      }
    }
    li {
      align-content: center;
      align-items: center;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      &:hover {
        > a {
          color: var(--clr-brandPrimaryColor-500);
          text-decoration: underline;
        }
      }
    }
    > li {
      > ul {
        // children
        z-index: 11;
        > li {
          > a {
          }
          > ul {
            // grand children
            z-index: 21;
            > li {
              > a {
              }
            }
          }
        }
      }
    }
    li[data-dropdown] {
      > ul {
      }
      > a {
        pointer-events: none;
      }
    }
    li[data-dropdown="dropdown"] {
      > ul.sub-menu {
        opacity: 1;
        pointer-events: all;
        transform: translate(0, 0);
        visibility: visible;
        li[data-dropdown="dropdown"] {
          > span.carret {
            transform: rotate(90deg);
          }
        }
      }
      > span.carret {
        transform: rotate(180deg);
      }
    }
    a {
      color: var(--clr-black);
      display: block;
      padding: 20px 10px;
      text-align: left;
      text-decoration: none;
      width: 100%;
      &.router-link-active,
      &.router-link-exact-active {
        color: var(--clr-brandPrimaryColor-600);
        font-weight: bold;
      }
    }
    span.carret {
      align-content: center;
      align-items: center;
      display: flex;
      height: 60px;
      justify-content: center;
      padding: 3px;
      transform: rotate(0);
      transition: transform vars.$animDur linear;
      width: auto;
      z-index: -1;
      img,
      svg {
        height: 12px;
        width: 12px;
      }
    }
  }
}

.menuOverlay {
  background: transparent;
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: -1;
  &.active {
    z-index: 10;
  }
}
</style>
