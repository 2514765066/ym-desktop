<template>
  <el-alert
    title="鼠标右键点击图标即可选中"
    type="info"
    show-icon
    class="f-s-0"
  />

  <Row label="删除图标" des="选中图标后删除图标的快捷键">
    <Shortcut v-model="data.removeIconKey"></Shortcut>
  </Row>

  <Row label="添加分割线" des="选中图标后在图标后添加分割线">
    <Shortcut v-model="data.addSplitKey"></Shortcut>
  </Row>
</template>

<script setup lang="ts">
import { ElAlert } from "element-plus";
import Row from "@/components/Row.vue";
import Shortcut from "@/components/Shortcut.vue";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const { data } = storeToRefs(useTaskbarStore());
</script>

<style scoped lang="scss"></style>
