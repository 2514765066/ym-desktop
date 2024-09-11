<template>
  <Row label="水平坐标" des="左上角为坐标点的水平坐标">
    <span class="mr-1r fs-14">{{ data.dayX }}</span>
    <el-slider
      v-model.lazy="data.dayX"
      :min="0"
      :max="400"
      :show-tooltip="false"
    />
  </Row>

  <Row label="垂直坐标" des="左上角为坐标点的垂直坐标">
    <span class="mr-1r fs-14">{{ data.dayY }}</span>
    <el-slider
      v-model.lazy="data.dayY"
      :min="0"
      :max="400"
      :show-tooltip="false"
    />
  </Row>

  <Row label="字体大小" des="日期字体大小">
    <span class="mr-1r fs-14">{{ data.daySize }}</span>
    <el-slider v-model.lazy="data.daySize" :max="200" :show-tooltip="false" />
  </Row>

  <Row label="字体" des="日期字体">
    <FontFamilySelect v-model="data.dayFamily"></FontFamilySelect>
  </Row>

  <Row label="字体颜色" des="日期颜色">
    <el-color-picker
      v-model="data.dayColor"
      show-alpha
      color-format="hex"
      popper-class="el-color-picker-dropdown"
      @active-change="val => (data.dayColor = val!)"
    ></el-color-picker>
  </Row>
</template>

<script setup lang="ts">
import { ElSlider, ElColorPicker } from "element-plus";
import FontFamilySelect from "@/components/FontFamilySelect.vue";
import Row from "@/components/Row.vue";
import { useClockStore } from "@/stores/useClockStore";

const { data } = storeToRefs(useClockStore());
</script>

<style scoped lang="scss"></style>
