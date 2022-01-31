import { createRouter, createWebHistory } from "vue-router";
import languages from "../composables/translations/languages";

const { defaultLang } = languages();

const routes = [
  {
    // Home redirect
    path: "/",
    name: "index",
    redirect: `/${defaultLang}`,
  },
  {
    // Home
    path: "/:lang",
    name: "Home",
    component: () => import("../views/home/Home.vue"),
    props: true,
    // meta: {
    //   title: {
    //     en: "Home",
    //     it: "Casa",
    //     tr: "Ev",
    //     ro: "Acasă",
    //     hu: "Itthon",
    //     ar: "مسكن",
    //     de: "Heim",
    //     es: "Casa",
    //     sv: "Hem",
    //     pt: "Casa",
    //     fi: "Koti",
    //     pl: "Dom",
    //   },
    // },
  },
  {
    // About redirect
    path: "/about",
    redirect: `/${defaultLang}/about`,
  },
  {
    // About
    path: "/:lang/about",
    name: "About",
    component: () => import("../views/about/About.vue"),
    props: true,
  },
  {
    // Thank you redirect
    path: "/thank-you",
    redirect: `/${defaultLang}/thank-you`,
  },
  {
    // Thank you
    path: "/:lang/thank-you",
    name: "ThankYou",
    component: () => import("../views/thankyou/ThankYou.vue"),
    props: true,
  },
  {
    // Lang is missing
    path: `/:lang/lang-404`,
    name: "LanguageNotFound",
    component: () => import("../views/LanguageNotFound.vue"),
    props: true,
  },
  {
    // 404
    path: "/:lang/:catchAll(.*)",
    name: "PageNotFound",
    component: () => import("../views/PageNotFound.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title}`;
//   next();
// });

export default router;
