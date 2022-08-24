import translationsGlossary from "../composables/translations/translationsGlossary.js";

const breadCrumbs = {
  Brand: {
    Home: [
      {
        label: translationsGlossary.h.home,
        href: "Home",
      },
    ],
    AboutRoot: {
      About: [
        {
          label: translationsGlossary.h.home,
          href: "Home",
        },
        {
          label: translationsGlossary.a.about,
          href: "About",
        },
      ],
      AboutWork: [
        {
          label: translationsGlossary.h.home,
          href: "Home",
        },
        {
          label: translationsGlossary.a.about,
          href: "About",
        },
        {
          label: translationsGlossary.w.work,
          href: "AboutWork",
        },
      ],
    },
    Services: {
      Music: {
        Beat: [
          {
            label: translationsGlossary.h.home,
            href: "Home",
          },
          {
            label: translationsGlossary.s.services,
          },
          {
            label: translationsGlossary.m.music,
          },
          {
            label: translationsGlossary.i.instrumental,
          },
        ],
        Verse: [
          {
            label: translationsGlossary.h.home,
            href: "Home",
          },
          {
            label: translationsGlossary.s.services,
          },
          {
            label: translationsGlossary.m.music,
          },
          {
            label: translationsGlossary.v.verse,
          },
        ],
      },
      Web: {
        Code: [
          {
            label: translationsGlossary.h.home,
            href: "Home",
          },
          {
            label: translationsGlossary.s.services,
          },
          {
            label: translationsGlossary.w.web,
          },
          {
            label: translationsGlossary.c.code,
          },
        ],
        Design: [
          {
            label: translationsGlossary.h.home,
            href: "Home",
          },
          {
            label: translationsGlossary.s.services,
          },
          {
            label: translationsGlossary.w.web,
          },
          {
            label: translationsGlossary.d.design,
          },
        ],
      },
    },
    Contact: [
      {
        label: translationsGlossary.h.home,
        href: "Home",
      },
      {
        label: translationsGlossary.c.contact,
        href: "Contact",
      },
    ],
  },
  LP: {
    Demo: {
      Home: [
        {
          label: translationsGlossary.h.home,
          href: "Demo1Home",
        },
      ],
      AboutRoot: {
        About: [
          {
            label: translationsGlossary.h.home,
            href: "Demo1Home",
          },
          {
            label: translationsGlossary.a.about,
            href: "Demo1About",
          },
        ],
        LP: [
          {
            label: translationsGlossary.h.home,
            href: "Demo1Home",
          },
          {
            label: translationsGlossary.a.about,
            href: "Demo1About",
          },
          {
            label: {
              en: "About LP",
              it: "Di LP",
              tr: "Hakkında LP",
              ro: "Despre LP",
              hu: "Ról ről LP",
              ar: "عن LP",
              de: "Etwa LP",
              es: "Acerca de LP",
              sv: "Handla om LP",
              pt: "Cerca de LP",
              fi: "Noin LP",
              pl: "O LP",
              th: "เกี่ยวกับ LP",
              ms: "Tentang LP",
            },
            href: "Demo1AboutLP",
          },
        ],
      },
      Services: [
        {
          label: translationsGlossary.h.home,
          href: "Demo1Home",
        },
        {
          label: translationsGlossary.s.services,
          href: "Demo1Services",
        },
      ],
      Contact: [
        {
          label: translationsGlossary.h.home,
          href: "Demo1Home",
        },
        {
          label: translationsGlossary.c.contact,
          href: "Demo1Contact",
        },
      ],
    },
  },
};

export default breadCrumbs;
