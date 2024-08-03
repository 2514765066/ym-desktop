import { defineStore } from "pinia";
import { TaskbarConfig } from "@type";
import { debounce } from "@/hooks/useDebounce";
import { initConfig } from "@/hooks/useConfig";

export const useTaskbarStore = defineStore("taskbar", () => {
  const { path } = useRoute();

  const data = ref<TaskbarConfig>({
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
    data.value = await api.getConfig("taskbar");
  };

  initConfig("taskbar", data);

  // if (path.includes("manage")) {
  //   const write = debounce(value => {
  //     api.writeConfig("taskbar", value);
  //   }, 300);

  //   //检测配置改动自动写入
  //   watch(
  //     data,
  //     val => {
  //       const value = JSON.parse(JSON.stringify(val));
  //       write(value);
  //       electron.ipcRenderer.send("update:config", "taskbar", value);
  //     },
  //     {
  //       deep: true,
  //     }
  //   );

  //   //监视显示隐藏
  //   watchEffect(() => {
  //     const isShow = data.value.show;
  //     electron.ipcRenderer.send("show", "taskbar", isShow);
  //   });
  // } else {
  //   electron.ipcRenderer.on("update:config", (_, value: any) => {
  //     data.value = value;
  //   });
  // }

  get();

  return {
    data,
    get,
  };
});
