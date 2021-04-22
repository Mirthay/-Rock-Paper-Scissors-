import { createRouter, createWebHistory } from "vue-router";
import TheRules from "./components/TheRules.vue";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/game" },
    { path: "/game", component: App },
    { path: "/:notFound(.*)", redirect: "/game" },
    { path: "/rules", component: TheRules },
  ],
});

export default router;
