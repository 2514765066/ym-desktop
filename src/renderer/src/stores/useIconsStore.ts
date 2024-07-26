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
    data.value = await api.getConfig("icons");
  };

  //重命名图标
  const rename = (index: number, newName: string) => {
    data.value[index].name = newName;
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

  watch(
    data,
    () => {
      api.writeConfig("icons", JSON.parse(JSON.stringify(data.value)));
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
    rename,
  };
});
