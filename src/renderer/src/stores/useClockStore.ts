import { defineStore } from "pinia";
import { initConfig } from "@/hooks/useConfig";

export const useClockStore = defineStore("clock", () => {
  const data = ref({
    show: true,
    move: false,

    timeX: 0,
    timeY: 0,
    timeColor: "#fff",
    timeSize: 100,
    timeFamily: "",
    timeStyle: "hh:mm",

    dayX: 0,
    dayY: 100,
    dayColor: "#fff",
    daySize: 50,
    dayFamily: "",

    monthX: 50,
    monthY: 100,
    monthColor: "#fff",
    monthSize: 50,
    monthFamily: "",
    monthStyle: "english",
  });

  const get = async () => {
    const config = await api.readConfig("clock");

    if (config.length == 0) return;

    data.value = config;
  };

  initConfig("clock", data);
  get();

  return { data };
});
