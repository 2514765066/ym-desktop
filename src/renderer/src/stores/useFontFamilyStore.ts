import { defineStore } from "pinia";

export const useFontFamilyStore = defineStore("fontfamily", () => {
  const data = ref<string[]>([]);

  const get = async () => {
    if (data.value.length !== 0) return;

    const localFonts = await queryLocalFonts();
    data.value = [...new Set(localFonts.map(item => item.family))];
  };

  get();

  return {
    data,
  };
});
