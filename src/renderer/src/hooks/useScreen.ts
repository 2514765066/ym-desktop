import { computed } from "vue";

export const screenX = computed(() => ~~(screen.width / 10) * 10);
export const screenY = computed(() => ~~(screen.height / 10) * 10);
