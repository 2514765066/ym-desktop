import { useTaskbarStore } from "@/stores/useTaskbarStore";
import { useIconStore } from "@/stores/useIconStore";

export const useTaskbarEvent = () => {
  const { removeIcon, addSplit } = useIconStore();
  const { taskbarOption } = storeToRefs(useTaskbarStore());

  const handleKeydown = (e: KeyboardEvent) => {
    switch (e.key) {
      case taskbarOption.value.removeIconKey:
        removeIcon();
        break;
      case taskbarOption.value.addSplitKey:
        addSplit();
        break;
    }
  };

  const handleMouseOver = (e: MouseEvent) => {
    const el = e.target as HTMLElement;

    ipcRenderer.send("ignoreMouseEvents", el.id == "app");
  };

  onMounted(() => {
    document.addEventListener("keydown", handleKeydown);
    document.body.addEventListener("mouseover", handleMouseOver);
  });

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown);
    document.body.removeEventListener("mouseover", handleMouseOver);
  });
};
