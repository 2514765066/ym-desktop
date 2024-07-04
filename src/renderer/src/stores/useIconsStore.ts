import { defineStore } from "pinia";
import { Icons } from "@type";

export const useIconsStore = defineStore("icons", () => {
  const data = ref<Icons>([]);

  const get = async () => {
    data.value = await api.getIcons();

    const order = await api.getConfig("icons");
    sort(order);
  };

  const sort = (order: string[]) => {
    data.value.sort((a, b) => {
      let indexA = order.indexOf(a.name);
      let indexB = order.indexOf(b.name);

      if (indexA === -1) indexA = order.length;
      if (indexB === -1) indexB = order.length;

      return indexA - indexB;
    });
  };

  const update = () => {
    api.writeConfig(
      "icons",
      data.value.map(item => item.name)
    );
  };

  const remove = (name: string) => {
    const index = data.value.findIndex(item => item.name == name);

    data.value.splice(index, 1);
  };

  const rename = (oldName: string, newName: string) => {
    data.value.forEach(item => {
      if (item.name == oldName) {
        item.name = newName;
      }
    });
  };

  get();

  return {
    data,
    get,
    update,
    remove,
    rename,
  };
});
