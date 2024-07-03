import { defineStore } from "pinia";
import { TaskbarConfig } from "@type";
import { debounce } from "@/hooks/useDebounce";

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
  });

  const get = async () => {
    data.value = await api.getConfig("taskbar");
  };

  if (path.includes("manage")) {
    const write = debounce(value => {
      api.writeConfig("taskbar", value);
    }, 300);

    watch(
      data,
      val => {
        const value = JSON.parse(JSON.stringify(val));

        write(value);

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
