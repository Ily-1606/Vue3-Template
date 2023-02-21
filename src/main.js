import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);
Promise.all([import("./utils/FontAwesome")])
  .then(([{ default: FontAwesome }]) => {
    app.use(FontAwesome.FaConfig, FontAwesome.icons);
    app.component("FontAwesomeIcon", FontAwesome.VueFontAwesome);
  })
  .then(() => {
    app.mount("#app");
  });
