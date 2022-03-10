import { createRouter, createWebHistory } from "vue-router";
import languages from "../composables/translations/languages";

const { defaultLang } = languages();

const routes = [
  {
    //? Home redirect
    path: "/",
    name: "index",
    redirect: `/${defaultLang}`,
  },
  {
    //? Home
    path: "/:lang",
    name: "Home",
    component: () => import("../views/home/Home.vue"),
    props: true,
  },
  {
    //? About redirect
    path: "/about",
    redirect: `/${defaultLang}/about`,
  },
  {
    //? About
    path: "/:lang/about",
    name: "About",
    component: () => import("../views/about/About.vue"),
    props: true,
  },
  {
    //? Thank you redirect
    path: "/thank-you",
    redirect: `/${defaultLang}/thank-you`,
  },
  {
    //? Thank you
    path: "/:lang/thank-you",
    name: "ThankYou",
    component: () => import("../views/ThankYou.vue"),
    props: true,
  },
  //?
  //? LP's
  //?
  {
    //? Signals Blue redirect
    path: "/lp/demolp/",
    name: "demoLPIndex",
    redirect: `/lp/demolp/${defaultLang}`,
  },
  {
    //? Signals Blue
    path: "/lp/demolp/:lang",
    name: "demoLP",
    component: () => import("../lp/demoLP/views/DemoLP.vue"),
    props: true,
  },
  {
    //? 404
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: () => import("../views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
