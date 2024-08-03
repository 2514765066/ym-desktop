<template>
  <Row label="字体大小" des="时钟字体大小">
    <span class="mr-1r fs-14">{{ data.fontSize }}</span>
    <el-slider
      v-model="data.fontSize"
      :min="0"
      :max="200"
      :show-tooltip="false"
      style="width: 280px"
    />
  </Row>

  <Row label="字体颜色" des="时钟颜色">
    <el-color-picker
      v-model="data.color"
      show-alpha
      color-format="hex"
      popper-class="el-color-picker-dropdown"
      @active-change="val => (data.color = val!)"
    />
  </Row>
</template>

<script setup lang="ts">
import { ElSlider, ElColorPicker } from "element-plus";
import Row from "@/components/Row.vue";
import { useClockStore } from "@/stores/useClockStore";

const { data } = storeToRefs(useClockStore());
</script>

<style scoped lang="scss"></style>
