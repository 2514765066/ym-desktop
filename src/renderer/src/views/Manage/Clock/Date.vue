<template>
  <Row label="字体大小" des="日期字体大小">
    <span class="mr-1r fs-14">{{ data.fontSize }}</span>
    <el-slider
      v-model="data.fontSize"
      :min="0"
      :max="200"
      :show-tooltip="false"
      style="width: 280px"
    />
  </Row>

  <Row label="字体" des="日期的字体">
    <el-select-v2
      v-model="value"
      filterable
      :options="fontsOption"
    ></el-select-v2>
  </Row>

  <Row label="字体颜色" des="日期字体颜色">
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
import { ElSlider, ElColorPicker, ElSelectV2 } from "element-plus";
import Row from "@/components/Row.vue";
import { useClockStore } from "@/stores/useClockStore";
import { useFontsStore } from "@/stores/useFontsStore";

const { data } = storeToRefs(useClockStore());
const { fontsOption } = storeToRefs(useFontsStore());

const value = ref();
</script>

<style scoped lang="scss"></style>
