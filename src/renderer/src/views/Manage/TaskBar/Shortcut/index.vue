<template>
  <el-alert title="鼠标右键点击图标即可选中" type="info" show-icon />

  <Row label="删除图标" des="选中图标后删除图标的快捷键">
    <Shortcut></Shortcut>
  </Row>

  <Row label="添加分割线" des="选中图标后在图标后添加分割线">
    <Shortcut></Shortcut>
  </Row>
</template>

<script setup lang="ts">
import { ElAlert } from "element-plus";
import Row from "@/components/Row.vue";
import Shortcut from "@/components/Shortcut.vue";
</script>

<style scoped lang="scss"></style>
