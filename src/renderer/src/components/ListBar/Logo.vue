<template>
  <section class="w-full h-11">
    <div class="flex items-center px-2">
      <img src="@icon" width="18px" />

      <span class="ml-2 text-color text-lg">{{ name }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/useAppStore";

const { name } = useAppStore();
</script>

<style scoped lang="scss">
section {
  -webkit-app-region: drag;

  > div {
    span {
      font-family: logo;
    }
  }
}
</style>
