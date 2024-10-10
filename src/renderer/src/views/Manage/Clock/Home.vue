<template>
  <Row label="显示" des="时钟是否显示">
    <span class="fs-14 mr-1r">{{ data.show ? "开" : "关" }}</span>
    <el-switch v-model="data.show" />

    <template #icon>
      <img src="@/assets/svg/Show.svg" width="25" />
    </template>
  </Row>

  <Row label="移动" des="时钟是否可以拖动">
    <span class="fs-14 mr-1r">{{ data.move ? "开" : "关" }}</span>
    <el-switch v-model="data.move" />

    <template #icon>
      <img src="@/assets/svg/Move.svg" width="25" />
    </template>
  </Row>

  <Row label="时间" des="颜色，字体，字体大小，位置" to="/manage/clock/time">
    <template #icon>
      <img src="@/assets/svg/Time.svg" width="25" />
    </template>
  </Row>

  <Row label="日期" des="颜色，字体，字体大小，位置" to="/manage/clock/day">
    <template #icon>
      <img src="@/assets/svg/Day.svg" width="25" />
    </template>
  </Row>

  <Row label="月份" des="颜色，字体，字体大小，位置" to="/manage/clock/month">
    <template #icon>
      <img src="@/assets/svg/Day.svg" width="25" />
    </template>
  </Row>

  <Row label="重置位置" des="重置时钟到屏幕中心">
    <MyButton @click="handleResetPositon('clock')">重置</MyButton>

    <template #icon>
      <img src="@/assets/svg/Reset.svg" width="25" />
    </template>
  </Row>
</template>

<script setup lang="ts">
import MyButton from "@/components/MyButton.vue";
import { ElSwitch } from "element-plus";
import Row from "@/components/Row.vue";
import { useClockStore } from "@/stores/useClockStore";
import { handleResetPositon } from "@/hooks/useControls";

const { data } = storeToRefs(useClockStore());
</script>

<style scoped lang="scss"></style>
