import { createRouter, createWebHistory } from "vue-router";
import languages from "../composables/translations/languages";

const { defaultLang } = languages();

const routes = [
  {
    path: "/",
    name: "Brand",
    component: () => import(/* webpackChunkName: "Brand" */ "../views/Brand.vue"),
    children: [
      {
        // Home
        path: ":lang",
        name: "Home",
        component: () => import(/* webpackChunkName: "BrandHome" */ "../views/home/Home.vue"),
        props: true,
      },
      {
        // About
        path: ":lang/about",
        name: "About",
        component: () => import(/* webpackChunkName: "BrandAbout" */ "../views/about/About.vue"),
        props: true,
      },
      {
        // Services
        path: ":lang/services",
        name: "Services",
        component: () => import(/* webpackChunkName: "BrandServices" */ "../views/services/Services.vue"),
        props: true,
      },
      {
        // Contact
        path: ":lang/contact",
        name: "Contact",
        component: () => import(/* webpackChunkName: "BrandContact" */ "../views/contact/Contact.vue"),
        props: true,
      },
    ],
  },
  // Thank you
  {
    path: "/:lang/thank-you",
    name: "ThankYou",
    component: () => import(/* webpackChunkName: "ThankYou" */ "../views/thankyou/ThankYou.vue"),
    props: true,
  },
  // 404
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: () => import(/* webpackChunkName: "PageNotFound" */ "../views/pagenotfound/PageNotFound.vue"),
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
    component: () => import(/* webpackChunkName: "LPs" */ "../lps/LPs.vue"),
    children: [
      /**
       * ! **Demo
       */
      {
        path: "demo/v1",
        name: "Demo",
        component: () => import(/* webpackChunkName: "DemoV1" */ "../lps/LP-demo/Demo.vue"),
        children: [
          {
            path: ":lang",
            name: "Demo-Home",
            component: () => import(/* webpackChunkName: "DemoV1Home" */ "../lps/LP-demo/views/home/Home.vue"),
            props: true,
          },
          {
            // About
            path: ":lang/about",
            name: "Demo-About",
            component: () => import(/* webpackChunkName: "DemoV1About" */ "../lps/LP-demo/views/about/About.vue"),
            props: true,
          },
          {
            // Services
            path: ":lang/services",
            name: "Demo-Services",
            component: () =>
              import(/* webpackChunkName: "DemoV1Services" */ "../lps/LP-demo/views/services/Services.vue"),
            props: true,
          },
          {
            // Contact
            path: ":lang/contact",
            name: "Demo-Contact",
            component: () => import(/* webpackChunkName: "DemoV1Contact" */ "../lps/LP-demo/views/contact/Contact.vue"),
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
        component: () => import(/* webpackChunkName: "DemoV2" */ "../lps/LP-demo2/Demo.vue"),
        children: [
          {
            path: ":lang",
            name: "Demo2Home",
            component: () => import(/* webpackChunkName: "DemoV2Home" */ "../lps/LP-demo2/views/home/Home.vue"),
            props: true,
          },
          {
            // About
            path: ":lang/about",
            name: "Demo2About",
            component: () => import(/* webpackChunkName: "DemoV2About" */ "../lps/LP-demo2/views/about/About.vue"),
            props: true,
          },
          {
            // Services
            path: ":lang/services",
            name: "Demo2Services",
            component: () =>
              import(/* webpackChunkName: "DemoV2Services" */ "../lps/LP-demo2/views/services/Services.vue"),
            props: true,
          },
          {
            // Contact
            path: ":lang/contact",
            name: "Demo2Contact",
            component: () =>
              import(/* webpackChunkName: "DemoV2Contact" */ "../lps/LP-demo2/views/contact/Contact.vue"),
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
        component: () => import(/* webpackChunkName: "Demo3" */ "../lps/LP-demo3/Demo.vue"),
        children: [
          {
            path: ":lang",
            name: "Demo3Home",
            component: () => import(/* webpackChunkName: "Demo3Home" */ "../lps/LP-demo3/views/home/Home.vue"),
            props: true,
          },
          {
            // About
            path: ":lang/about",
            name: "Demo3About",
            component: () => import(/* webpackChunkName: "Demo3About" */ "../lps/LP-demo3/views/about/About.vue"),
            props: true,
          },
          {
            // Services
            path: ":lang/services",
            name: "Demo3Services",
            component: () =>
              import(/* webpackChunkName: "Demo3Services" */ "../lps/LP-demo3/views/services/Services.vue"),
            props: true,
          },
          {
            // Contact
            path: ":lang/contact",
            name: "Demo3Contact",
            component: () => import(/* webpackChunkName: "Demo3Contact" */ "../lps/LP-demo3/views/contact/Contact.vue"),
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
