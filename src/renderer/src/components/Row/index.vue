<template>
  <section class="row v-n-c">
    <slot name="icon"></slot>

    <span class="c-fff fs-14 ml-1r mr">{{ label }}</span>

    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<style scoped lang="scss">
.row {
  padding: 0 1rem;
  height: 60px;
  background-color: #2d2d2d;
  border-radius: 0.3rem;
}
</style>
