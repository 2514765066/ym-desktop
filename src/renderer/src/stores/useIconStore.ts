import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import { IconOption } from "@type";

export const useIconStore = defineStore("icon", () => {
  //图标配置项
  const iconOption = ref<IconOption[]>([]);

  //当前选中的图标配置项的ID
  const selectedID = ref("");

  //添加分割线
  const addSplit = () => {
    if (!selectedID.value) {
      return;
    }

    const index = iconOption.value.findIndex(
      item => item.id == selectedID.value
    );

    if (index == -1) return;

    iconOption.value.splice(index + 1, 0, {
      id: nanoid(),
      name: "",
      path: "",
      isSplit: true,
    });
  };

  //添加图标
  const addIcon = async (files: File[]) => {
    const data = files.map(async item => {
      const name = item.name.split(".")[0];
      const path = await ipcRenderer.invoke("shortcutTarget", item.path);

      return {
        name,
        path,
        id: nanoid(),
      };
    });

    const res = await Promise.all(data);

    iconOption.value.push(...res);
  };

  //删除图标
  const removeIcon = () => {
    if (!selectedID.value) {
      return;
    }

    const index = iconOption.value.findIndex(
      item => item.id == selectedID.value
    );

    if (index == -1) return;

    iconOption.value.splice(index, 1);
    selectedID.value = iconOption.value[index].id;
  };

  //重命名图标
  const renameIcon = (name: string) => {
    if (!selectedID.value) {
      return;
    }

    const index = iconOption.value.findIndex(
      item => item.id == selectedID.value
    );

    if (index == -1) return;

    iconOption.value[index].name = name;
  };

  //获取图标配置项
  const getIconOption = async () => {
    const data = await ipcRenderer.invoke("readConfig", "icons");

    //处理无数据
    if (!data) return;

    iconOption.value = JSON.parse(data);
  };

  //初始化
  const init = async () => {
    await getIconOption();

    //写入文件
    watch(
      iconOption,
      () => {
        ipcRenderer.send(
          "wrtieConfig",
          "icons",
          JSON.stringify(iconOption.value)
        );
      },
      {
        deep: true,
      }
    );
  };

  init();

  return {
    iconOption,
    selectedID,
    addSplit,
    addIcon,
    removeIcon,
    renameIcon,
  };
});
