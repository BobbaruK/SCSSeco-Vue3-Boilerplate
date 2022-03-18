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
    component: () => import(/* webpackChunkName: "Brand" */ "../views/brand/Brand.vue"),
    props: true,
    children: [
      //
      // Home
      {
        path: ":lang",
        name: "Home",
        component: () => import(/* webpackChunkName: "BrandHome" */ "../views/brand/home/Home.vue"),
        props: true,
      },
      //
      // About
      {
        path: ":lang/about",
        name: "About",
        component: () => import(/* webpackChunkName: "BrandAbout" */ "../views/brand/about/About.vue"),
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
        component: () => import(/* webpackChunkName: "BrandServices" */ "../views/brand/services/Services.vue"),
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
            component: () =>
              import(
                /* webpackChunkName: "BrandServicesMusicServices" */ "../views/brand/services/musicServices/ServicesMusicServices.vue"
              ),
            props: true,
            children: [
              //
              // Beat
              {
                path: "beat",
                name: "MusicServicesBeat",
                component: () =>
                  import(
                    /* webpackChunkName: "BrandMusicServicesBeat" */ "../views/brand/services/musicServices/beat/MusicServicesBeat.vue"
                  ),
                props: true,
              },
              //
              // Verse
              {
                path: "verse",
                name: "MusicServicesVerse",
                component: () =>
                  import(
                    /* webpackChunkName: "BrandMusicServicesVerse" */ "../views/brand/services/musicServices/verse/MusicServicesVerse.vue"
                  ),
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
            component: () =>
              import(
                /* webpackChunkName: "BrandServicesWebServices" */ "../views/brand/services/webServices/ServicesWebServices.vue"
              ),
            props: true,
            children: [
              //
              // Code
              {
                path: "code",
                name: "WebServicesCode",
                component: () =>
                  import(
                    /* webpackChunkName: "BrandWebServicesCode" */ "../views/brand/services/webServices/code/WebServicesCode.vue"
                  ),
                props: true,
              },
              //
              // design
              {
                path: "design",
                name: "WebServicesDesign",
                component: () =>
                  import(
                    /* webpackChunkName: "BrandWebServicesDesign" */ "../views/brand/services/webServices/design/WebServicesDesign.vue"
                  ),
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
        component: () => import(/* webpackChunkName: "BrandContact" */ "../views/brand/contact/Contact.vue"),
        props: true,
      },
    ],
  },
  //
  // Thank you
  {
    path: "/:lang/thank-you",
    name: "ThankYou",
    component: () => import(/* webpackChunkName: "ThankYou" */ "../views/thankyou/ThankYou.vue"),
    props: true,
  },
  //
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
        component: () => import(/* webpackChunkName: "DemoV1" */ "../lps/LP-demo/Demo.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "Demo1Home",
            component: () => import(/* webpackChunkName: "DemoV1Home" */ "../lps/LP-demo/views/home/Home.vue"),
            props: true,
          },
          {
            // About
            path: ":lang/about",
            name: "Demo1About",
            component: () => import(/* webpackChunkName: "DemoV1About" */ "../lps/LP-demo/views/about/About.vue"),
            props: true,
          },
          {
            // Services
            path: ":lang/services",
            name: "Demo1Services",
            component: () =>
              import(/* webpackChunkName: "DemoV1Services" */ "../lps/LP-demo/views/services/Services.vue"),
            props: true,
          },
          {
            // Contact
            path: ":lang/contact",
            name: "Demo1Contact",
            component: () => import(/* webpackChunkName: "DemoV1Contact" */ "../lps/LP-demo/views/contact/Contact.vue"),
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
        component: () => import(/* webpackChunkName: "DemoV2" */ "../lps/LP-demo2/Demo.vue"),
        props: true,
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
        // redirect
        path: "demo3/",
        redirect: { name: "Demo3Home", params: { lang: `${defaultLang}` } },
      },
      {
        path: "demo3",
        name: "Demo3",
        component: () => import(/* webpackChunkName: "Demo3" */ "../lps/LP-demo3/Demo.vue"),
        props: true,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
