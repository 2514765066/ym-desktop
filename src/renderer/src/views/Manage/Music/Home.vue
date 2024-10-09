<template>
  <Row label="显示" des="可视化音频是否显示">
    <span class="fs-14 mr-1r">{{ data.show ? "开" : "关" }}</span>
    <el-switch v-model="data.show" />
  </Row>

  <Row label="移动" des="可视化音频是否可以拖动">
    <span class="fs-14 mr-1r">{{ data.move ? "开" : "关" }}</span>
    <el-switch v-model="data.move" />
  </Row>

  <Row label="个性化" des="可视化音频高度" to="/manage/music/style"></Row>

  <Row
    label="音乐条"
    des="音乐条宽度，间距，颜色，数量"
    to="/manage/music/bar"
  ></Row>

  <Row label="重置位置" des="重置可视化音频到屏幕中心">
    <MyButton @click="handleResetPositon('music')">重置</MyButton>
  </Row>
</template>

<script setup lang="ts">
import MyButton from "@/components/MyButton.vue";
import { ElSwitch } from "element-plus";
import Row from "@/components/Row.vue";
import { useMusicStore } from "@/stores/useMusicStore";
import { handleResetPositon } from "@/hooks/useControls";

const { data } = storeToRefs(useMusicStore());
</script>

<style scoped lang="scss"></style>
