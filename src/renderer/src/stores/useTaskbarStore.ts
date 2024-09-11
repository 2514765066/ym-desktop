import { defineStore } from "pinia";
// import { TaskbarConfig } from "@type";
import { initConfig } from "@/hooks/useConfig";

export const useTaskbarStore = defineStore("taskbar", () => {
  const data = ref({
    show: true,
    move: false,
    center: true,
    height: 80,
    borderRadius: 20,
    paddingX: 20,
    iconsSize: 48,
    iconsGap: 32,
    backgroundColor: "rgba(255,255,255,0.6)",
    splitColor: "#fff",
    iconsTipPosition: 60,
    iconsTipShow: true,
    iconsShadow: false,
    removeIconKey: "Delete",
    addSplitKey: "Insert",
  });

  const get = async () => {
    const config = await api.readConfig("taskbar");

    if (config.length == 0) return;

    data.value = config;
  };

  initConfig("taskbar", data);
  get();

  //永久水平居中
  watchEffect(() => {
    electron.ipcRenderer.send("setEverCenter", "taskbar", data.value.center);
  });

  return {
    data,
    get,
  };
});
