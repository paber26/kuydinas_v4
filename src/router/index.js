import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import DashboardView from "../views/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
  },
  {
    path: "/akun",
    name: "akun",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AkunView.vue"),
  },
  {
    path: "/tryoutskd",
    name: "tryoutskd",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TryoutSKDView.vue"),
  },
  {
    path: "/inbox",
    name: "inbox",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InboxView.vue"),
  },
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
