import { defineStore } from "pinia";
import { TaskbarConfig } from "@type";

export const useTaskbarStore = defineStore("taskbar", () => {
  const data = ref<TaskbarConfig>();

  const get = async () => {
    data.value = await api.getConfig("taskbar");
  };

  get();

  return {
    data,
    get,
  };
});
