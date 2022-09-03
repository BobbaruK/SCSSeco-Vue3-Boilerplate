<script>
import { onMounted } from "@vue/runtime-core";
import CarretWrapper from "../CarretWrapper.vue";

export default {
  name: "Navbar",
  components: { CarretWrapper },
  props: {
    lang: String,
    details: Object,
  },
  setup(props) {
    let windowWidth;
    const menuBreakPoint = 992;

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
      const menuWrapper = document.getElementById(props.details.menuID);
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
        resetStyles();

        body.style.overflow = "hidden";
        e.target.classList.add("open");
        menuWrapper.style.transform = "translate(0, 0)";
      }
    };

    const mobileMenuClick = (e) => {
      const body = document.body;
      windowWidth = window.innerWidth;
      if (windowWidth < menuBreakPoint) {
        body.style.overflow = "hidden";
      }
    };

    const listItemClick = (e) => {
      const body = document.body;

      if (e.target.tagName.toLowerCase() === "span" && windowWidth < menuBreakPoint) {
        body.style.overflow = "hidden";
      }

      windowWidth = window.innerWidth;

      if (windowWidth < menuBreakPoint) {
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

      const menuWrapper = document.getElementById(props.details.menuID);

      if (windowWidth >= menuBreakPoint) {
        menuWrapper.querySelectorAll(".dropdown").forEach((dropdown) => {
          dropdown.style = "";
        });
      }
    };

    const resetStyles = () => {
      windowWidth = window.innerWidth;

      const html = document.querySelector("html");
      const body = document.body;
      // const navWrapper = document.querySelector(".scsseco-menu");
      const navWrapper = document.getElementById(`${props.details.menuID}-navigation`);
      const menuWrapper = document.getElementById(props.details.menuID);

      navWrapper.querySelector(".menu-burger").classList.remove("open");
      body.style = "";

      menuWrapper.querySelectorAll("[data-dropdown]").forEach((li) => {
        li.dataset.dropdown = "";
      });

      menuWrapper.querySelectorAll(".caret").forEach((caret) => {
        caret.style = "";
      });

      if (windowWidth >= menuBreakPoint) {
        menuWrapper.style = "";
        menuWrapper.querySelectorAll(".dropdown").forEach((dropdown) => {
          // dropdown.style = "transition: none";
        });
      }
      if (windowWidth < menuBreakPoint) {
        menuWrapper.querySelectorAll(".dropdown").forEach((dropdown) => {
          dropdown.style = "";
        });

        if (html.getAttribute("dir") == "rtl") {
          menuWrapper.style.transform = "translate(-100%, 0)";
        } else {
          menuWrapper.style.transform = "translate(100%, 0)";
        }
      }
    };

    const absoluteLink = (e) => {
      console.log(e.target.target);
      if (e.target.target == "_blank") {
        window.open(e.target.href, "_blank");
      } else {
        window.location.href = e.target.href;
      }
    };

    onMounted(() => {
      window.addEventListener("resize", () => {
        if (window.innerWidth >= menuBreakPoint) {
          resetStyles();
        }
      });
    });

    return { listItemClick, openMobileMenu, mobileMenuClick, resetStyles, hoverSetDesktop, absoluteLink };
  },
};
</script>

