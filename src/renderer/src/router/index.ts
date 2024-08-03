import { createRouter, createWebHashHistory } from "vue-router";
import clockRouter from "./clockRouter";
import taskbarRouter from "./taskbarRouter";
import ManageView from "@/views/Manage/index.vue";
import TaskbarView from "@/views/Taskbar/index.vue";
import ClockView from "@/views/Clock/index.vue";

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
        taskbarRouter,
        clockRouter,
      ],
    },
    {
      path: "/taskbar",
      component: TaskbarView,
    },
    {
      path: "/clock",
      component: ClockView,
    },
  ],
});

export default router;
