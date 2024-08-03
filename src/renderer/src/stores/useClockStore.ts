import { defineStore } from "pinia";
import { ClockConfig } from "@type";
import { debounce } from "@/hooks/useDebounce";
import { initConfig } from "@/hooks/useConfig";

export const useClockStore = defineStore("clock", () => {
  const { path } = useRoute();

  const data = ref<ClockConfig>({
    show: false,
    move: false,
    color: "",
    fontSize: 0,
    fontFamily: "",
  });

  const get = async () => {
    data.value = await api.getConfig("clock");
  };

  if (path.includes("manage")) {
    const write = debounce(value => {
      api.writeConfig("clock", value);
    }, 300);

    //检测配置改动自动写入
    watch(
      data,
      val => {
        const value = JSON.parse(JSON.stringify(val));
        write(value);
        electron.ipcRenderer.send("update:config", "clock", value);
      },
      {
        deep: true,
      }
    );

    //监视显示隐藏
    watchEffect(() => {
      const isShow = data.value.show;
      electron.ipcRenderer.send("show", "clock", isShow);
    });
  } else {
    electron.ipcRenderer.on("update:config", (_, value: any) => {
      data.value = value;
    });
  }

  get();

  return { data };
});
