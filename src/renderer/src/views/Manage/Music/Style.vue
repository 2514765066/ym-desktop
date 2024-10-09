<template>
  <Row label="高度" des="可视化音频最大高度">
    <span class="mr-1r fs-14">{{ data.height }}</span>
    <el-slider
      v-model.lazy="data.height"
      :min="0"
      :max="256"
      :show-tooltip="false"
    />
  </Row>
</template>

<script setup lang="ts">
import { ElSlider } from "element-plus";
import Row from "@/components/Row.vue";
import { useMusicStore } from "@/stores/useMusicStore";

const { data } = storeToRefs(useMusicStore());
</script>

<style scoped lang="scss"></style>
