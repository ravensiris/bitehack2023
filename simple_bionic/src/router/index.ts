import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/user/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/admin",
      name: "admin",
      children: [
        {path: "", component: () => import("../views/admin/HomeView.vue")}
      ]
    },
  ],
});

export default router;
