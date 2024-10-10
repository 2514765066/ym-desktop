<template>
  <Row label="水平坐标" des="左上角为坐标点的水平坐标">
    <span class="mr-1r fs-14">{{ data.timeX }}</span>
    <el-slider v-model.lazy="data.timeX" :max="400" :show-tooltip="false" />

    <template #icon>
      <img src="@/assets/svg/Position.svg" width="25" />
    </template>
  </Row>

  <Row label="垂直坐标" des="左上角为坐标点的垂直坐标">
    <span class="mr-1r fs-14">{{ data.timeY }}</span>
    <el-slider v-model.lazy="data.timeY" :max="400" :show-tooltip="false" />

    <template #icon>
      <img src="@/assets/svg/Position.svg" width="25" />
    </template>
  </Row>

  <Row label="字体大小" des="时间字体大小">
    <span class="mr-1r fs-14">{{ data.timeSize }}</span>
    <el-slider v-model.lazy="data.timeSize" :max="200" :show-tooltip="false" />

    <template #icon>
      <img src="@/assets/svg/FontSize.svg" width="25" />
    </template>
  </Row>

  <Row label="样式" des="hh时mm分">
    <el-input v-model.lazy="data.timeStyle"></el-input>

    <template #icon>
      <img src="@/assets/svg/Style.svg" width="25" />
    </template>
  </Row>

  <Row label="字体" des="时间字体">
    <FontFamilySelect v-model="data.timeFamily"></FontFamilySelect>

    <template #icon>
      <img src="@/assets/svg/FontSize.svg" width="25" />
    </template>
  </Row>

  <Row label="字体颜色" des="时间颜色">
    <el-color-picker
      v-model="data.timeColor"
      show-alpha
      color-format="hex"
      popper-class="el-color-picker-dropdown"
      @active-change="val => (data.timeColor = val!)"
    ></el-color-picker>

    <template #icon>
      <img src="@/assets/svg/Color.svg" width="25" />
    </template>
  </Row>
</template>

<script setup lang="ts">
import { ElSlider, ElColorPicker, ElInput } from "element-plus";
import FontFamilySelect from "@/components/FontFamilySelect.vue";
import Row from "@/components/Row.vue";
import { useClockStore } from "@/stores/useClockStore";

const { data } = storeToRefs(useClockStore());
</script>

<style scoped lang="scss"></style>
