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
        path: "/:lang/about",
        name: "About",
        component: () => import("../views/about/About.vue"),
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
        path: "demo",
        name: "Demo",
        component: () => import("../lps/LP-demo/Demo.vue"),
        children: [
          {
            path: ":lang",
            name: "demoHome",
            component: () => import("../lps/LP-demo/views/home/Home.vue"),
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
