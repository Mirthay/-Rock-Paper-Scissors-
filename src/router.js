import { createRouter, createWebHistory } from "vue-router";
import TheRules from "./components/TheRules.vue";
import GameItems from "./components/GameItems.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/game" },
    { path: "/game", component: GameItems },
    { path: "/:notFound(.*)", redirect: "/game" },
    { path: "/rules", component: TheRules },
  ],
});

export default router;
