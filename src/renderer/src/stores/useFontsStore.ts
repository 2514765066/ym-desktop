import { defineStore } from "pinia";

export const useFontsStore = defineStore("fonts", () => {
  const data = ref<string[]>([]);

  const fontsOption = computed(() => {
    return data.value.map(item => {
      return {
        label: item,
        value: item,
      };
    });
  });

  const get = async () => {
    if (data.value.length !== 0) return;

    const localFonts = await queryLocalFonts();
    data.value = [...new Set(localFonts.map(item => item.family))];
  };

  get();

  return {
    data,
    fontsOption,
  };
});
