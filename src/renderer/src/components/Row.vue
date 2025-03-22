<template>
  <section class="flex items-center rounded-md h-16 px-4">
    <Icon :name="icon" size="25" color="#989898" />

    <div class="ml-4 mr-auto flex flex-col gap-1">
      <span class="text-color text-sm">{{ label }}</span>
      <span class="text-color text-xs">{{ des }}</span>
    </div>

    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  to?: string;
  label: string;
  des?: string;
  icon?: string;
}>();
</script>

<style scoped lang="scss">
section {
  background-color: #202020;
}
</style>
