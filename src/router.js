import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/weather",
      component: () => import("./views/Weather.vue")
    }
  ]
});

export default router;
