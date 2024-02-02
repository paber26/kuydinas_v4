import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
  },
  {
    path: "/profil",
    name: "profil",
    component: () => import("../views/ProfilView.vue"),
  },
  {
    path: "/profil/edit",
    name: "profiledit",
    component: () => import("../views/ProfilEdit.vue"),
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
    component: () => import("../views/MateriSKD/IndexView.vue"),
  },
  {
    path: "/materiskd/tambah",
    name: "materiskdtambah",
    component: () => import("../views/MateriSKD/TambahView.vue"),
  },
  {
    path: "/materiskd/edit/:id",
    name: "materiskdedit",
    component: () => import("../views/MateriSKD/EditView.vue"),
    props: true,
  },
  {
    path: "/materiskd/lihat/:id",
    name: "materiskdlihat",
    component: () => import("../views/MateriSKD/LihatView.vue"),
    props: true,
  },
  {
    path: "/akun",
    name: "akun",
    component: () => import("../views/AkunView.vue"),
  },
  {
    path: "/testimoni",
    name: "testimoni",
    component: () => import("../views/TestimoniView.vue"),
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
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
