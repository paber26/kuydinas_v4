import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import DashboardView from "../views/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
  },
  {
    path: "/tryoutskd",
    name: "tryoutskd",
    component: () => import("../views/TryoutSKDView.vue"),
  },
  {
    path: "/tryoutskd/tambah",
    name: "tryoutskdtambah",
    component: () => import("../views/TryoutSKDTambah.vue"),
  },
  {
    path: "/tryoutskd/edit/:id",
    name: "tryoutskdedit",
    component: () => import("../views/TryoutSKDEdit.vue"),
  },
  {
    path: "/materiskd",
    name: "materiskd",
    component: () => import("../views/TryoutSKDView.vue"),
  },
  {
    path: "/akun",
    name: "akun",
    component: () => import("../views/AkunView.vue"),
  },
  {
    path: "/testimoni",
    name: "testimoni",
    component: () => import("../views/AkunView.vue"),
  },
  {
    path: "/inbox",
    name: "inbox",
    component: () => import("../views/InboxView.vue"),
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
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
