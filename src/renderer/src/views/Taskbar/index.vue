<template>
  <main class="Taskbar p-2">
    <vue-draggable
      v-model="iconsStore.data"
      class="v-c-c"
      :animation="150"
      @drop="handleDrop"
      @dragover="handleDragover"
    >
      <Icon
        v-for="(item, index) of iconsStore.data"
        :key="item.name"
        :data="item"
        :index="index"
      ></Icon>
    </vue-draggable>
  </main>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import { VueDraggable } from "vue-draggable-plus";
import { useIconsStore } from "@/stores/useIconsStore";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const iconsStore = useIconsStore();
const { data } = storeToRefs(useTaskbarStore());

//把桌面应用拖拽到任务栏上
const handleDrop = (event: DragEvent) => {
  event.preventDefault();

  const files = Array.from(event.dataTransfer!.files);

  iconsStore.add(files);
};

const handleDragover = (event: DragEvent) => {
  event.preventDefault();
};

//监视动态设置宽高
watchEffect(() => {
  let width =
    data.value.paddingX * 2 +
    50 +
    iconsStore.data.length * data.value.iconsSize;

  if (iconsStore.data.length != 0) {
    width += (iconsStore.data.length - 1) * data.value.iconsGap;
  }

  const height = data.value.height * 3;

  electron.ipcRenderer.send("setSize", "taskbar", width, height);
  electron.ipcRenderer.send("center", "taskbar", {
    horizontal: true,
  });
});

//鼠标穿透
onMounted(() => {
  document.body.addEventListener("mouseover", ({ target }) => {
    const el = target as HTMLElement;

    electron.ipcRenderer.send("ignoreMouseEvents", el.id == "app");
  });
});
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Taskbar {
  > div {
    --move: v-bind("data.move? 'drag':'no-drag'");
    --height: calc(v-bind("data.height") * 1px);
    --borderRadius: calc(v-bind("data.borderRadius") * 1px);
    --paddingX: calc(v-bind("data.paddingX") * 1px);
    --backgroundColor: v-bind("data.backgroundColor");
    --iconsSize: calc(v-bind("data.iconsSize") * 1px);
    --iconsGap: calc(v-bind("data.iconsGap") * 1px);
    --iconsTipPosition: calc(v-bind("data.iconsTipPosition") * 1px);
    --iconsTipShow: v-bind("data.iconsTipShow? 'block':'none'");
    --splitColor: v-bind("data.splitColor");
    --iconsShadow: v-bind(
      "data.iconsShadow?'below 5px linear-gradient(to bottom, transparent 45%, rgba(0, 0, 0, 0.7))':'none'"
    );

    -webkit-app-region: var(--move);
    padding: 0 var(--paddingX);
    height: var(--height);
    border-radius: var(--borderRadius);
    background-color: var(--backgroundColor);
    gap: var(--iconsGap);
  }
}

.el-popper {
  padding: 5px !important;
}
</style>
