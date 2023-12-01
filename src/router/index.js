import { createRouter, createWebHistory } from "vue-router";
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
    path: "/tryoutskd/lihat/:eid",
    name: "tryoutskdlihat",
    component: () => import("../views/TryoutSKDLihat.vue"),
    props: true,
  },
  {
    path: "/tryoutskd/edit/:eid",
    name: "tryoutskdedit",
    component: () => import("../views/TryoutSKDEdit.vue"),
    props: true,
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
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
