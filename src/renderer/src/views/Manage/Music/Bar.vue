<template>
  <Row label="宽度" des="每个音乐条的宽度">
    <span class="mr-1r fs-14">{{ data.barWidth }}</span>
    <el-slider
      v-model.lazy="data.barWidth"
      :min="1"
      :max="20"
      :show-tooltip="false"
    />

    <template #icon>
      <img src="@/assets/svg/Width.svg" width="25" />
    </template>
  </Row>

  <Row label="间距" des="音乐条的间距">
    <span class="mr-1r fs-14">{{ data.barGap }}</span>
    <el-slider
      v-model.lazy="data.barGap"
      :min="1"
      :max="20"
      :show-tooltip="false"
    />

    <template #icon>
      <img src="@/assets/svg/Padding.svg" width="25" />
    </template>
  </Row>

  <Row label="数量" des="音乐条数量">
    <span class="mr-1r fs-14">{{ data.barCount }}</span>
    <el-slider
      v-model.lazy="data.barCount"
      :min="1"
      :max="130"
      :show-tooltip="false"
    />

    <template #icon>
      <img src="@/assets/svg/Count.svg" width="25" />
    </template>
  </Row>

  <Row label="颜色" des="音乐条颜色">
    <el-color-picker
      v-model="data.barColor"
      show-alpha
      color-format="hex"
      popper-class="el-color-picker-dropdown"
      @active-change="val => (data.barColor = val!)"
    />

    <template #icon>
      <img src="@/assets/svg/Color.svg" width="25" />
    </template>
  </Row>
</template>

<script setup lang="ts">
import { ElSlider, ElColorPicker } from "element-plus";
import Row from "@/components/Row.vue";
import { useMusicStore } from "@/stores/useMusicStore";

const { data } = storeToRefs(useMusicStore());
</script>

<style scoped lang="scss"></style>
