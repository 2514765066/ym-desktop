<template>
  <section class="group mb-8">
    <header class="h-12 flex items-center gap-2">
      <Icon :name="icon" size="16" color="#989898" v-if="icon"></Icon>

      <span class="text-xs">{{ title }}</span>
    </header>

    <ul class="flex flex-col gap-1.5">
      <slot></slot>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  icon?: string;
}>();
</script>

<style scoped lang="scss">
.group {
  > header {
    > span {
      color: #7f7f7f;
    }
  }
}
</style>
