<template>
  <Row label="高度" des="任务栏高度">
    <span class="mr-1r fs-14">{{ data.height }}</span>
    <el-slider
      v-model.lazy="data.height"
      :min="30"
      :max="150"
      :show-tooltip="false"
    />
  </Row>

  <Row label="圆角" des="任务栏圆角">
    <span class="mr-1r fs-14">{{ data.borderRadius }}</span>
    <el-slider
      v-model.lazy="data.borderRadius"
      :max="data.height / 2"
      :show-tooltip="false"
    />
  </Row>

  <Row label="内边距" des="任务栏两端内边距">
    <span class="mr-1r fs-14">{{ data.paddingX }}</span>
    <el-slider v-model.lazy="data.paddingX" :show-tooltip="false" />
  </Row>

  <Row label="背景颜色" des="任务栏背景颜色">
    <el-color-picker
      v-model="data.backgroundColor"
      show-alpha
      color-format="hex"
      popper-class="el-color-picker-dropdown"
      @active-change="val => (data.backgroundColor = val!)"
    />
  </Row>

  <Row label="分割线颜色" des="任务栏中分割线颜色">
    <el-color-picker
      v-model="data.splitColor"
      show-alpha
      color-format="hex"
      popper-class="el-color-picker-dropdown"
      @active-change="val => (data.splitColor = val!)"
    />
  </Row>
</template>

<script setup lang="ts">
import { ElSlider, ElColorPicker } from "element-plus";
import Row from "@/components/Row.vue";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const { data } = storeToRefs(useTaskbarStore());
</script>

<style scoped lang="scss"></style>
