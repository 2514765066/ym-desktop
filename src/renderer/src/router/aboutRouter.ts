import { RouteRecordRaw } from "vue-router";

export default {
  path: "about",
  component: () => import("@/views/Manage/About/Index.vue"),
  children: [
    {
      path: "",
      redirect: "/manage/about/home",
    },
    {
      path: "home",
      component: () => import("@/views/Manage/About/Home.vue"),
      meta: {
        label: "关于",
      },
    },
  ],
} as RouteRecordRaw;
