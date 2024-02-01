import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import vue3GoogleLogin from "vue3-google-login";

// production
// const CLIENT_ID =
//   "680808063415-hpjnhrefo7bgnc2qqjvvbdc1fd8j7ljn.apps.googleusercontent.com";
// 680808063415 - gllqvjohfqmg9vf8u1ka9pklm4ufsel6.apps.googleusercontent.com;
// back end kuy dinas
const CLIENT_ID =
  "680808063415-gllqvjohfqmg9vf8u1ka9pklm4ufsel6.apps.googleusercontent.com";

// development
// const CLIENT_ID =
//   "496074641389-eoemi6a9uu2ochbqq5dmbf7frufpjcaj.apps.googleusercontent.com";

const app = createApp(App)
  .use(vue3GoogleLogin, {
    clientId: CLIENT_ID,
  })
  .use(router);

// app.config.globalProperties.http = "https://backend.kuydinas.id";
app.config.globalProperties.http = "http://127.0.0.1:8001";

app.mount("#app");

// createApp(App)
//   .use(vue3GoogleLogin, {
//     clientId: CLIENT_ID,
//   })
//   .use(router)
//   .mount("#app").config.globalProperties.$http = () => {
//   "http://127.0.0.1:8000";
// };
