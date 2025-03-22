import { defineStore } from "pinia";
import { TaskbarOption } from "@type";

export const useTaskbarStore = defineStore("taskbar", () => {
  //任务栏配置项
  const taskbarOption = ref<TaskbarOption>({
    show: true,
    move: true,

    backgroundColor: "rgba(255,255,255,0.4)",
    splitColor: "#fff",
    height: 80,
    borderRadius: 10,
    paddingX: 24,

    iconShadow: false,
    iconTipShow: true,
    iconTipFontColor: "#fff",
    iconTipBackgroundColor: "#1D1D1D",
    iconSize: 40,
    iconGap: 24,

    removeIconKey: "Delete",
    addSplitKey: "Insert",
  });

  //监听主窗口发送的任务栏配置项
  ipcRenderer.on("toTaskbar", (_, data) => {
    if (!data) return;

    taskbarOption.value = JSON.parse(data);
  });

  return {
    taskbarOption,
  };
});
