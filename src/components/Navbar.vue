<script>
// ! TODO this shit ca ma enerveaza

import { onMounted, ref } from "@vue/runtime-core";

export default {
  name: "Navbar",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    let windowWidth;
    let windowHeight;

    const getSiblings = (e) => {
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

    const openMobileMenu = (e) => {
      const html = document.querySelector("html");
      const body = document.body;
      const menuWrapper = document.querySelector(".menu-wrapper");
      menuWrapper.style.transition = "transform 500ms";

      if (e.target.classList.contains("open")) {
        body.style = "";
        e.target.classList.remove("open");

        menuWrapper.querySelectorAll("[data-dropdown]").forEach((li) => {
          li.dataset.dropdown = "";
        });

        menuWrapper.querySelectorAll(".dropdown").forEach((dropdown) => {
          dropdown.style.height = 0;
        });

        menuWrapper.querySelectorAll(".caret").forEach((caret) => {
          caret.style.transform = "rotate(0deg)";
        });

        if (html.getAttribute("dir") == "rtl") {
          menuWrapper.style.transform = "translate(-100%, 0)";
          return;
        }

        menuWrapper.style.transform = "translate(100%, 0)";
      } else {
        body.style.overflow = "hidden";
        e.target.classList.add("open");
        menuWrapper.style.transform = "translate(0, 0)";
      }
    };

    const listItemClick = (e) => {
      windowWidth = window.innerWidth;
      if (windowWidth < 992) {
        const dropdownMenu = e.target.nextElementSibling;

        if (dropdownMenu == null) return;

        const dropdownSubMenuParent = e.target.closest(".link-item + .dropdown");
        const siblings = getSiblings(dropdownMenu.parentElement);

        if (e.target.parentElement.dataset.dropdown != "open") {
          e.target.parentElement.dataset.dropdown = "open";
          dropdownMenu.style.height = `${dropdownMenu.scrollHeight}px`;
          e.target.querySelector(".caret").style.transform = "rotate(180deg)";

          let siblingHeight = null;

          siblings.forEach((sibling) => {
            if (sibling.dataset.dropdown == "open") {
              sibling.dataset.dropdown = "";

              sibling.querySelectorAll(".caret").forEach((caret) => {
                caret.style.transform = "rotate(0deg)";
              });

              sibling.querySelectorAll(".dropdown").forEach((dropdown) => {
                dropdown.style.height = 0;
              });

              sibling.querySelectorAll("[data-dropdown]").forEach((dataDrDown) => {
                dataDrDown.dataset.dropdown = "";
              });

              sibling.children[1].style.height = 0; // select .dropdown

              siblingHeight = sibling.children[1].scrollHeight;
            }
          });

          if (dropdownSubMenuParent == "" || dropdownSubMenuParent == null) return;

          dropdownSubMenuParent.style.height = `${
            dropdownSubMenuParent.scrollHeight + dropdownMenu.scrollHeight - siblingHeight
          }px`;
        } else {
          e.target.parentElement.dataset.dropdown = "";

          e.target.parentElement.querySelectorAll("[data-dropdown]").forEach((li) => {
            li.dataset.dropdown = "";
          });

          e.target.parentElement.querySelectorAll(".caret").forEach((caret) => {
            caret.style.transform = "rotate(0deg)";
          });

          e.target.parentElement.querySelectorAll(".dropdown").forEach((dropdown) => {
            dropdown.style.height = 0;
          });

          if (dropdownSubMenuParent == "" || dropdownSubMenuParent == null) return;
          e.target.closest(".link-item + .dropdown").style.height = `${
            dropdownSubMenuParent.scrollHeight - dropdownMenu.scrollHeight
          }px`;
        }
      }
    };

    const hoverSetDesktop = () => {
      windowWidth = window.innerWidth;

      const menuWrapper = document.querySelector(".menu-wrapper");

      if (windowWidth > 991) {
        menuWrapper.querySelectorAll(".dropdown").forEach((dropdown) => {
          dropdown.style = "";
        });
      }
    };

    const resetStyles = () => {
      windowWidth = window.innerWidth;

      const html = document.querySelector("html");
      const body = document.body;
      const navWrapper = document.querySelector(".scsseco-menu");
      const menuWrapper = document.querySelector(".menu-wrapper");

      navWrapper.querySelector(".menu-burger").classList.remove("open");
      body.style = "";

      const removeInlineStyles = () => {
        menuWrapper.querySelectorAll("[data-dropdown]").forEach((li) => {
          li.dataset.dropdown = "";
        });

        menuWrapper.querySelectorAll(".caret").forEach((caret) => {
          caret.style = "";
        });
      };

      if (windowWidth > 991) {
        menuWrapper.style = "";
        menuWrapper.querySelectorAll(".dropdown").forEach((dropdown) => {
          dropdown.style = "transition: none";
        });
        removeInlineStyles();
      }
      if (windowWidth < 992) {
        menuWrapper.querySelectorAll(".dropdown").forEach((dropdown) => {
          dropdown.style = "";
        });
        removeInlineStyles();

        if (html.getAttribute("dir") == "rtl") {
          menuWrapper.style.transform = "translate(-100%, 0)";
        } else {
          menuWrapper.style.transform = "translate(100%, 0)";
        }
      }
    };

    const heightResize = (initialHeight) => {
      windowHeight = window.innerHeight;

      let differenceHeight = windowHeight - initialHeight;

      if (
        (initialHeight < windowHeight && differenceHeight <= 100 && differenceHeight >= 0) ||
        windowHeight == initialHeight
      ) {
        console.log(differenceHeight, "nu ruleaza");
        return false; // show mobile adress bar
      } else if (
        (initialHeight > windowHeight && differenceHeight >= 100 * -1 && differenceHeight <= 0) ||
        initialHeight == windowHeight
      ) {
        console.log(differenceHeight, "nu ruleaza");
        return false; // hide mobile adress bar
      } else {
        console.log("ruleaza");
        return true;
      }
    };

    onMounted(() => {
      // console.log(screen);
      // console.dir(document);
      // console.dir(navigator.userAgent);

      let initialHeight = window.innerHeight;
      window.addEventListener("resize", () => {
        if (heightResize(initialHeight)) {
          resetStyles();
        }
      });
    });

    /**
     * Determine the mobile operating system.
     * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
     *
     * @returns {String}
     */
    const slbz = ref("");
    function getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        slbz.value = "Windows Phone";
        return "Windows Phone";
      }

      if (/android/i.test(userAgent)) {
        slbz.value = "Android";
        return "Android";
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        slbz.value = "iOS";
        return "iOS";
      }

      slbz.value = "unknown";
      return "unknown";
    }
    // alert(getMobileOperatingSystem());

    return { listItemClick, openMobileMenu, resetStyles, hoverSetDesktop, slbz };
  },
};
</script>

