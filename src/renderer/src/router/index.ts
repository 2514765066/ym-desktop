import { createRouter, createWebHashHistory } from "vue-router";
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
        {
          path: "taskbar",
          component: () => import("@/views/Manage/TaskBar/index.vue"),
          children: [
            {
              path: "",
              redirect: "/manage/taskbar/home",
            },
            {
              path: "home",
              component: () => import("@/views/Manage/TaskBar/Home/index.vue"),
              meta: {
                label: "主页",
              },
            },
            {
              path: "style",
              component: () => import("@/views/Manage/TaskBar/Style/index.vue"),
              meta: {
                label: "个性化",
              },
            },
            {
              path: "icon",
              component: () => import("@/views/Manage/TaskBar/Icon/index.vue"),
              meta: {
                label: "图标",
              },
            },
            {
              path: "shortcut",
              component: () =>
                import("@/views/Manage/TaskBar/Shortcut/index.vue"),
              meta: {
                label: "快捷键",
              },
            },
          ],
        },
        {
          path: "clock",
          component: () => import("@/views/Manage/Clock/index.vue"),
          children: [
            {
              path: "",
              redirect: "/manage/clock/home",
            },
            {
              path: "home",
              component: () => import("@/views/Manage/Clock/Home/index.vue"),
              meta: {
                label: "主页",
              },
            },
          ],
        },
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
