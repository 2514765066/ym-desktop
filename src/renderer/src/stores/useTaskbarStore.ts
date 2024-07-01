import { defineStore } from "pinia";
import { TaskbarConfig } from "@type";

export const useTaskbarStore = defineStore("taskbar", () => {
  const data = ref<TaskbarConfig>({
    show: false,
    x: 0,
    y: 0,
    height: 60,
    borderRadius: 30,
    iconsSize: 30,
    backgroundColor: "rgba(34, 34, 34, 0.95)",
    icons: [],
  });

  const get = async () => {
    data.value = await api.getConfig("taskbar");
  };

  // get();

  return {
    data,
    get,
  };
});
