import { defineStore } from "pinia";
import { Icons } from "@type";

export const useIconsStore = defineStore("icons", () => {
  const data = ref<Icons>();

  const get = async () => {
    data.value = await api.getIcons();
  };

  get();

  return {
    data,
    get,
  };
});
