<template>
  <main class="h g-2">
    <Row label="显示">
      <template #icon>
        <img src="@/assets/restore.svg" class="mr-1r" width="20" />
      </template>

      <span class="fs-14 mr-1r">{{ list.show ? "开" : "关" }}</span>
      <el-switch v-model="list.show" />
    </Row>

    <Row label="水平位置">
      <template #icon>
        <img src="@/assets/restore.svg" class="mr-1r" width="20" />
      </template>

      <span class="fs-14 mr-1r">{{ list.x }}</span>
      <el-slider v-model="list.x" :show-tooltip="false" style="width: 280px" />
    </Row>

    <Row label="垂直位置">
      <template #icon>
        <img src="@/assets/restore.svg" class="mr-1r" width="20" />
      </template>

      <span class="fs-14 mr-1r">{{ list.y }}</span>
      <el-slider :show-tooltip="false" v-model="list.y" style="width: 280px" />
    </Row>
  </main>
</template>

<script setup lang="ts">
import { ElSwitch, ElSlider } from "element-plus";
import Row from "@/components/Row/index.vue";

const list = ref({
  show: false,
  x: 0,
  y: 0,
});
</script>

<style scoped lang="scss">
main {
  padding: 0 1.5rem;
  grid-area: Content;
}
</style>
