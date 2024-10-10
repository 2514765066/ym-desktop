<template>
  <el-alert
    title="移动状态下无法把文件拖拽到任务栏上，鼠标右键图标即可选中"
    type="info"
    show-icon
    class="f-s-0"
  />

  <Row label="显示" des="任务栏是否显示">
    <span class="fs-14 mr-1r">{{ data.show ? "开" : "关" }}</span>
    <el-switch v-model="data.show" />

    <template #icon>
      <img src="@/assets/svg/Show.svg" width="25" />
    </template>
  </Row>

  <Row label="移动" des="任务栏是否可以拖动">
    <span class="fs-14 mr-1r">{{ data.move ? "开" : "关" }}</span>
    <el-switch v-model="data.move" />

    <template #icon>
      <img src="@/assets/svg/Move.svg" width="25" />
    </template>
  </Row>

  <Row label="个性化" des="任务栏高度，圆角，背景色" to="/manage/taskbar/style">
    <template #icon>
      <img src="@/assets/svg/Style.svg" width="25" />
    </template>
  </Row>

  <Row
    label="图标"
    des="任务栏图标大小，间距，文字提示"
    to="/manage/taskbar/icon"
  >
    <template #icon>
      <img src="@/assets/svg/Icon.svg" width="25" />
    </template>
  </Row>

  <Row label="快捷键" des="配置任务栏快捷键" to="/manage/taskbar/shortcut">
    <template #icon>
      <img src="@/assets/svg/Shortcut.svg" width="25" />
    </template>
  </Row>

  <Row label="重置位置" des="重置任务栏到屏幕中心">
    <MyButton @click="handleResetPositon('taskbar')">重置</MyButton>

    <template #icon>
      <img src="@/assets/svg/Reset.svg" width="25" />
    </template>
  </Row>
</template>

<script setup lang="ts">
import { handleResetPositon } from "@/hooks/useControls";
import MyButton from "@/components/MyButton.vue";
import { ElSwitch, ElAlert } from "element-plus";
import Row from "@/components/Row.vue";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const { data } = storeToRefs(useTaskbarStore());
</script>

<style scoped lang="scss"></style>
