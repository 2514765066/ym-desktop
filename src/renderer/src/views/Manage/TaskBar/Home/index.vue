<template>
  <Row label="显示" des="任务栏是否显示">
    <span class="fs-14 mr-1r">{{ data.show ? "开" : "关" }}</span>
    <el-switch v-model="data.show" />
  </Row>

  <Row label="移动" des="任务栏是否可以拖动">
    <template #icon>
      <img src="@/assets/restore.svg" width="20" />
    </template>

    <span class="fs-14 mr-1r">{{ data.move ? "开" : "关" }}</span>
    <el-switch v-model="data.move" />
  </Row>

  <Row
    label="个性化"
    des="任务栏高度，圆角，背景色"
    to="/manage/taskbar/style"
  ></Row>

  <Row
    label="图标"
    des="任务栏图标大小，间距，文字提示"
    to="/manage/taskbar/icon"
  ></Row>
</template>

<script setup lang="ts">
import { ElSwitch } from "element-plus";
import Row from "@/components/Row/index.vue";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const { data } = storeToRefs(useTaskbarStore());
</script>

<style scoped lang="scss"></style>
