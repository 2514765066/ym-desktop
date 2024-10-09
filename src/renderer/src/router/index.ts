import { createRouter, createWebHashHistory } from "vue-router";
import clockRouter from "./clockRouter";
import taskbarRouter from "./taskbarRouter";
import musicRouter from "./musicRouter";
import ManageView from "@/views/Manage/Index.vue";
import TaskbarView from "@/views/Taskbar/Index.vue";
import ClockView from "@/views/Clock/Index.vue";
import MusicView from "@/views/Music/Index.vue";

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
        musicRouter,
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
    {
      path: "/music",
      component: MusicView,
    },
  ],
});

export default router;
