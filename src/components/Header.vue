<script>
import LanguageChooser from "./LanguageChooser.vue";
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar, LanguageChooser },
  name: "Header",
  props: {
    lang: String,
  },
  setup() {
    const menuDetails = {
      menuItems: {
        home: {
          routerName: "Home",
          routerLabel: "Home",
        },
        test: {
          routerLabel: "Test",
          children: {
            test1: {
              routerLabel: "Test1",
            },
            test2: {
              routerLabel: "Test2",
              children: {
                test21: {
                  routerLabel: "Test2-1",
                },
                test22: {
                  routerLabel: "Test2-2",
                },
                test23: {
                  routerLabel: "Test2-3",
                },
                test24: {
                  routerLabel: "Test2-4",
                },
                test25: {
                  routerLabel: "Test2-5",
                },
                test26: {
                  routerLabel: "Test2-6",
                },
                test27: {
                  routerLabel: "Test2-7",
                },
                test28: {
                  routerLabel: "Test2-8",
                },
                test29: {
                  routerLabel: "Test2-9",
                },
                test210: {
                  routerLabel: "Test2-10",
                },
                test211: {
                  routerLabel: "Test2-11",
                },
                test212: {
                  routerLabel: "Test2-12",
                },
                test213: {
                  routerLabel: "Test2-13",
                },
                test214: {
                  routerLabel: "Test2-14",
                },
              },
            },
            test3: {
              routerLabel: "Test3",
            },
            test4: {
              routerLabel: "Test4",
            },
          },
        },
        about: {
          routerName: "About",
          routerLabel: "About",
        },
        services: {
          routerName: "Services",
          routerLabel: "Services",
          children: {
            music: {
              routerName: "MusicServices",
              routerLabel: "Music",
              children: {
                beat: {
                  routerName: "MusicServicesBeat",
                  routerLabel: "Beat",
                },
                verse: {
                  routerName: "MusicServicesVerse",
                  routerLabel: "Verse",
                },
              },
            },
            web: {
              routerName: "WebServices",
              routerLabel: "Web",
              children: {
                beat: {
                  routerName: "WebServicesCode",
                  routerLabel: "Code",
                },
                verse: {
                  routerName: "WebServicesDesign",
                  routerLabel: "Design",
                },
              },
            },
            divider: {
              routerLabel: "divider",
            },
            test: {
              routerName: "About",
              routerLabel: "About",
            },
          },
        },
        test222: {
          routerLabel: "Test222",
        },
        contact: {
          routerName: "Contact",
          routerLabel: "Contact",
        },
      },
    };

    return { menuDetails };
  },
};
</script>

<template>
  <header id="header" class="siteHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <LanguageChooser :lang="lang" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12" style="position: static">
          <h2>Header - {{ lang }}</h2>
          <Navbar :lang="lang" :details="menuDetails" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "../assets/scss/brand/abstracts/variables" as vars;
@use "../assets/scss/brand/abstracts/mixins" as mxns;

header#header.siteHeader {
  background-color: var(--clr-brandPrimaryColor);
  color: var(--clr-brandSecondaryColor);
}

// Navbar
// ----------
// Basic navbar styles do not change, overwrite if necessary
// ----------
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
      hr.divider {
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), var(--clr-brandPrimaryColor-complement), rgba(0, 0, 0, 0));
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
// Navbar customization
// ----------
</style>
