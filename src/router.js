import { createRouter, createWebHistory } from "vue-router";
import TheRules from "./components/TheRules.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:notFound(.*)", redirect: "/rules" },
    { path: "/rules", component: TheRules },
  ],
});

export default router;
