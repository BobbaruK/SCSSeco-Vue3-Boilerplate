import { createRouter, createWebHistory } from "vue-router";
import languages from "../composables/translations/languages";

const { defaultLang } = languages();

const routes = [
  {
    // redirect
    path: "/",
    name: "HomeRedirect",
    redirect: { name: "Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "/",
    name: "Brand",
    component: () => import("../views/brand/Brand.vue"),
    props: true,
    children: [
      //
      // Home
      {
        path: ":lang",
        name: "Home",
        component: () => import("../views/brand/home/Home.vue"),
        props: true,
      },
      //
      // About
      {
        path: ":lang/about",
        name: "About",
        component: () => import("../views/brand/about/About.vue"),
        props: true,
      },
      //
      // Services
      {
        // redirect
        path: ":lang/services",
        redirect: { name: "MusicServicesBeat" },
      },
      {
        path: ":lang/services",
        name: "Services",
        component: () => import("../views/brand/services/Services.vue"),
        props: true,
        children: [
          //
          // Music
          {
            // redirect
            path: "music",
            redirect: { name: "MusicServicesBeat" },
          },
          {
            path: "music",
            name: "MusicServices",
            component: () => import("../views/brand/services/musicServices/ServicesMusicServices.vue"),
            props: true,
            children: [
              //
              // Beat
              {
                path: "beat",
                name: "MusicServicesBeat",
                component: () => import("../views/brand/services/musicServices/beat/MusicServicesBeat.vue"),
                props: true,
              },
              //
              // Verse
              {
                path: "verse",
                name: "MusicServicesVerse",
                component: () => import("../views/brand/services/musicServices/verse/MusicServicesVerse.vue"),
                props: true,
              },
            ],
          },
          //
          // Web
          {
            // redirect
            path: "web",
            redirect: { name: "WebServicesCode" },
          },
          {
            path: "web",
            name: "WebServices",
            component: () => import("../views/brand/services/webServices/ServicesWebServices.vue"),
            props: true,
            children: [
              //
              // Code
              {
                path: "code",
                name: "WebServicesCode",
                component: () => import("../views/brand/services/webServices/code/WebServicesCode.vue"),
                props: true,
              },
              //
              // design
              {
                path: "design",
                name: "WebServicesDesign",
                component: () => import("../views/brand/services/webServices/design/WebServicesDesign.vue"),
                props: true,
              },
            ],
          },
        ],
      },
      //
      // Contact
      {
        path: ":lang/contact",
        name: "Contact",
        component: () => import("../views/brand/contact/Contact.vue"),
        props: true,
      },
    ],
  },
  //
  // Thank you
  {
    path: "/:lang/thank-you",
    name: "ThankYou",
    component: () => import("../views/thankyou/ThankYou.vue"),
    props: true,
  },
  //
  // 404
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: () => import("../views/pagenotfound/PageNotFound.vue"),
  },
  /**
   * ? **LPs
   */
  {
    // /lp redirect
    path: "/lp",
    redirect: `/${defaultLang}`,
  },
  {
    path: "/lp",
    name: "LPs",
    component: () => import("../lps/LPs.vue"),
    props: true,
    children: [
      /**
       * ! **Demo
       */
      {
        // redirect
        path: "demo/",
        redirect: { name: "Demo1Home", params: { lang: `${defaultLang}` } },
      },
      {
        // redirect
        path: "demo/v1",
        redirect: { name: "Demo1Home", params: { lang: `${defaultLang}` } },
      },
      {
        path: "demo/v1",
        name: "Demo",
        component: () => import("../lps/LP-demo/Demo.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "Demo1Home",
            component: () => import("../lps/LP-demo/views/home/Home.vue"),
            props: true,
          },
          {
            // About
            path: ":lang/about",
            name: "Demo1About",
            component: () => import("../lps/LP-demo/views/about/About.vue"),
            props: true,
          },
          {
            // Services
            path: ":lang/services",
            name: "Demo1Services",
            component: () => import("../lps/LP-demo/views/services/Services.vue"),
            props: true,
          },
          {
            // Contact
            path: ":lang/contact",
            name: "Demo1Contact",
            component: () => import("../lps/LP-demo/views/contact/Contact.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **Demo2
       */
      {
        // /lp redirect
        path: "demo/v2",
        redirect: { name: "Demo2Home", params: { lang: `${defaultLang}` } },
      },
      {
        path: "demo/v2",
        name: "Demo2",
        component: () => import("../lps/LP-demo2/Demo.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "Demo2Home",
            component: () => import("../lps/LP-demo2/views/home/Home.vue"),
            props: true,
          },
          {
            // About
            path: ":lang/about",
            name: "Demo2About",
            component: () => import("../lps/LP-demo2/views/about/About.vue"),
            props: true,
          },
          {
            // Services
            path: ":lang/services",
            name: "Demo2Services",
            component: () => import("../lps/LP-demo2/views/services/Services.vue"),
            props: true,
          },
          {
            // Contact
            path: ":lang/contact",
            name: "Demo2Contact",
            component: () => import("../lps/LP-demo2/views/contact/Contact.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **Demo3
       */
      {
        // redirect
        path: "demo3/",
        redirect: { name: "Demo3Home", params: { lang: `${defaultLang}` } },
      },
      {
        path: "demo3",
        name: "Demo3",
        component: () => import("../lps/LP-demo3/Demo.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "Demo3Home",
            component: () => import("../lps/LP-demo3/views/home/Home.vue"),
            props: true,
          },
          {
            // About
            path: ":lang/about",
            name: "Demo3About",
            component: () => import("../lps/LP-demo3/views/about/About.vue"),
            props: true,
          },
          {
            // Services
            path: ":lang/services",
            name: "Demo3Services",
            component: () => import("../lps/LP-demo3/views/services/Services.vue"),
            props: true,
          },
          {
            // Contact
            path: ":lang/contact",
            name: "Demo3Contact",
            component: () => import("../lps/LP-demo3/views/contact/Contact.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **Redirect to old amazon
       */
      {
        path: "amazon/",
        name: "AmazonOld",
        component: () => import("../lps/old/amazon_old.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
