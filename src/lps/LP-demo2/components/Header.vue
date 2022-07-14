<script>
import Navbar from "../../../components/global_components/Navbar/Navbar.vue";
import LanguageChooser from "../../../components/global_components/LanguageChooser.vue";
import languages from '../composables/translations/languages'
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
          routerName: "Demo2Home",
          routerLabel: {
            en: "Home",
            it: "Casa",
            tr: "Ev",
            ro: "Acasă",
            hu: "Itthon",
            ar: "مسكن",
            de: "Heim",
            es: "Hogar",
            sv: "Hem",
            pt: "Casa",
            fi: "Koti",
            pl: "Dom",
            th: "บ้าน",
            ms: "Rumah",
          },
        },
        test: {
          routerLabel: {
            en: "Test",
            it: "Test",
            tr: "Test",
            ro: "Test",
            hu: "Test",
            ar: "Test",
            de: "Test",
            es: "Test",
            sv: "Test",
            pt: "Test",
            fi: "Test",
            pl: "Test",
            th: "Test",
            ms: "Test",
          },
          children: {
            test1: {
              routerLabel: {
                en: "Test1",
                it: "Test1",
                tr: "Test1",
                ro: "Test1",
                hu: "Test1",
                ar: "Test1",
                de: "Test1",
                es: "Test1",
                sv: "Test1",
                pt: "Test1",
                fi: "Test1",
                pl: "Test1",
                th: "Test1",
                ms: "Test1",
              },
            },
            test2: {
              routerLabel: {
                en: "Test2",
                it: "Test2",
                tr: "Test2",
                ro: "Test2",
                hu: "Test2",
                ar: "Test2",
                de: "Test2",
                es: "Test2",
                sv: "Test2",
                pt: "Test2",
                fi: "Test2",
                pl: "Test2",
                th: "Test2",
                ms: "Test2",
              },
              children: {
                test21: {
                  routerLabel: {
                    en: "Test2-1",
                    it: "Test2-1",
                    tr: "Test2-1",
                    ro: "Test2-1",
                    hu: "Test2-1",
                    ar: "Test2-1",
                    de: "Test2-1",
                    es: "Test2-1",
                    sv: "Test2-1",
                    pt: "Test2-1",
                    fi: "Test2-1",
                    pl: "Test2-1",
                    th: "Test2-1",
                    ms: "Test2-1",
                  },
                },
                test22: {
                  routerLabel: {
                    en: "Test2-2",
                    it: "Test2-2",
                    tr: "Test2-2",
                    ro: "Test2-2",
                    hu: "Test2-2",
                    ar: "Test2-2",
                    de: "Test2-2",
                    es: "Test2-2",
                    sv: "Test2-2",
                    pt: "Test2-2",
                    fi: "Test2-2",
                    pl: "Test2-2",
                    th: "Test2-2",
                    ms: "Test2-2",
                  },
                },
                test23: {
                  routerLabel: {
                    en: "Test2-3",
                    it: "Test2-3",
                    tr: "Test2-3",
                    ro: "Test2-3",
                    hu: "Test2-3",
                    ar: "Test2-3",
                    de: "Test2-3",
                    es: "Test2-3",
                    sv: "Test2-3",
                    pt: "Test2-3",
                    fi: "Test2-3",
                    pl: "Test2-3",
                    th: "Test2-3",
                    ms: "Test2-3",
                  },
                },
                test24: {
                  routerLabel: {
                    en: "Test2-4",
                    it: "Test2-4",
                    tr: "Test2-4",
                    ro: "Test2-4",
                    hu: "Test2-4",
                    ar: "Test2-4",
                    de: "Test2-4",
                    es: "Test2-4",
                    sv: "Test2-4",
                    pt: "Test2-4",
                    fi: "Test2-4",
                    pl: "Test2-4",
                    th: "Test2-4",
                    ms: "Test2-4",
                  },
                },
                test25: {
                  routerLabel: {
                    en: "Test2-5",
                    it: "Test2-5",
                    tr: "Test2-5",
                    ro: "Test2-5",
                    hu: "Test2-5",
                    ar: "Test2-5",
                    de: "Test2-5",
                    es: "Test2-5",
                    sv: "Test2-5",
                    pt: "Test2-5",
                    fi: "Test2-5",
                    pl: "Test2-5",
                    th: "Test2-5",
                    ms: "Test2-5",
                  },
                },
                test26: {
                  routerLabel: {
                    en: "Test2-6",
                    it: "Test2-6",
                    tr: "Test2-6",
                    ro: "Test2-6",
                    hu: "Test2-6",
                    ar: "Test2-6",
                    de: "Test2-6",
                    es: "Test2-6",
                    sv: "Test2-6",
                    pt: "Test2-6",
                    fi: "Test2-6",
                    pl: "Test2-6",
                    th: "Test2-6",
                    ms: "Test2-6",
                  },
                },
                divider1: {
                  routerLabel: "divider",
                },
                test27: {
                  routerLabel: {
                    en: "Test2-7",
                    it: "Test2-7",
                    tr: "Test2-7",
                    ro: "Test2-7",
                    hu: "Test2-7",
                    ar: "Test2-7",
                    de: "Test2-7",
                    es: "Test2-7",
                    sv: "Test2-7",
                    pt: "Test2-7",
                    fi: "Test2-7",
                    pl: "Test2-7",
                    th: "Test2-7",
                    ms: "Test2-7",
                  },
                },
                test28: {
                  routerLabel: {
                    en: "Test2-8",
                    it: "Test2-8",
                    tr: "Test2-8",
                    ro: "Test2-8",
                    hu: "Test2-8",
                    ar: "Test2-8",
                    de: "Test2-8",
                    es: "Test2-8",
                    sv: "Test2-8",
                    pt: "Test2-8",
                    fi: "Test2-8",
                    pl: "Test2-8",
                    th: "Test2-8",
                    ms: "Test2-8",
                  },
                },
                test29: {
                  routerLabel: {
                    en: "Test2-9",
                    it: "Test2-9",
                    tr: "Test2-9",
                    ro: "Test2-9",
                    hu: "Test2-9",
                    ar: "Test2-9",
                    de: "Test2-9",
                    es: "Test2-9",
                    sv: "Test2-9",
                    pt: "Test2-9",
                    fi: "Test2-9",
                    pl: "Test2-9",
                    th: "Test2-9",
                    ms: "Test2-9",
                  },
                },
                test210: {
                  routerLabel: {
                    en: "Test2-10",
                    it: "Test2-10",
                    tr: "Test2-10",
                    ro: "Test2-10",
                    hu: "Test2-10",
                    ar: "Test2-10",
                    de: "Test2-10",
                    es: "Test2-10",
                    sv: "Test2-10",
                    pt: "Test2-10",
                    fi: "Test2-10",
                    pl: "Test2-10",
                    th: "Test2-10",
                    ms: "Test2-10",
                  },
                },
                divider2: {
                  routerLabel: "divider",
                },
                test211: {
                  routerLabel: {
                    en: "Test2-11",
                    it: "Test2-11",
                    tr: "Test2-11",
                    ro: "Test2-11",
                    hu: "Test2-11",
                    ar: "Test2-11",
                    de: "Test2-11",
                    es: "Test2-11",
                    sv: "Test2-11",
                    pt: "Test2-11",
                    fi: "Test2-11",
                    pl: "Test2-11",
                    th: "Test2-11",
                    ms: "Test2-11",
                  },
                },
                test212: {
                  routerLabel: {
                    en: "Test2-12",
                    it: "Test2-12",
                    tr: "Test2-12",
                    ro: "Test2-12",
                    hu: "Test2-12",
                    ar: "Test2-12",
                    de: "Test2-12",
                    es: "Test2-12",
                    sv: "Test2-12",
                    pt: "Test2-12",
                    fi: "Test2-12",
                    pl: "Test2-12",
                    th: "Test2-12",
                    ms: "Test2-12",
                  },
                },
                test213: {
                  routerLabel: {
                    en: "Test2-13",
                    it: "Test2-13",
                    tr: "Test2-13",
                    ro: "Test2-13",
                    hu: "Test2-13",
                    ar: "Test2-13",
                    de: "Test2-13",
                    es: "Test2-13",
                    sv: "Test2-13",
                    pt: "Test2-13",
                    fi: "Test2-13",
                    pl: "Test2-13",
                    th: "Test2-13",
                    ms: "Test2-13",
                  },
                },
                test214: {
                  routerLabel: {
                    en: "Test2-14",
                    it: "Test2-14",
                    tr: "Test2-14",
                    ro: "Test2-14",
                    hu: "Test2-14",
                    ar: "Test2-14",
                    de: "Test2-14",
                    es: "Test2-14",
                    sv: "Test2-14",
                    pt: "Test2-14",
                    fi: "Test2-14",
                    pl: "Test2-14",
                    th: "Test2-14",
                    ms: "Test2-14",
                  },
                },
              },
            },
            divider: {
              routerLabel: "divider",
            },
            test3: {
              routerLabel: {
                en: "Test3",
                it: "Test3",
                tr: "Test3",
                ro: "Test3",
                hu: "Test3",
                ar: "Test3",
                de: "Test3",
                es: "Test3",
                sv: "Test3",
                pt: "Test3",
                fi: "Test3",
                pl: "Test3",
                th: "Test3",
                ms: "Test3",
              },
            },
            test4: {
              routerLabel: {
                en: "Test4",
                it: "Test4",
                tr: "Test4",
                ro: "Test4",
                hu: "Test4",
                ar: "Test4",
                de: "Test4",
                es: "Test4",
                sv: "Test4",
                pt: "Test4",
                fi: "Test4",
                pl: "Test4",
                th: "Test4",
                ms: "Test4",
              },
            },
          },
        },
        about: {
          routerName: "Demo2About",
          routerLabel: {
            en: "About",
            it: "Di",
            tr: "Hakkında",
            ro: "Despre",
            hu: "Ról ről",
            ar: "حول",
            de: "Um",
            es: "Sobre",
            sv: "Handla om",
            pt: "Sobre",
            fi: "Noin",
            pl: "O",
            th: "เกี่ยวกับ",
            ms: "Tentang",
          },
        },
        services: {
          routerName: "Demo2Services",
          routerLabel: {
            en: "Services",
            it: "Servizi",
            tr: "Hizmetler",
            ro: "Servicii",
            hu: "Szolgáltatások",
            ar: "خدمات",
            de: "Dienstleistungen",
            es: "Servicios",
            sv: "Tjänster",
            pt: "Serviços",
            fi: "Palvelut",
            pl: "Usługi",
            th: "บริการ",
            ms: "Perkhidmatan",
          },
        },
        test222: {
          routerLabel: {
            en: "Test222",
            it: "Test222",
            tr: "Test222",
            ro: "Test222",
            hu: "Test222",
            ar: "Test222",
            de: "Test222",
            es: "Test222",
            sv: "Test222",
            pt: "Test222",
            fi: "Test222",
            pl: "Test222",
            th: "Test222",
            ms: "Test222",
          },
        },
        contact: {
          routerName: "Demo2Contact",
          routerLabel: {
            en: "Contact",
            it: "Contatto",
            tr: "İletişim",
            ro: "Contact",
            hu: "Kapcsolatba lépni",
            ar: "اتصال",
            de: "Kontakt",
            es: "Contacto",
            sv: "Kontakt",
            pt: "Contato",
            fi: "Ottaa yhteyttä",
            pl: "Kontakt",
            th: "ติดต่อ",
            ms: "Kenalan",
          },
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
          <LanguageChooser :lang="lang" :details="langsDetails" />
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
@use "../assets/scss/abstracts/variables" as vars;
@use "../assets/scss/abstracts/mixins" as mxns;

header#header.siteHeader {
  background-color: var(--clr-brandPrimaryColor);
  color: var(--clr-brandSecondaryColor);
}
</style>
