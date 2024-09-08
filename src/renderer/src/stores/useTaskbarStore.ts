import { defineStore } from "pinia";
// import { TaskbarConfig } from "@type";
import { initConfig } from "@/hooks/useConfig";

export const useTaskbarStore = defineStore("taskbar", () => {
  const data = ref({
    show: false,
    move: false,
    height: 0,
    borderRadius: 0,
    paddingX: 0,
    iconsSize: 0,
    iconsGap: 0,
    backgroundColor: "",
    splitColor: "",
    iconsTipPosition: 0,
    iconsTipShow: false,
    iconsShadow: false,
    removeIconKey: "",
    addSplitKey: "",
  });

  const get = async () => {
    data.value = await api.readConfig("taskbar");
  };

  initConfig("taskbar", data);
  get();

  return {
    data,
    get,
  };
});
