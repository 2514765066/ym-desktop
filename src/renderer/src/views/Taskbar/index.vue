<template>
  <main class="v-c-c">
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
    <el-input v-model="val" placeholder="搜索"></el-input>
  </main>
</template>

<script setup lang="ts">
import { ElInput } from "element-plus";
import { useIconsStore } from "@/stores/useIconsStore";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const icons = useIconsStore();

const val = ref("");
</script>

<style lang="scss">
main {
  $size: 30px;
  $height: 60px;
  height: $height;
  border-radius: $height/2;
  background-color: rgba($color: #222, $alpha: 0.95);
  -webkit-app-region: drag;

  * {
    margin: 0 0.6rem;
  }

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
