<script>
import languages from "../composables/translations/languages";
import translationsGlossary from "@/composables/global/translationsGlossary";

import Navbar from "@/components/global/Navbar/Navbar.vue";
import LanguageChooser from "@/components/global/LanguageChooser/LanguageChooser.vue";

export default {
  components: { Navbar, LanguageChooser },
  name: "LP~DemoComponents~Header",
  props: {
    lang: String,
  },
  setup() {
    const menuDetails = {
      menuID: "headerMenu",
      menuItems: {
        home: {
          routerName: "DemoComponentsHome",
          routerLabel: translationsGlossary.h.home,
        },
        about: {
          routerName: "DemoComponentsAbout",
          routerLabel: translationsGlossary.a.about,
        },
        components: {
          routerName: "DemoComponentsComponentsRoot",
          routerLabel: translationsGlossary.c.components,
          children: {
            backToTop: {
              routerName: "DemoComponentsComponentsBackToTop",
              routerLabel: translationsGlossary.b.backToTop,
            },
            badge: {
              routerName: "DemoComponentsComponentsBadge",
              routerLabel: translationsGlossary.b.badge,
            },
            button: {
              routerName: "DemoComponentsComponentsBreadcrumb",
              routerLabel: translationsGlossary.b.breadcrumb,
            },
            countdown: {
              routerName: "DemoComponentsComponentsCountdown",
              routerLabel: translationsGlossary.c.countdown,
            },
            languageChooser: {
              routerName: "DemoComponentsComponentsLanguageChooser",
              routerLabel: translationsGlossary.l.languageChooser,
            },
            modal: {
              routerName: "DemoComponentsComponentsModal",
              routerLabel: translationsGlossary.m.modal,
            },
            navbar: {
              routerName: "DemoComponentsComponentsNavbar",
              routerLabel: translationsGlossary.n.navbar,
            },
          },
        },
        contact: {
          routerName: "DemoComponentsContact",
          routerLabel: translationsGlossary.c.contact,
        },
      },
    };

    const { lpLangs, defaultLang, flagPath } = languages();

    const langsDetails = {
      lpLangs: lpLangs,
      defaultLang: defaultLang,
      flagPath: flagPath,
    };

    return { menuDetails, langsDetails };
  },
};
</script>

<template>
  <header id="header" class="siteHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <LanguageChooser :lang="lang" :languageChooserDetails="langsDetails" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 siteHeaderInner" style="position: static">
          <div class="site-logo">
            <router-link :to="{ name: menuDetails.menuItems.home.routerName, params: { lang: lang } }" class="logo">
              Logo
            </router-link>
          </div>
          <Navbar :lang="lang" :details="menuDetails" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "../assets/scss/abstracts/variables" as vars;
@use "../assets/scss/abstracts/mixins" as mxns;

header#header.siteHeader {
  background-color: var(--clr-brandPrimaryColor);
  color: var(--clr-brandSecondaryColor);
  .siteHeaderInner {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}
</style>
