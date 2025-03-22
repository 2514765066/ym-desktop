import { createRouter, createWebHashHistory } from "vue-router";
import ManageView from "@/views/Manage/index.vue";
import TaskbarView from "@/views/Taskbar/index.vue";

import Taskbar from "@/views/Manage/Taskbar/index.vue";
import Doc from "@/views/Manage/Doc/index.vue";

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
          component: Taskbar,
        },
        {
          path: "/doc",
          component: Doc,
        },
      ],
    },
    {
      path: "/taskbar",
      component: TaskbarView,
    },
  ],
});

export default router;
