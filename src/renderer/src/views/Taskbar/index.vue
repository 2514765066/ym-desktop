<template>
  <main class="v-c-c taskbar">
    <img
      v-for="item of icons.data"
      :key="item.name"
      :src="item.src"
      class="click"
    />
    <aside></aside>
    <img
      v-for="item of icons.data"
      :key="item.name"
      :src="item.src"
      class="click"
    />
  </main>
</template>

<script setup lang="ts">
import { useIconsStore } from "@/stores/useIconsStore";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const icons = useIconsStore();
</script>

<style lang="scss">
.taskbar {
  $size: 30px;
  $height: 60px;
  height: $height;
  border-radius: calc($height / 2);
  background-color: rgba(34, 34, 34, 0.95);
  -webkit-app-region: drag;
  gap: 1.2rem;

  > img {
    width: $size;
    height: $size;

    transition: 0.15s;

    &:hover {
      transform: scale(1.3);
    }
  }

  > aside {
    width: 1px;
    height: $size;
    background-color: #ccc;
  }
}
</style>
