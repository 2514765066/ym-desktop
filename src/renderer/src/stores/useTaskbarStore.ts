import { defineStore } from "pinia";
import { TaskbarConfig } from "@type";

export const useTaskbarStore = defineStore("taskbar", () => {
  const { path } = useRoute();

  const data = ref<TaskbarConfig>({
    show: false,
    move: true,
    height: 60,
    borderRadius: 30,
    iconsSize: 30,
    iconsGap: 20,
    backgroundColor: "rgba(34, 34, 34, 0.95)",
    splitColor: "#ccc",
    iconsTipPosition: 20,
    iconsTipShow: false,
    iconsShadow: false,
    icons: [],
  });

  const get = async () => {
    data.value = await api.getConfig("taskbar");
  };

  if (path.includes("manage")) {
    watch(
      data,
      val => {
        const value = JSON.parse(JSON.stringify(val));

        api.writeConfig("taskbar", value);

        electron.ipcRenderer.send("update:config", "taskbar", value);
      },
      {
        deep: true,
      }
    );
  } else {
    electron.ipcRenderer.on("update:config", (_, value: any) => {
      data.value = value;
    });
  }

  get();

  return {
    data,
    get,
  };
});
