<template>
  <main class="p-2">
    <vue-draggable
      v-model="icons.data"
      class="v-c-c"
      :animation="150"
      @drop="handleDrop"
      @dragover="handleDragover"
    >
      <Icon
        v-for="(item, index) of icons.data"
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
import { nanoid } from "nanoid";

const icons = useIconsStore();
const { data } = storeToRefs(useTaskbarStore());

//把桌面应用拖拽到任务栏上
const handleDrop = (event: DragEvent) => {
  event.preventDefault();

  const files = Array.from(event.dataTransfer!.files).map(file => {
    const name = file.name.split(".")[0].slice(0, 10);

    return {
      id: nanoid(),
      name,
      path: file.path,
    };
  });

  icons.add(files);
};

const handleDragover = (event: DragEvent) => {
  event.preventDefault();
};

//监视动态设置宽高
watchEffect(() => {
  const width =
    icons.data.length == 0
      ? data.value.paddingX * 2 + 20
      : 20 +
        icons.data.length * data.value.iconsSize +
        (icons.data.length - 1) * data.value.iconsGap +
        data.value.paddingX * 2 +
        4;

  const height = data.value.height * 3;

  electron.ipcRenderer.send("setSize", width, height);
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

main {
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