<template>
  <nav class="scsseco-menu">
    <div class="site-logo">
      <router-link :to="{ name: 'Home', params: { lang: lang } }" class="logo">Logo</router-link>
    </div>

    <div class="burger-wrapper">
      <button class="menu-burger" @click="openMobileMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>

    <div class="menu-wrapper" @mouseenter="hoverSetDesktop">
      <ul class="menu">
        <li data-dropdown @click.stop.prevent="listItemClick">
          <span class="link-item"
            >test
            <span class="caretWrapper">
              <svg viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="caret">
                <path
                  id="Vector"
                  d="M21.7093 1.7125L11.7093 11.7125C11.5181 11.8973 11.2627 12.0006 10.9968 12.0006C10.7309 12.0006 10.4754 11.8973 10.2843 11.7125L0.284278 1.7125C0.148618 1.56792 0.0566668 1.38788 0.0190611 1.19321C-0.0185446 0.99855 -0.000267632 0.797216 0.0717778 0.612505C0.148279 0.430504 0.276943 0.275219 0.441553 0.166221C0.606163 0.0572224 0.799353 -0.000612701 0.996778 4.8951e-06H20.9968C21.1942 -0.000612701 21.3874 0.0572224 21.552 0.166221C21.7166 0.275219 21.8453 0.430504 21.9218 0.612505C21.9938 0.797216 22.0121 0.99855 21.9745 1.19321C21.9369 1.38788 21.8449 1.56792 21.7093 1.7125Z"
                  fill="black"
                />
              </svg> </span
          ></span>
          <div class="dropdown">
            <ul class="sub-menu">
              <li><a href="#">test1</a></li>
              <li><a href="#">test2</a></li>
              <li data-dropdown @click.stop.prevent="listItemClick">
                <span class="link-item"
                  >test3
                  <span class="caretWrapper">
                    <svg viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="caret">
                      <path
                        id="Vector"
                        d="M21.7093 1.7125L11.7093 11.7125C11.5181 11.8973 11.2627 12.0006 10.9968 12.0006C10.7309 12.0006 10.4754 11.8973 10.2843 11.7125L0.284278 1.7125C0.148618 1.56792 0.0566668 1.38788 0.0190611 1.19321C-0.0185446 0.99855 -0.000267632 0.797216 0.0717778 0.612505C0.148279 0.430504 0.276943 0.275219 0.441553 0.166221C0.606163 0.0572224 0.799353 -0.000612701 0.996778 4.8951e-06H20.9968C21.1942 -0.000612701 21.3874 0.0572224 21.552 0.166221C21.7166 0.275219 21.8453 0.430504 21.9218 0.612505C21.9938 0.797216 22.0121 0.99855 21.9745 1.19321C21.9369 1.38788 21.8449 1.56792 21.7093 1.7125Z"
                        fill="black"
                      />
                    </svg> </span
                ></span>
                <div class="dropdown">
                  <ul class="sub-menu">
                    <li><a href="#">test2.1</a></li>
                    <li><a href="#">test2.2</a></li>
                    <li><a href="#">test2.2</a></li>
                    <li><a href="#">test2.2</a></li>
                    <li><a href="#">test2.2</a></li>
                    <li><a href="#">test2.2</a></li>
                    <li><a href="#">test2.2</a></li>
                    <li><a href="#">test2.2</a></li>
                    <li><a href="#">test2.2</a></li>
                    <li><a href="#">test2.2</a></li>
                    <li><a href="#">test2.2</a></li>
                    <li><a href="#">test2.2</a></li>
                    <li><a href="#">test2.2</a></li>
                    <li><a href="#">test2.2</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="#">test4</a></li>
            </ul>
          </div>
        </li>
        <li>
          <router-link :to="{ name: 'Home' }" @click="resetStyles">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" @click="resetStyles">About</router-link>
        </li>
        <li data-dropdown @click.stop.prevent="listItemClick">
          <router-link :to="{ name: 'Services' }" custom v-slot="{ isActive, isExactActive }">
            <span
              class="link-item"
              :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
            >
              Services
              <span class="caretWrapper">
                <svg viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="caret">
                  <path
                    id="Vector"
                    d="M21.7093 1.7125L11.7093 11.7125C11.5181 11.8973 11.2627 12.0006 10.9968 12.0006C10.7309 12.0006 10.4754 11.8973 10.2843 11.7125L0.284278 1.7125C0.148618 1.56792 0.0566668 1.38788 0.0190611 1.19321C-0.0185446 0.99855 -0.000267632 0.797216 0.0717778 0.612505C0.148279 0.430504 0.276943 0.275219 0.441553 0.166221C0.606163 0.0572224 0.799353 -0.000612701 0.996778 4.8951e-06H20.9968C21.1942 -0.000612701 21.3874 0.0572224 21.552 0.166221C21.7166 0.275219 21.8453 0.430504 21.9218 0.612505C21.9938 0.797216 22.0121 0.99855 21.9745 1.19321C21.9369 1.38788 21.8449 1.56792 21.7093 1.7125Z"
                    fill="black"
                  />
                </svg>
              </span>
            </span>
          </router-link>
          <div class="dropdown">
            <ul class="sub-menu">
              <li data-dropdown @click.stop.prevent="listItemClick">
                <router-link :to="{ name: 'MusicServices' }" custom v-slot="{ isActive, isExactActive }">
                  <span
                    class="link-item"
                    :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
                  >
                    Music
                    <span class="caretWrapper">
                      <svg viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="caret">
                        <path
                          id="Vector"
                          d="M21.7093 1.7125L11.7093 11.7125C11.5181 11.8973 11.2627 12.0006 10.9968 12.0006C10.7309 12.0006 10.4754 11.8973 10.2843 11.7125L0.284278 1.7125C0.148618 1.56792 0.0566668 1.38788 0.0190611 1.19321C-0.0185446 0.99855 -0.000267632 0.797216 0.0717778 0.612505C0.148279 0.430504 0.276943 0.275219 0.441553 0.166221C0.606163 0.0572224 0.799353 -0.000612701 0.996778 4.8951e-06H20.9968C21.1942 -0.000612701 21.3874 0.0572224 21.552 0.166221C21.7166 0.275219 21.8453 0.430504 21.9218 0.612505C21.9938 0.797216 22.0121 0.99855 21.9745 1.19321C21.9369 1.38788 21.8449 1.56792 21.7093 1.7125Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                </router-link>
                <div class="dropdown">
                  <ul class="sub-menu">
                    <li>
                      <router-link :to="{ name: 'MusicServicesBeat' }" @click="resetStyles">Beat</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'MusicServicesVerse' }" @click="resetStyles">Verse</router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li data-dropdown @click.stop.prevent="listItemClick">
                <router-link :to="{ name: 'WebServices' }" custom v-slot="{ isActive, isExactActive }">
                  <span
                    class="link-item"
                    :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
                  >
                    Web
                    <span class="caretWrapper">
                      <svg viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="caret">
                        <path
                          id="Vector"
                          d="M21.7093 1.7125L11.7093 11.7125C11.5181 11.8973 11.2627 12.0006 10.9968 12.0006C10.7309 12.0006 10.4754 11.8973 10.2843 11.7125L0.284278 1.7125C0.148618 1.56792 0.0566668 1.38788 0.0190611 1.19321C-0.0185446 0.99855 -0.000267632 0.797216 0.0717778 0.612505C0.148279 0.430504 0.276943 0.275219 0.441553 0.166221C0.606163 0.0572224 0.799353 -0.000612701 0.996778 4.8951e-06H20.9968C21.1942 -0.000612701 21.3874 0.0572224 21.552 0.166221C21.7166 0.275219 21.8453 0.430504 21.9218 0.612505C21.9938 0.797216 22.0121 0.99855 21.9745 1.19321C21.9369 1.38788 21.8449 1.56792 21.7093 1.7125Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                </router-link>
                <div class="dropdown">
                  <ul class="sub-menu">
                    <li>
                      <router-link :to="{ name: 'WebServicesCode' }" @click="resetStyles">Code</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'WebServicesDesign' }" @click="resetStyles">Design</router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <router-link :to="{ name: 'Contact' }" @click="resetStyles">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
