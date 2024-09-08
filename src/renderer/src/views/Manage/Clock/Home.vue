<template>
  <Row label="显示" des="任务栏是否显示">
    <span class="fs-14 mr-1r">{{ data.show ? "开" : "关" }}</span>
    <el-switch v-model="data.show" />
  </Row>

  <Row label="移动" des="任务栏是否可以拖动">
    <span class="fs-14 mr-1r">{{ data.move ? "开" : "关" }}</span>
    <el-switch v-model="data.move" />
  </Row>

  <Row
    label="时间"
    des="颜色，字体，字体大小，位置"
    to="/manage/clock/time"
  ></Row>

  <Row
    label="日期"
    des="颜色，字体，字体大小，位置"
    to="/manage/clock/day"
  ></Row>

  <Row
    label="月份"
    des="颜色，字体，字体大小，位置"
    to="/manage/clock/month"
  ></Row>

  <Row label="重置位置" des="重置时钟到屏幕最左上角">
    <Button @click="handleResetPositon('clock', 0, 0)">重置</Button>
  </Row>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
import { ElSwitch } from "element-plus";
import Row from "@/components/Row.vue";
import { useClockStore } from "@/stores/useClockStore";
import { handleResetPositon } from "@/hooks/useControls";

const { data } = storeToRefs(useClockStore());
</script>

<style scoped lang="scss"></style>
