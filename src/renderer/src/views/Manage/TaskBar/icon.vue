<template>
  <Row label="阴影" des="图标下方是否显示阴影">
    <span class="fs-14 mr-1r">{{ data.iconsShadow ? "开" : "关" }}</span>
    <el-switch v-model="data.iconsShadow" />

    <template #icon>
      <img src="@/assets/svg/Shadow.svg" width="25" />
    </template>
  </Row>

  <Row label="名称显示" des="鼠标悬浮在图标上是否显示名称">
    <span class="fs-14 mr-1r">{{ data.iconsTipShow ? "开" : "关" }}</span>
    <el-switch v-model="data.iconsTipShow" />

    <template #icon>
      <img src="@/assets/svg/Show.svg" width="25" />
    </template>
  </Row>

  <Row label="名称位置" des="鼠标悬浮在图标上显示名称的垂直位置">
    <span class="mr-1r fs-14">
      {{ data.iconsTipPosition - data.iconsSize }}
    </span>
    <el-slider
      v-model.lazy="data.iconsTipPosition"
      :min="data.iconsSize"
      :max="data.height * 1"
      :show-tooltip="false"
    />

    <template #icon>
      <img src="@/assets/svg/Position.svg" width="25" />
    </template>
  </Row>

  <Row label="大小" des="图标大小">
    <span class="mr-1r fs-14">{{ data.iconsSize - 8 }}</span>
    <el-slider
      v-model.lazy="data.iconsSize"
      :min="8"
      :max="data.height + 8"
      :show-tooltip="false"
    />

    <template #icon>
      <img src="@/assets/svg/Size.svg" width="25" />
    </template>
  </Row>

  <Row label="间距" des="图标之间的间距">
    <span class="mr-1r fs-14">{{ data.iconsGap }}</span>
    <el-slider v-model.lazy="data.iconsGap" :show-tooltip="false" />

    <template #icon>
      <img src="@/assets/svg/Padding.svg" width="25" />
    </template>
  </Row>
</template>

<script setup lang="ts">
import { ElSlider, ElSwitch } from "element-plus";
import Row from "@/components/Row.vue";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const { data } = storeToRefs(useTaskbarStore());
</script>

<style scoped lang="scss"></style>
