<template>
  <section>
    <div class="v-n-c g-1r">
      <router-link :to="homeRoute.path" :class="{ active: inHome }">
        {{ homeRoute.meta.label }}
      </router-link>

      <img src="@/assets/svg/arrowRight.svg" width="22" v-show="!inHome" />

      <span v-show="!inHome" :class="{ active: !inHome }">
        {{ route.meta.label }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();

const homeRoute = computed(() => {
  const res = route.path
    .split("/")
    .filter(item => item)
    .slice(0, 2);

  return router.getRoutes().find(({ path }) => {
    return path == `/${res.join("/")}/home`;
  })!;
});

const inHome = computed(() => {
  return route.meta.label == homeRoute.value.meta.label;
});
</script>

<style scoped lang="scss">
section {
  grid-area: Breadcrumb;
  padding: 0 1.5rem;

  > div {
    > span,
    a {
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
