<template>
  <section>
    <div class="v-n-c g-1r">
      <span @click="go('/manage/taskbar')">主页</span>
      <img src="@/assets/arrowRight.svg" width="22" />
      <span class="active">图标</span>
    </div>
  </section>
</template>

<script setup lang="ts">
const router = useRouter();

const go = (path: string) => {
  router.push(path);
};
</script>

<style scoped lang="scss">
section {
  grid-area: Breadcrumb;
  padding: 0 1.5rem;

  > div {
    > span {
      font-size: 26px;
      color: #ccc;

      &:hover {
        color: #fff;
      }
    }

    .active {
      color: #fff;
    }
  }
}
</style>
