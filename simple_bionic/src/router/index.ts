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
      path: "/reader",
      name: "reader",
      component: import("../views/user/Reader.vue")
    },
    {
      path: "/upload-text",
      name: "upload-text",
      component: import("../views/user/UploadText.vue")
    },
    {
      path: "/exercise",
      name: "exercise",
      children: [
        {
          path: "",
          component: import("../views/user/ExerciseList.vue")
        },
        {
          path: ":id",
          component: () => import("../views/user/Reader.vue")
        }
      ]
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
