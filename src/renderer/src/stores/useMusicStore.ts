import { defineStore } from "pinia";
import { initConfig } from "@/hooks/useConfig";

export const useMusicStore = defineStore("music", () => {
  const data = ref({
    show: true,
    move: false,

    height: 70,

    barWidth: 8,
    barGap: 6,
    barColor: "#fff",
    barCount: 50,
  });

  const get = async () => {
    const config = await electron.ipcRenderer.invoke("readConfig", "music");

    if (config.length == 0) return;

    data.value = config;
  };

  initConfig("music", data);
  get();

  return { data };
});
