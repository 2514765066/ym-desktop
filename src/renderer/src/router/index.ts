import { createRouter, createWebHashHistory } from "vue-router";
import ManageView from "@/views/Manage/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/manage",
      component: ManageView,
      children: [
        {
          path: "",
          redirect: "/manage/taskbar",
        },
        {
          path: "taskbar",
          component: () => import("@/views/Manage/TaskBar/index.vue"),
        },
      ],
    },
  ],
});

export default router;
