<template>
  <Row label="阴影" des="图标下方是否显示阴影">
    <span class="fs-14 mr-1r">{{ data.iconsShadow ? "开" : "关" }}</span>
    <el-switch v-model="data.iconsShadow" />
  </Row>

  <Row label="名称显示" des="鼠标悬浮在图标上是否显示名称">
    <span class="fs-14 mr-1r">{{ data.iconsTipShow ? "开" : "关" }}</span>
    <el-switch v-model="data.iconsTipShow" />
  </Row>

  <Row label="名称位置" des="鼠标悬浮在图标上显示名称的垂直位置">
    <span class="mr-1r fs-14">{{ data.iconsTipPosition }}</span>
    <el-slider
      v-model="data.iconsTipPosition"
      :max="data.height"
      :show-tooltip="false"
      style="width: 280px"
    />
  </Row>

  <Row label="大小" des="图标大小">
    <span class="mr-1r fs-14">{{ data.iconsSize }}</span>
    <el-slider
      v-model="data.iconsSize"
      :max="data.height"
      :show-tooltip="false"
      style="width: 280px"
    />
  </Row>

  <Row label="间距" des="图标之间的间距">
    <span class="mr-1r fs-14">{{ data.iconsGap }}</span>
    <el-slider
      v-model="data.iconsGap"
      :show-tooltip="false"
      style="width: 280px"
    />
  </Row>
</template>

<script setup lang="ts">
import { ElSlider, ElSwitch } from "element-plus";
import Row from "@/components/Row/index.vue";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const { data } = storeToRefs(useTaskbarStore());
</script>

<style scoped lang="scss"></style>
