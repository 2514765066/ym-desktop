<template>
  <Row label="显示" des="可视化音频是否显示">
    <span class="fs-14 mr-1r">{{ data.show ? "开" : "关" }}</span>
    <el-switch v-model="data.show" />

    <template #icon>
      <img src="@/assets/svg/Show.svg" width="25" />
    </template>
  </Row>

  <Row label="移动" des="可视化音频是否可以拖动">
    <span class="fs-14 mr-1r">{{ data.move ? "开" : "关" }}</span>
    <el-switch v-model="data.move" />

    <template #icon>
      <img src="@/assets/svg/Move.svg" width="25" />
    </template>
  </Row>

  <Row label="个性化" des="可视化音频高度" to="/manage/music/style">
    <template #icon>
      <img src="@/assets/svg/Style.svg" width="25" />
    </template>
  </Row>

  <Row label="音乐条" des="音乐条宽度，间距，颜色，数量" to="/manage/music/bar">
    <template #icon>
      <img src="@/assets/svg/Bar.svg" width="25" />
    </template>
  </Row>

  <Row label="重置位置" des="重置可视化音频到屏幕中心">
    <MyButton @click="handleResetPositon('music')">重置</MyButton>

    <template #icon>
      <img src="@/assets/svg/Reset.svg" width="25" />
    </template>
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
