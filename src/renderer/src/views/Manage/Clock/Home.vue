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
    des="时间颜色，字体，字体大小"
    to="/manage/clock/time"
  ></Row>

  <Row
    label="日期"
    des="日期颜色，字体，字体大小"
    to="/manage/clock/date"
  ></Row>
</template>

<script setup lang="ts">
import { ElSwitch } from "element-plus";
import Row from "@/components/Row.vue";
import { useClockStore } from "@/stores/useClockStore";

const { data } = storeToRefs(useClockStore());
</script>

<style scoped lang="scss"></style>
