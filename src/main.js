import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import axios from "axios";
// Vue.prototype.$http = axios;

// axios.defaults.baseURL = "http://127.0.0.1:8000";

import vue3GoogleLogin from "vue3-google-login";

const CLIENT_ID =
  "496074641389-eoemi6a9uu2ochbqq5dmbf7frufpjcaj.apps.googleusercontent.com";

const app = createApp(App)
  .use(vue3GoogleLogin, {
    clientId: CLIENT_ID,
  })
  .use(router);

app.config.globalProperties.http = "http://127.0.0.1:8000";

app.mount("#app");

// createApp(App)
//   .use(vue3GoogleLogin, {
//     clientId: CLIENT_ID,
//   })
//   .use(router)
//   .mount("#app").config.globalProperties.$http = () => {
//   "http://127.0.0.1:8000";
// };
