<script>
import { onMounted } from "@vue/runtime-core";

import translationsGlossary from "@/composables/translations/translationsGlossary";

import Navbar from "@/components/global/Navbar/Navbar.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~Navbar~Section1",
  components: { Navbar },
  props: {
    lang: String,
  },
  setup() {
    const menuDetails = {
      menuID: "section1Menu",
      menuItems: {
        brand: {
          routerName: "Home",
          routerLabel: translationsGlossary.h.home,
          href: [window.location.origin + "/"],
        },
        demo1: {
          routerName: "Demo1Home",
          routerLabel: {
            en: "Demo1",
            it: "Demo1",
            tr: "Demo1",
            ro: "Demo1",
            hu: "Demo1",
            ar: "Demo1",
            de: "Demo1",
            es: "Demo1",
            sv: "Demo1",
            pt: "Demo1",
            fi: "Demo1",
            pl: "Demo1",
            th: "Demo1",
            ms: "Demo1",
          },
          href: [window.location.origin + "/lp/demo/v1/"],
        },
        demo2: {
          routerName: "Demo2Home",
          routerLabel: {
            en: "Demo2",
            it: "Demo2",
            tr: "Demo2",
            ro: "Demo2",
            hu: "Demo2",
            ar: "Demo2",
            de: "Demo2",
            es: "Demo2",
            sv: "Demo2",
            pt: "Demo2",
            fi: "Demo2",
            pl: "Demo2",
            th: "Demo2",
            ms: "Demo2",
          },
          href: [window.location.origin + "/lp/demo/v2/"],
        },
        demoComponents: {
          routerName: "LPs",
          routerLabel: {
            en: "DemoComponents",
            it: "DemoComponents",
            tr: "DemoComponents",
            ro: "DemoComponents",
            hu: "DemoComponents",
            ar: "DemoComponents",
            de: "DemoComponents",
            es: "DemoComponents",
            sv: "DemoComponents",
            pt: "DemoComponents",
            fi: "DemoComponents",
            pl: "DemoComponents",
            th: "DemoComponents",
            ms: "DemoComponents",
          },
          children: {
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
        },
        demo3: {
          routerName: "Demo3Home",
          routerLabel: {
            en: "Demo3",
            it: "Demo3",
            tr: "Demo3",
            ro: "Demo3",
            hu: "Demo3",
            ar: "Demo3",
            de: "Demo3",
            es: "Demo3",
            sv: "Demo3",
            pt: "Demo3",
            fi: "Demo3",
            pl: "Demo3",
            th: "Demo3",
            ms: "Demo3",
          },
          href: [window.location.origin + "/lp/demo3"],
        },
        google: {
          routerLabel: {
            en: "GitHub",
            it: "GitHub",
            tr: "GitHub",
            ro: "GitHub",
            hu: "GitHub",
            ar: "GitHub",
            de: "GitHub",
            es: "GitHub",
            sv: "GitHub",
            pt: "GitHub",
            fi: "GitHub",
            pl: "GitHub",
            th: "GitHub",
            ms: "GitHub",
          },
          href: ["https://github.com/BobbaruK/SCSSeco-Vue3-Boilerplate", "external"],
        },
      },
    };

    onMounted(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });
    return { menuDetails, translationsGlossary };
  },
};
</script>

