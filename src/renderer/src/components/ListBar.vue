<template>
  <section class="h g-1 h-100 pl-1r">
    <router-link
      v-for="{ label, to } of list"
      :key="label"
      :to="to"
      class="v-n-c pl-1r fs-14 p-r"
      :class="{ active: route.path.includes(to) }"
    >
      {{ label }}
    </router-link>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();

const list = [
  {
    label: "任务栏",
    to: "/manage/taskbar",
  },
  {
    label: "桌面时钟",
    to: "/manage/clock",
  },
  {
    label: "可视化音频",
    to: "/manage/music",
  },
  {
    label: "关于",
    to: "/manage/about",
  },
];
</script>

<style scoped lang="scss">
section {
  grid-area: ListBar;

  a {
    transition: 0.15s;
    height: 34px;
    border-radius: 0.3rem;
    color: #9b9b9b;

    &:hover {
      background-color: #2d2d2d;
      color: #fff;
    }

    &::before {
      left: 0;
      position: absolute;
      display: none;
      content: "";
      width: 3.5px;
      height: 1rem;
      border-radius: 4px;
      background-color: #bdbbe6;
    }
  }
}

.active {
  background-color: #2d2d2d;
  color: #fff;

  &::before {
    display: block;
  }
}
</style>