<template>
  <nav :id="`${details.menuID}-navigation`" class="scsseco-menu">
    <div class="burger-wrapper">
      <button class="menu-burger" @click="openMobileMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
    <div :id="details.menuID" class="menu-wrapper" @click.self="mobileMenuClick" @mouseenter="hoverSetDesktop">
      <ul class="menu">
        <li
          v-for="(parent, index) in details.menuItems"
          :key="index"
          :data-dropdown="parent.hasOwnProperty('children')"
          @click.stop.prevent="listItemClick"
        >
          <router-link
            v-if="!parent.hasOwnProperty('children') && !parent.hasOwnProperty('href')"
            :to="{ name: parent.routerName, params: { lang: lang } }"
            @click="resetStyles"
          >
            {{ parent.routerLabel[lang] }}
          </router-link>
          <router-link
            v-else-if="parent.hasOwnProperty('children')"
            :to="{ name: parent.routerName }"
            custom
            v-slot="{ isActive, isExactActive }"
          >
            <span
              class="link-item"
              :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
            >
              {{ parent.routerLabel[lang] }}
              <CarretWrapper v-if="parent.hasOwnProperty('children')" />
            </span>
          </router-link>
          <a
            v-else-if="parent.hasOwnProperty('href')"
            :href="parent.href[0]"
            @click="absoluteLink"
            :target="parent.href[1] == 'external' ? '_blank' : '_self'"
          >
            {{ parent.routerLabel[lang] }}
            <svg
              v-if="parent.href[1] == 'external'"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="externalLing"
            >
              <path
                fill="currentColor"
                d="M17.001 20h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4v2h-4v11h11v-4h2v4a2 2 0 0 1-2 2Zm-5.3-6.293l-1.41-1.414L16.584 6h-3.583V4h7v7h-2V7.415l-6.3 6.292Z"
              />
            </svg>
          </a>
          <div v-if="parent.hasOwnProperty('children')" class="dropdown">
            <ul class="sub-menu">
              <li
                v-for="(child, childIndex) in parent.children"
                :key="childIndex"
                :data-dropdown="child.hasOwnProperty('children')"
                @click.stop.prevent="listItemClick"
              >
                <hr v-if="child.routerLabel === 'divider'" class="divider" />
                <router-link
                  v-if="!child.hasOwnProperty('children') && child.routerLabel != 'divider'"
                  :to="{ name: child.routerName, params: { lang: lang } }"
                  @click="resetStyles"
                >
                  {{ child.routerLabel[lang] }}
                </router-link>
                <router-link
                  v-else-if="child.hasOwnProperty('children')"
                  :to="{ name: child.routerName }"
                  custom
                  v-slot="{ isActive, isExactActive }"
                >
                  <span
                    class="link-item"
                    :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
                  >
                    {{ child.routerLabel[lang] }}
                    <CarretWrapper v-if="child.hasOwnProperty('children')" />
                  </span>
                </router-link>
                <div v-if="child.hasOwnProperty('children')" class="dropdown">
                  <ul class="sub-menu">
                    <li v-for="(grandChild, grandChildIndex) in child.children" :key="grandChildIndex">
                      <hr v-if="grandChild.routerLabel === 'divider'" class="divider" />
                      <router-link
                        v-else
                        :to="{ name: grandChild.routerName, params: { lang: lang } }"
                        @click="resetStyles"
                      >
                        {{ grandChild.routerLabel[lang] }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
@use "../../../assets/scss/brand/abstracts/variables" as vars;
@use "../../../assets/scss/brand/abstracts/mixins" as mxns;

// Navbar
// ----------
// Basic navbar styles do not change, overwrite if necessary
// ----------
$menuBreakPoint: lg;
$navMobileTranslate: 100%;
// Basic style
nav.scsseco-menu {
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
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
      z-index: 31;
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
    z-index: 30;
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
        position: relative;
        @include mxns.mediamin($menuBreakPoint) {
          border: none;
        }
        a,
        span.link-item {
          align-content: center;
          align-items: center;
          border-top: 1px solid var(--clr-brandPrimaryColor-300);
          color: var(--clr-white);
          cursor: pointer;
          display: flex;
          gap: 0.45rem;
          justify-content: space-between;
          padding: 10px 15px;
          text-decoration: none;
          text-decoration: none;
          @include mxns.mediamin($menuBreakPoint) {
            border: none;
            padding: 10px;
          }
          &.router-link-active,
          &.router-link-exact-active {
            font-weight: bold;
          }
          img.externalLing,
          svg.externalLing {
            height: 1em;
            width: 1em;
          }
          &:hover {
            color: var(--clr-brandSecondaryColor-400);
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
      hr.divider {
        background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          var(--clr-brandPrimaryColor-complement),
          rgba(0, 0, 0, 0)
        );
        border: 0;
        bottom: -1px;
        height: 1px;
        margin: 0;
        position: relative;
        z-index: 1;
        @include mxns.mediamin($menuBreakPoint) {
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
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
</style>
