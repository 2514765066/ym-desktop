import { defineStore } from "pinia";
import { initConfig } from "@/hooks/useConfig";

export const useClockStore = defineStore("clock", () => {
  const data = ref({
    show: false,
    move: false,

    timeX: 0,
    timeY: 0,
    timeColor: "",
    timeSize: 0,
    timeFamily: "",
    timeStyle: "",

    dayX: 0,
    dayY: 0,
    dayColor: "",
    daySize: 0,
    dayFamily: "",

    monthX: 0,
    monthY: 0,
    monthColor: "",
    monthSize: 0,
    monthFamily: "",
    monthStyle: "",
  });

  const get = async () => {
    data.value = await api.readConfig("clock");
  };

  initConfig("clock", data);
  get();

  return { data };
});
