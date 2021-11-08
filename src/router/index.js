import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Lire",
    name: "Lire",
    component: () => import("../views/Lire.vue"),
  },
  {
    path: "/Entendre",
    name: "Entendre",
    component: () => import("../views/Entendre.vue"),
  },
  {
    path: "/Voir",
    name: "Voir",
    component: () => import("../views/Voir.vue"),
  },
  {
    path: "/Abonne",
    name: "Abonne",
    component: () => import("../views/Abonne.vue"),
  },
  {
    path: "/Pro",
    name: "Pro",
    component: () => import("../views/Pro.vue"),
  },
  {
    path: "/LireHistoire",
    name: "LireHistoire",
    component: () => import("../views/LireHistoire.vue"),
  },
  {
    path: "/Actualite",
    name: "Actualite",
    component: () => import("../views/Actualite.vue"),
  },
  {
    path: "/Art",
    name: "Art",
    component: () => import("../views/Art.vue"),
  },
  {
    path: "/Sport",
    name: "Sport",
    component: () => import("../views/Sport.vue"),
  },
  {
    path: "/Bizness",
    name: "Bizness",
    component: () => import("../views/Bizness.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
