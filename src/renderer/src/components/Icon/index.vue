<template>
  <section class="p-r v-c-n">
    <el-popover trigger="contextmenu">
      <template #reference>
        <img :src="data.src" class="click handle" />
      </template>
    </el-popover>

    <span class="p-a fs-12">{{ data.name }}</span>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@type";
import { ElPopover } from "element-plus";

defineProps<{
  data: Icon;
}>();
</script>

<style scoped lang="scss">
section {
  > img {
    width: var(--iconsSize);
    height: var(--iconsSize);
    -webkit-box-reflect: var(--iconsShadow);
    transition: 0.15s;

    &:hover {
      transform: scale(1.3);
      & + span {
        display: var(--iconsTipShow);
      }
    }
  }

  > span {
    border-radius: 5px;
    display: none;
    bottom: var(--iconsTipPosition);
    background-color: #1d1e1f;
    padding: 5px 10px;
    white-space: nowrap;
    border: 1px solid #414243;
    box-shadow: 0 0 3px #1d1e1f;
  }
}
</style>
