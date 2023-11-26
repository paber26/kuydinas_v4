import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import vue3GoogleLogin from "vue3-google-login";

const CLIENT_ID =
  "496074641389-eoemi6a9uu2ochbqq5dmbf7frufpjcaj.apps.googleusercontent.com";

createApp(App)
  .use(vue3GoogleLogin, {
    clientId: CLIENT_ID,
  })
  .use(router)
  .mount("#app");
