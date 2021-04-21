import { createRouter, createWebHistory } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheRules from "./components/TheRules.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/game" },
    { path: "/game", component: TheHeader },
    { path: "/rules", component: TheRules },
  ],
});

export default router;
