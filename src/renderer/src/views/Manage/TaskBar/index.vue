<template>
  <Row label="显示">
    <template #icon>
      <img src="@/assets/restore.svg" width="20" />
    </template>

    <span class="fs-14 mr-1r">{{ data.show ? "开" : "关" }}</span>
    <el-switch v-model="data.show" />
  </Row>

  <Row label="水平位置">
    <template #icon>
      <img src="@/assets/restore.svg" width="20" />
    </template>

    <span class="fs-14 mr-1r">{{ data.x }}</span>
    <el-slider v-model="data.x" :show-tooltip="false" style="width: 280px" />
  </Row>

  <Row label="垂直位置">
    <template #icon>
      <img src="@/assets/restore.svg" width="20" />
    </template>

    <span class="fs-14 mr-1r">{{ data.y }}</span>
    <el-slider :show-tooltip="false" v-model="data.y" style="width: 280px" />
  </Row>

  <Row label="高度">
    <template #icon>
      <img src="@/assets/restore.svg" width="20" />
    </template>

    <el-input-number
      v-model="data.height"
      :min="0"
      :controls="false"
      value-on-clear="min"
    />
  </Row>

  <Row label="圆角">
    <template #icon>
      <img src="@/assets/restore.svg" width="20" />
    </template>

    <el-input-number
      v-model="data.borderRadius"
      :min="0"
      :max="data.height / 2"
      :controls="false"
      value-on-clear="min"
    />
  </Row>

  <Row label="图标大小">
    <template #icon>
      <img src="@/assets/restore.svg" width="20" />
    </template>

    <el-input-number
      v-model="data.iconsSize"
      :min="0"
      :max="data.height"
      :controls="false"
      value-on-clear="min"
    />
  </Row>

  <Row label="背景颜色">
    <template #icon>
      <img src="@/assets/restore.svg" width="20" />
    </template>

    <el-color-picker
      v-model="data.backgroundColor"
      show-alpha
      popper-class="el-color-picker-dropdown"
      @active-change="val => (data.backgroundColor = val!)"
    />
  </Row>
</template>

<script setup lang="ts">
import { ElSwitch, ElSlider, ElInputNumber, ElColorPicker } from "element-plus";
import Row from "@/components/Row/index.vue";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const { data } = storeToRefs(useTaskbarStore());
</script>

<style scoped lang="scss"></style>
