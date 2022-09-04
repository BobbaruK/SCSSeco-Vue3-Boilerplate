# SCSSeco Vue3 Navbar

## How to use

`<Navbar />` needs 2 props:

- `:lang` (String) - limba in care va fi afisat meniul;
- `:details` (Object) - detaliile meniului. `menuDetails` tre sa fie un _Object_ care sa aiba urmatoarele:

  - `menuItems` (Object) fiecare menu item tre sa fie un _Object_. <br /> fiecare key-value pair din `menuItems` trebuie sa aiba:

    1.  `routerName` (String): numele din `routes`. acesta va fi linkul elementului din menu. Daca acesta lipseste nu va fi link va fi span;
    2.  `routerLabel` (Object): este un _Object_ cu textul care va aparea in meniu in cate limbi ai nevoie. Daca valoare lui `routerLabel` este `divider` atunci se va printa un `<hr />`;
        ```javascript
        const menuDetails = {
          menuItems: {
            home: {
              routerName: "Home",
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
          },
        };
        ```
    3.  `children` (Object): daca exista acest _key_ linkul va fi span si va avea copiii din _value_. `children` este un _Object_ functioneaza ca `menuItems`;
        ```javascript
        const menuDetails = {
          menuItems: {
            services: {
              routerName: "Services",
              routerLabel: {...},
              children: {
                music: {
                  routerName: "MusicServices",
                  routerLabel: {...},
                  children: {
                    beat: {
                      routerName: "MusicServicesBeat",
                      routerLabel: {...},
                    },
                    verse: {
                      routerName: "MusicServicesVerse",
                      routerLabel: {...},
                    },
                  },
                },
                web: {
                  routerName: "WebServices",
                  routerLabel: {...},
                  children: {
                    beat: {
                      routerName: "WebServicesCode",
                      routerLabel: {...},
                    },
                    verse: {
                      routerName: "WebServicesDesign",
                      routerLabel: {...},
                    },
                  },
                },
                divider: {
                  routerLabel: "divider",
                },
                about: {
                  routerName: "About",
                  routerLabel: {...},
                },
              },
            },
          },
        };
        ```

## Example

Header.vue

```javascript
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
          routerLabel: {
            en: "Home",
          },
        },
        test: {
          routerLabel: {
            en: "Test",
          },
          children: {
            test1: {
              routerLabel: {
                en: "Test1",
              },
            },
            test2: {
              routerLabel: {
                en: "Test2",
              },
              children: {
                test21: {
                  routerLabel: {
                    en: "Test2-1",
                  },
                },
                test22: {
                  routerLabel: {
                    en: "Test2-2",
                  },
                },
                test23: {
                  routerLabel: {
                    en: "Test2-3",
                  },
                },
                test24: {
                  routerLabel: {
                    en: "Test2-4",
                  },
                },
                test25: {
                  routerLabel: {
                    en: "Test2-5",
                  },
                },
                test26: {
                  routerLabel: {
                    en: "Test2-6",
                  },
                },
                test27: {
                  routerLabel: {
                    en: "Test2-7",
                  },
                },
                test28: {
                  routerLabel: {
                    en: "Test2-8",
                  },
                },
                test29: {
                  routerLabel: {
                    en: "Test2-9",
                  },
                },
                test210: {
                  routerLabel: {
                    en: "Test2-10",
                  },
                },
                test211: {
                  routerLabel: {
                    en: "Test2-11",
                  },
                },
                test212: {
                  routerLabel: {
                    en: "Test2-12",
                  },
                },
                test213: {
                  routerLabel: {
                    en: "Test2-13",
                  },
                },
                test214: {
                  routerLabel: {
                    en: "Test2-14",
                  },
                },
              },
            },
            test3: {
              routerLabel: {
                en: "Test3",
              },
            },
            test4: {
              routerLabel: {
                en: "Test4",
              },
            },
          },
        },
        about: {
          routerName: "About",
          routerLabel: {
            en: "About",
          },
        },
        services: {
          routerName: "Services",
          routerLabel: {
            en: "Services",
          },
          children: {
            music: {
              routerName: "MusicServices",
              routerLabel: {
                en: "Music",
              },
              children: {
                beat: {
                  routerName: "MusicServicesBeat",
                  routerLabel: {
                    en: "Beat",
                  },
                },
                verse: {
                  routerName: "MusicServicesVerse",
                  routerLabel: {
                    en: "Lyrics",
                  },
                },
              },
            },
            web: {
              routerName: "WebServices",
              routerLabel: {
                en: "Web",
              },
              children: {
                beat: {
                  routerName: "WebServicesCode",
                  routerLabel: {
                    en: "Code",
                  },
                },
                verse: {
                  routerName: "WebServicesDesign",
                  routerLabel: {
                    en: "Design",
                  },
                },
              },
            },
            divider: {
              routerLabel: "divider",
            },
            about: {
              routerName: "About",
              routerLabel: {
                en: "About",
              },
            },
          },
        },
        test222: {
          routerLabel: {
            en: "Test222",
          },
        },
        contact: {
          routerName: "Contact",
          routerLabel: {
            en: "Contact",
          },
        },
      },
    };

    return { menuDetails };
  },
};
```

```html
<Navbar :lang="lang" :details="menuDetails" />
```
