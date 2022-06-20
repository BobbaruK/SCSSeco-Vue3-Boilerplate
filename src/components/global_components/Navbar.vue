<script>
import { onMounted } from "@vue/runtime-core";
import CarretWrapper from "./CarretWrapper.vue";

export default {
  name: "Navbar",
  components: { CarretWrapper },
  props: {
    lang: String,
    details: Object,
  },
  setup() {
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
        resetStyles();

        body.style.overflow = "hidden";
        e.target.classList.add("open");
        menuWrapper.style.transform = "translate(0, 0)";
      }
    };

    const listItemClick = (e) => {
      const body = document.body;

      if (e.target.tagName.toLowerCase() === "span") {
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

      const menuWrapper = document.querySelector(".menu-wrapper");

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
      const navWrapper = document.querySelector(".scsseco-menu");
      const menuWrapper = document.querySelector(".menu-wrapper");

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

    onMounted(() => {
      window.addEventListener("resize", () => {
        resetStyles();
        if (window.innerWidth >= menuBreakPoint) {
        }
      });
    });

    return { listItemClick, openMobileMenu, resetStyles, hoverSetDesktop };
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
        <li
          v-for="(parent, index) in details.menuItems"
          :key="index"
          :data-dropdown="parent.hasOwnProperty('children')"
          @click.stop.prevent="listItemClick"
        >
          <router-link
            v-if="!parent.hasOwnProperty('children')"
            :to="{ name: parent.routerName, params: { lang: lang } }"
            @click="resetStyles"
          >
            {{ parent.routerLabel }}
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
              {{ parent.routerLabel }}
              <CarretWrapper v-if="parent.hasOwnProperty('children')" />
            </span>
          </router-link>
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
                  {{ child.routerLabel }}
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
                    {{ child.routerLabel }}
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
                        {{ grandChild.routerLabel }}
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

<style lang="scss"></style>
