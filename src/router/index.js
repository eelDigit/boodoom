import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Text",
    name: "Text",
    component: () => import("../views/Text.vue"),
  },
  {
    path: "/Audio",
    name: "Audio",
    component: () => import("../views/Audio.vue"),
  },
  {
    path: "/Tele",
    name: "Tele",
    component: () => import("../views/Tele.vue"),
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
