<template>
  <button class="MyButton">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.MyButton {
  background-color: #373737;
  padding: 0.3rem 2.2rem;
  border-radius: 5px;
  border: 1.5px solid #3a3a3a;
  border-top-color: #3f3f3f;
  transition: 0.15s;

  &:hover {
    background-color: #3c3c3c;
  }
}
</style>
