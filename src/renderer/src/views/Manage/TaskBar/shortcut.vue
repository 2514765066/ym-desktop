<template>
  <Row label="删除图标" des="选中图标后删除图标的快捷键">
    <Shortcut v-model="data.removeIconKey"></Shortcut>

    <template #icon>
      <img src="@/assets/svg/Shortcut.svg" width="25" />
    </template>
  </Row>

  <Row label="添加分割线" des="选中图标后在图标后添加分割线">
    <Shortcut v-model="data.addSplitKey"></Shortcut>

    <template #icon>
      <img src="@/assets/svg/Shortcut.svg" width="25" />
    </template>
  </Row>
</template>

<script setup lang="ts">
import Row from "@/components/Row.vue";
import Shortcut from "@/components/Shortcut.vue";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const { data } = storeToRefs(useTaskbarStore());
</script>

<style scoped lang="scss"></style>
