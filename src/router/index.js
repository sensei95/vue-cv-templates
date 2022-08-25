import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
    name: "home",
  },
  {
    path: "/templates/1",
    component: () => import("../pages/Template1.vue"),
    name: "template.1",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
