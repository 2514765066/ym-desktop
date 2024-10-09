import { RouteRecordRaw } from "vue-router";

export default {
  path: "taskbar",
  component: () => import("@/views/Manage/TaskBar/Index.vue"),
  children: [
    {
      path: "",
      redirect: "/manage/taskbar/home",
    },
    {
      path: "home",
      component: () => import("@/views/Manage/TaskBar/Home.vue"),
      meta: {
        label: "主页",
      },
    },
    {
      path: "style",
      component: () => import("@/views/Manage/TaskBar/Style.vue"),
      meta: {
        label: "个性化",
      },
    },
    {
      path: "icon",
      component: () => import("@/views/Manage/TaskBar/Icon.vue"),
      meta: {
        label: "图标",
      },
    },
    {
      path: "shortcut",
      component: () => import("@/views/Manage/TaskBar/Shortcut.vue"),
      meta: {
        label: "快捷键",
      },
    },
  ],
} as RouteRecordRaw;
