<template>
  <el-tooltip :content="version" :hide-after="0">
    <section class="Logo v-n-c">
      <img src="@/assets/icon.png" width="20px" />

      <span class="c-ccc ml-2 fs-18">ym-desktop</span>
    </section>
  </el-tooltip>
</template>

<script setup lang="ts">
import { ElTooltip } from "element-plus";

const version = `v${__APP_VERSION__}`;
</script>

<style scoped lang="scss">
.Logo {
  > span {
    font-family: logo;
  }
}
</style>
