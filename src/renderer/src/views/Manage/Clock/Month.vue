<template>
  <Row label="水平坐标" des="左上角为坐标点的水平坐标">
    <span class="mr-1r fs-14">{{ data.monthX }}</span>
    <el-slider v-model.lazy="data.monthX" :max="400" :show-tooltip="false" />

    <template #icon>
      <img src="@/assets/svg/Position.svg" width="25" />
    </template>
  </Row>

  <Row label="垂直坐标" des="左上角为坐标点的垂直坐标">
    <span class="mr-1r fs-14">{{ data.monthY }}</span>
    <el-slider v-model.lazy="data.monthY" :max="400" :show-tooltip="false" />

    <template #icon>
      <img src="@/assets/svg/Position.svg" width="25" />
    </template>
  </Row>

  <Row label="字体大小" des="时间字体大小">
    <span class="mr-1r fs-14">{{ data.monthSize }}</span>
    <el-slider v-model.lazy="data.monthSize" :max="200" :show-tooltip="false" />

    <template #icon>
      <img src="@/assets/svg/FontSize.svg" width="25" />
    </template>
  </Row>

  <Row label="样式" des="语言样式">
    <MonthSelect v-model="data.monthStyle"></MonthSelect>

    <template #icon>
      <img src="@/assets/svg/Style.svg" width="25" />
    </template>
  </Row>

  <Row label="字体" des="时间字体">
    <FontFamilySelect v-model="data.monthFamily"></FontFamilySelect>

    <template #icon>
      <img src="@/assets/svg/FontSize.svg" width="25" />
    </template>
  </Row>

  <Row label="字体颜色" des="时间颜色">
    <el-color-picker
      v-model="data.monthColor"
      show-alpha
      color-format="hex"
      popper-class="el-color-picker-dropdown"
      @active-change="val => (data.monthColor = val!)"
    ></el-color-picker>

    <template #icon>
      <img src="@/assets/svg/Color.svg" width="25" />
    </template>
  </Row>
</template>

<script setup lang="ts">
import { ElSlider, ElColorPicker } from "element-plus";
import FontFamilySelect from "@/components/FontFamilySelect.vue";
import MonthSelect from "@/components/MonthSelect.vue";
import Row from "@/components/Row.vue";
import { useClockStore } from "@/stores/useClockStore";

const { data } = storeToRefs(useClockStore());
</script>

<style scoped lang="scss"></style>