<template>
  <section id="section1" class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ translationsGlossary.n.navbar[lang] }}</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <pre><code class="language-javascript">const navbarDetails = {
  menuID: "section1Menu",
  menuItems: {
    brand: {
      routerName: "Home",                             // String (default: "")           - router name (router-link)
      routerLabel: translationsGlossary.h.home,       // Object (default: {})           - router label
      href: [                                         // Array (default: [])            - if href exists this will not be router-link (anchor); if children exists href will be ignored
        window.location.origin + "/",                   // String (default: "")         - arr[0] anchor href
        "external",                                     // String (default: "")         - arr[1] if exists set anchor target to "_blank"
      ],           
      children: {                                     // Object (default: {})           - router label
        home: {
          routerName: "DemoComponentsHome",
          routerLabel: translationsGlossary.h.home,
        },
      },
    },
  },
}</code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Navbar :lang="lang" :details="menuDetails" />
          <div>
            <pre><code class="language-html">&lt;Navbar :lang=&quot;lang&quot; :details=&quot;{
  menuID: &quot;section1Menu&quot;,
  menuItems: {
    brand: {
      routerName: &quot;Home&quot;,
      routerLabel: translationsGlossary.h.home,
      href: [window.location.origin + &quot;/&quot;],
    },
    demo1: {
      routerName: &quot;Demo1Home&quot;,
      routerLabel: {
        en: &quot;Demo1&quot;,
        ...
      },
      href: [window.location.origin + &quot;/lp/demo/v1/&quot;],
    },
    demo2: {
      routerName: &quot;Demo2Home&quot;,
      routerLabel: {
        en: &quot;Demo2&quot;,
        ...
      },
      href: [window.location.origin + &quot;/lp/demo/v2/&quot;],
    },
    demoComponents: {
      routerName: &quot;LPs&quot;,
      routerLabel: {
        en: &quot;DemoComponents&quot;,
        ...
      },
      children: {
        home: {
          routerName: &quot;DemoComponentsHome&quot;,
          routerLabel: translationsGlossary.h.home,
        },
        about: {
          routerName: &quot;DemoComponentsAbout&quot;,
          routerLabel: translationsGlossary.a.about,
        },
        components: {
          routerName: &quot;DemoComponentsComponentsRoot&quot;,
          routerLabel: translationsGlossary.c.components,
          children: {
            badge: {
              routerName: &quot;DemoComponentsComponentsBadge&quot;,
              routerLabel: translationsGlossary.b.badge,
            },
            button: {
              routerName: &quot;DemoComponentsComponentsBreadcrumb&quot;,
              routerLabel: translationsGlossary.b.breadcrumb,
            },
            countdown: {
              routerName: &quot;DemoComponentsComponentsCountdown&quot;,
              routerLabel: translationsGlossary.c.countdown,
            },
            languageChooser: {
              routerName: &quot;DemoComponentsComponentsLanguageChooser&quot;,
              routerLabel: translationsGlossary.l.languageChooser,
            },
            modal: {
              routerName: &quot;DemoComponentsComponentsModal&quot;,
              routerLabel: translationsGlossary.m.modal,
            },
            navbar: {
              routerName: &quot;DemoComponentsComponentsNavbar&quot;,
              routerLabel: translationsGlossary.n.navbar,
            },
          },
        },
        contact: {
          routerName: &quot;DemoComponentsContact&quot;,
          routerLabel: translationsGlossary.c.contact,
        },
      },
    },
    demo3: {
      routerName: &quot;Demo3Home&quot;,
      routerLabel: {
        en: &quot;Demo3&quot;,
        ...
      },
      href: [window.location.origin + &quot;/lp/demo3&quot;],
    },
    google: {
      routerLabel: {
        en: &quot;GitHub&quot;,
        ...
      },
      href: [&quot;https://github.com/BobbaruK/SCSSeco-Vue3-Boilerplate&quot;, &quot;external&quot;],
    },
  },
}&quot; /&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../../assets/scss/abstracts/mixins" as mxns;

nav#section1Menu-navigation {
  .menu-wrapper {
    ul.menu {
      @include mxns.mediamin(lg) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        width: 100%;
      }
      > li {
        border-width: 1px 0 1px 1px;
        border-style: solid;
        border-color: var(--clr-brandPrimaryColor);
        &:first-child {
          border-radius: 5px 0 0 5px;
        }
        &:last-child {
          border-width: 1px;
          border-radius: 0 5px 5px 0;
        }
      }
      li {
        a,
        span {
          .caretWrapper {
            .caret path {
              fill: var(--clr-black);
            }
          }
          &:hover {
            background: var(--clr-brandPrimaryColor);
            color: var(--clr-brandSecondaryColor);
            .caretWrapper {
              .caret path {
                fill: var(--clr-white);
              }
            }
          }
          @include mxns.mediamin(lg) {
            color: black;
          }
        }
      }
    }
  }
}

html[dir="rtl"] {
  nav#section1Menu-navigation {
    .menu-wrapper {
      ul.menu {
        > li {
          border-width: 1px 1px 1px 0;
          border-style: solid;
          border-color: var(--clr-brandPrimaryColor);
          &:first-child {
            border-radius: 0 5px 5px 0;
          }
          &:last-child {
            border-width: 1px;
            border-radius: 5px 0 0 5px;
          }
        }
      }
    }
  }
}
</style>
