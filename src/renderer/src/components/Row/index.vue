<template>
  <router-link v-if="to" :to="to" class="row v-n-c">
    <slot name="icon">
      <img src="@/assets/restore.svg" width="20" />
    </slot>

    <div class="ml-1r mr h-n-c g-1">
      <span class="c-fff fs-14 l-h-14">{{ label }}</span>
      <span class="c-ccc fs-12 l-h-12">{{ des }}</span>
    </div>

    <img src="@/assets/arrowRight.svg" width="20" />
  </router-link>

  <section class="row v-n-c" v-else>
    <slot name="icon">
      <img src="@/assets/restore.svg" width="20" />
    </slot>

    <div class="ml-1r mr h-n-c g-1">
      <span class="c-fff fs-14 l-h-14">{{ label }}</span>
      <span class="c-ccc fs-12 l-h-12">{{ des }}</span>
    </div>

    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  to?: string;
  label: string;
  des?: string;
}>();
</script>

<style scoped lang="scss">
.row {
  padding: 0 1rem;
  height: 65px;
  background-color: #2d2d2d;
  border-radius: 0.3rem;
}
</style>
