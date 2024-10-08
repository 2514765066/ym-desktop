import { defineStore } from "pinia";
import { Icons } from "@type";
import { useTaskbarStore } from "./useTaskbarStore";
import { nanoid } from "nanoid";

export const useIconsStore = defineStore("icons", () => {
  const taskbarConfig = useTaskbarStore();

  const data = ref<Icons>([]);

  //当前选中的图标名称
  const selectedID = ref("");

  //获取配置
  const get = async () => {
    const config = await electron.ipcRenderer.invoke("readConfig", "icons");

    if (config.length == 0) return;

    data.value = config;
  };

  //重命名图标
  const rename = (index: number, newName: string) => {
    data.value[index].name = newName;
  };

  //添加
  const add = async (files: File[]) => {
    const promiseFiles = files.map(async file => {
      const name = file.name.split(".")[0].slice(0, 10);
      const path: string = await electron.ipcRenderer.invoke(
        "shortcutTarget",
        file.path
      );

      return {
        id: nanoid(),
        name,
        path,
      };
    });

    const res = await Promise.all(promiseFiles);

    const pathArr = data.value.map(item => item.path);

    for (const item of res) {
      if (pathArr.includes(item.path)) {
        return;
      }

      data.value.push(item);
    }
  };

  //注册按键
  document.addEventListener("keydown", e => {
    if (!selectedID.value) return;

    const index = data.value.findIndex(item => item.id == selectedID.value);

    if (index == -1) return;

    //移除图标
    if (e.key == taskbarConfig.data.removeIconKey) {
      data.value.splice(index, 1);
      return;
    }

    //添加分割线
    if (e.key == taskbarConfig.data.addSplitKey) {
      data.value.splice(index + 1, 0, {
        id: nanoid(),
        name: "",
        path: "",
        isSplit: true,
      });
      return;
    }
  });

  //写入文件
  watch(
    data,
    val => {
      electron.ipcRenderer.invoke(
        "writeConfig",
        "icons",
        JSON.parse(JSON.stringify(val))
      );
    },
    {
      deep: true,
    }
  );

  get();

  return {
    data,
    selectedID,
    get,
    add,
    rename,
  };
});
