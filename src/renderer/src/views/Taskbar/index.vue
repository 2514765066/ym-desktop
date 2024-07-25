<template>
  <vue-draggable
    v-model="icons.data"
    class="v-c-c taskbar"
    :animation="150"
    @end="update"
  >
    <Icon v-for="item of icons.data" :key="item.name" :data="item"></Icon>
  </vue-draggable>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon/index.vue";
import { VueDraggable } from "vue-draggable-plus";
import { useIconsStore } from "@/stores/useIconsStore";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const icons = useIconsStore();
const { update } = useIconsStore();
const { data } = storeToRefs(useTaskbarStore());

window.addEventListener("mousemove", ({ target }) => {
  const el = target as HTMLElement;

  const bool = el.id == "app";

  electron.ipcRenderer.send("ignoreMouseEvents", bool);
});
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.taskbar {
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
</style>
