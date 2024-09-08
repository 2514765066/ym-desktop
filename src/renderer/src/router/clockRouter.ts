import { RouteRecordRaw } from "vue-router";

export default {
  path: "clock",
  component: () => import("@/views/Manage/Clock/index.vue"),
  children: [
    {
      path: "",
      redirect: "/manage/clock/home",
    },
    {
      path: "home",
      component: () => import("@/views/Manage/Clock/Home.vue"),
      meta: {
        label: "主页",
      },
    },
    {
      path: "time",
      component: () => import("@/views/Manage/Clock/Time.vue"),
      meta: {
        label: "时间",
      },
    },
    {
      path: "day",
      component: () => import("@/views/Manage/Clock/Day.vue"),
      meta: {
        label: "日期",
      },
    },
    {
      path: "month",
      component: () => import("@/views/Manage/Clock/Month.vue"),
      meta: {
        label: "月份",
      },
    },
  ],
} as RouteRecordRaw;