@use "../assets/scss/brand/abstracts/variables" as vars;
@use "../assets/scss/brand/abstracts/mixins" as mxns;

$menuBreakPoint: lg;
$navMobileTranslate: 100%;
// Basic style
nav.scsseco-menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @include mxns.mediamin($menuBreakPoint) {
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
  }

  .burger-wrapper {
    align-content: center;
    align-items: center;
    display: flex;
    justify-content: flex-end;
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
      @include mxns.mediamin($menuBreakPoint) {
        display: none;
      }
      .bar {
        background-color: var(--clr-black);
        border-radius: 3px;
        height: 3px;
        width: 100%;
        transition: width 320ms ease-in-out;
        pointer-events: none;
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
  }

  .menu-wrapper {
    align-content: center;
    align-items: flex-start;
    background: var(--clr-brandPrimaryColor);
    display: flex;
    flex-direction: column;
    grid-column-end: 3;
    grid-column-start: 1;
    inset: 0;
    justify-content: flex-start;
    position: fixed;
    transform: translate($navMobileTranslate, 0);
    transition: transform 500ms;
    transition: none;
    z-index: 1;
    @include mxns.mediamax($menuBreakPoint) {
      height: 100vh;
      overflow-y: auto;
      padding-top: 15rem;
      width: 100vw;
    }
    @include mxns.mediamin($menuBreakPoint) {
      background: transparent;
      position: static;
      gap: 1rem;
      transform: translate(0, 0);
      flex-grow: 1;
      align-items: flex-end;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    ul.menu {
      align-content: center;
      align-items: stretch;
      border-bottom: 1px solid var(--clr-brandPrimaryColor-300);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      @include mxns.mediamin($menuBreakPoint) {
        border: none;
        flex-direction: row;
        flex-grow: 1;
        width: auto;
      }
      li {
        border-top: 1px solid var(--clr-brandPrimaryColor-300);
        position: relative;
        @include mxns.mediamin($menuBreakPoint) {
          border: none;
        }
        a,
        span.link-item {
          align-content: center;
          align-items: center;
          color: var(--clr-white);
          cursor: pointer;
          display: flex;
          gap: 0.45rem;
          justify-content: space-between;
          padding: 10px 15px;
          text-decoration: none;
          text-decoration: none;
          @include mxns.mediamin($menuBreakPoint) {
            padding: 10px;
          }
          &:hover {
            color: var(--clr-brandSecondaryColor-400);
          }
          &.router-link-active,
          &.router-link-exact-active {
            font-weight: bold;
          }
        }
        ul {
          @include mxns.mediamin($menuBreakPoint) {
            background: var(--clr-white);
          }
          li {
            a,
            span.link-item {
              text-indent: 1rem;
              @include mxns.mediamin($menuBreakPoint) {
                color: var(--clr-black);
                text-indent: 0;
              }
            }
            ul {
              li {
                a,
                span.link-item {
                  text-indent: 2rem;
                  @include mxns.mediamin($menuBreakPoint) {
                    text-indent: 0;
                  }
                }
              }
            }
          }
          .caretWrapper {
            .caret {
              path {
                @include mxns.mediamin($menuBreakPoint) {
                  fill: var(--clr-black);
                }
              }
            }
          }
        }
        &:hover {
          > .dropdown {
            pointer-events: all;
          }
        }
      }
      > li[data-dropdown] {
        &:hover {
          > a,
          span.link-item {
            .caret {
              @include mxns.mediamin($menuBreakPoint) {
                transform: rotate(180deg);
              }
            }
          }
        }
        > .dropdown {
          li[data-dropdown] {
            > a,
            span.link-item {
              .caret {
                @include mxns.mediamin($menuBreakPoint) {
                  transform: rotate(-90deg);
                }
              }
            }
            &:hover {
              > a,
              span.link-item {
                .caret {
                  @include mxns.mediamin($menuBreakPoint) {
                    transform: rotate(90deg);
                  }
                }
              }
            }
          }
        }
      }
    }

    .dropdown {
      transition: 500ms;
      @include mxns.mediamin($menuBreakPoint) {
        left: 0;
        min-width: 100%;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 100%;
        transform: translateY(-20px);
        visibility: hidden;
        z-index: 1;
      }
      ul.sub-menu {
        @include mxns.mediamin($menuBreakPoint) {
          background: var(--clr-white);
        }
        li {
          a,
          span.link-item {
            text-indent: 1rem;
            &:hover {
              @include mxns.mediamin($menuBreakPoint) {
                color: var(--clr-brandPrimaryColor-500);
              }
            }
            @include mxns.mediamin($menuBreakPoint) {
              color: var(--clr-black);
              text-indent: 0;
            }
          }
        }
        .caretWrapper {
          .caret {
            path {
              @include mxns.mediamin($menuBreakPoint) {
                fill: var(--clr-black);
              }
            }
          }
        }
      }
      .dropdown {
        @include mxns.mediamin($menuBreakPoint) {
          transform: translateX(-10px);
          left: 100%;
          top: 0;
        }
        ul.sub-menu {
          li {
            a,
            span.link-item {
              text-indent: 2rem;
              @include mxns.mediamin($menuBreakPoint) {
                text-indent: 0;
              }
            }
          }
        }
      }
    }

    li[data-dropdown] {
      > a,
      span {
      }
      &:hover {
        > .dropdown {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }
      }
      .dropdown {
        @include mxns.mediamax($menuBreakPoint) {
          overflow: hidden;
          height: 0;
        }
        li[data-dropdown] {
          &:hover {
            > .dropdown {
              transform: translateX(0);
            }
          }
        }
      }
    }
  }

  .caretWrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    pointer-events: none;
    .caret {
      height: 1rem;
      width: 1rem;
      transition: transform 500ms;
      @include mxns.mediamin($menuBreakPoint) {
        height: 0.65rem;
        width: 0.65rem;
      }
      path {
        fill: var(--clr-white);
      }
    }
  }
}

