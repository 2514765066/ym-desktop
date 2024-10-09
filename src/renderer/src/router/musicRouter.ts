import { RouteRecordRaw } from "vue-router";

export default {
  path: "music",
  component: () => import("@/views/Manage/Music/Index.vue"),
  children: [
    {
      path: "",
      redirect: "/manage/music/home",
    },
    {
      path: "home",
      component: () => import("@/views/Manage/Music/Home.vue"),
      meta: {
        label: "主页",
      },
    },
    {
      path: "style",
      component: () => import("@/views/Manage/Music/Style.vue"),
      meta: {
        label: "样式",
      },
    },
    {
      path: "bar",
      component: () => import("@/views/Manage/Music/Bar.vue"),
      meta: {
        label: "音乐条",
      },
    },
  ],
} as RouteRecordRaw;
