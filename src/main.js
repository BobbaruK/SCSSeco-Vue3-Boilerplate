import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/scsseco_app.scss";

createApp(App).use(router).mount("#siteWrapper");