html[dir="rtl"] {
  nav.scsseco-menu {
    .menu-wrapper {
      transform: translate(calc($navMobileTranslate * -1), 0);
      @include mxns.mediamin($menuBreakPoint) {
        transform: translate(0, 0);
      }

      ul.menu {
        > li[data-dropdown] {
          > .dropdown {
            li[data-dropdown] {
              > a,
              span.link-item {
                .caret {
                  @include mxns.mediamin($menuBreakPoint) {
                    transform: rotate(90deg);
                  }
                }
              }
              &:hover {
                > a,
                span.link-item {
                  .caret {
                    @include mxns.mediamin($menuBreakPoint) {
                      transform: rotate(-90deg);
                    }
                  }
                }
              }
            }
          }
        }
      }

      .dropdown {
        @include mxns.mediamin($menuBreakPoint) {
          left: auto;
          right: 0;
        }

        ul.sub-menu {
          li {
            a,
            span.link-item {
            }
          }

          .caretWrapper {
            .caret {
              path {
              }
            }
          }
        }

        .dropdown {
          @include mxns.mediamin($menuBreakPoint) {
            transform: translateX(10px);
            left: auto;
            right: 100%;
            top: 0;
          }
          ul.sub-menu {
            @include mxns.mediamin($menuBreakPoint) {
            }
            li {
              a,
              span.link-item {
              }
            }
            .caretWrapper {
              .caret {
                path {
                  @include mxns.mediamin($menuBreakPoint) {
                  }
                }
              }
            }
          }
        }
      }
    }

    .caretWrapper {
      right: auto;
      left: 0;
      .caret {
        path {
        }
      }
    }
  }
}

// Customization
</style>
