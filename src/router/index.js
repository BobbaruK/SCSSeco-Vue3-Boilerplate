import { createRouter, createWebHistory } from "vue-router";
import languages from "../composables/translations/languages";

const { defaultLang } = languages();

const routes = [
  {
    path: "/",
    name: "Brand",
    component: () => import("../views/Brand.vue"),
    children: [
      {
        // Home
        path: ":lang",
        name: "Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
      {
        // About
        path: ":lang/about",
        name: "About",
        component: () => import("../views/about/About.vue"),
        props: true,
      },
      {
        // Services
        path: ":lang/services",
        name: "Services",
        component: () => import("../views/services/Services.vue"),
        props: true,
      },
      {
        // Contact
        path: ":lang/contact",
        name: "Contact",
        component: () => import("../views/contact/Contact.vue"),
        props: true,
      },
    ],
  },
  // Thank you
  {
    path: "/:lang/thank-you",
    name: "ThankYou",
    component: () => import("../views/thankyou/ThankYou.vue"),
    props: true,
  },
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
    children: [
      /**
       * ! **Demo
       */
      {
        path: "demo/v1",
        name: "Demo",
        component: () => import("../lps/LP-demo/Demo.vue"),
        children: [
          {
            path: ":lang",
            name: "Demo-Home",
            component: () => import("../lps/LP-demo/views/home/Home.vue"),
            props: true,
          },
          {
            // About
            path: ":lang/about",
            name: "Demo-About",
            component: () => import("../lps/LP-demo/views/about/About.vue"),
            props: true,
          },
          {
            // Services
            path: ":lang/services",
            name: "Demo-Services",
            component: () => import("../lps/LP-demo/views/services/Services.vue"),
            props: true,
          },
          {
            // Contact
            path: ":lang/contact",
            name: "Demo-Contact",
            component: () => import("../lps/LP-demo/views/contact/Contact.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **Demo2
       */
      {
        path: "demo/v2",
        name: "Demo2",
        component: () => import("../lps/LP-demo2/Demo.vue"),
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
        path: "demo3",
        name: "Demo3",
        component: () => import("../lps/LP-demo3/Demo.vue"),
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
    ],
  },

  /**
   ** Demo LP
   */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
