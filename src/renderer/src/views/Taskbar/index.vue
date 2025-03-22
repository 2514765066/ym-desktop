<template>
  <main class="p-2.5">
    <vue-draggable
      class="taskbar flex items-center"
      :class="{ 'taskbar-move': taskbarOption.move }"
      v-model="iconOption"
      :animation="150"
      @drop="handleDrop"
      @dragover="handleDragover"
    >
      <component
        v-for="item of iconOption"
        :is="item.isSplit ? TaskbarSplit : TaskbarIcon"
        :key="item.id"
        :data="item"
      />
    </vue-draggable>
  </main>
</template>

<script setup lang="ts">
import TaskbarIcon from "@/components/TaskbarIcon/index.vue";
import TaskbarSplit from "@/components/TaskbarIcon/Split.vue";
import { VueDraggable } from "vue-draggable-plus";
import { useTaskbarStore } from "@/stores/useTaskbarStore";
import { useIconStore } from "@/stores/useIconStore";
import { useTaskbarEvent } from "@/hooks/useTaskBarEvent";

const { iconOption } = storeToRefs(useIconStore());
const { addIcon } = useIconStore();
const { taskbarOption } = storeToRefs(useTaskbarStore());
useTaskbarEvent();

//把桌面应用拖拽到任务栏上
const handleDrop = (event: DragEvent) => {
  event.preventDefault();

  const files = Array.from(event.dataTransfer!.files);

  addIcon(files);
};

const handleDragover = (event: DragEvent) => {
  event.preventDefault();
};

//监视动态设置宽高
watchEffect(() => {
  const height = Math.ceil((taskbarOption.value.iconSize + 32) * 2);

  ipcRenderer.send("setSize", {
    height,
  });
});
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.taskbar {
  height: calc(v-bind("taskbarOption.height") * 1px);

  padding: 0 calc(v-bind("taskbarOption.paddingX") * 1px);

  gap: calc(v-bind("taskbarOption.iconGap") * 1px);

  border-radius: calc(v-bind("taskbarOption.borderRadius") * 1px);

  background-color: v-bind("taskbarOption.backgroundColor");
}

.taskbar-shadow {
  -webkit-box-reflect: below 5px
    linear-gradient(to bottom, transparent 45%, rgba(0, 0, 0, 0.7));
}

.taskbar-move {
  -webkit-app-region: drag;
}
</style>
