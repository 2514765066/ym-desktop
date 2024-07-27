<template>
  <el-alert
    title="移动状态下无法把文件拖拽到任务栏上"
    type="info"
    show-icon
    class="f-s-0"
  />

  <Row label="显示" des="任务栏是否显示">
    <span class="fs-14 mr-1r">{{ data.show ? "开" : "关" }}</span>
    <el-switch v-model="data.show" />
  </Row>

  <Row label="移动" des="任务栏是否可以拖动">
    <span class="fs-14 mr-1r">{{ data.move ? "开" : "关" }}</span>
    <el-switch v-model="data.move" />
  </Row>

  <Row label="水平居中" des="让任务栏水平居中">
    <Button @click="handleCenter">水平居中</Button>
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

  <Row
    label="快捷键"
    des="配置任务栏快捷键"
    to="/manage/taskbar/shortcut"
  ></Row>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
import { ElSwitch, ElAlert } from "element-plus";
import Row from "@/components/Row.vue";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const { data } = storeToRefs(useTaskbarStore());

const handleCenter = () => {
  electron.ipcRenderer.send("center", "taskbar", {
    vertical: true,
  });
};
</script>

<style scoped lang="scss"></style>
