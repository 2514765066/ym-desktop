<template>
  <div class="manage grid w-screen h-screen">
    <TitleBar />

    <ListBar />

    <Content>
      <RouterView />
    </Content>

    <Menu />
  </div>
</template>

<script setup lang="ts">
import TitleBar from "@/components/TitleBar/index.vue";
import ListBar from "@/components/ListBar/index.vue";
import Content from "@/components/Content/index.vue";
import { Menu } from "@/lib/Menu";
</script>

<style lang="scss">
.manage {
  grid-template-rows: 44px calc(100vh - 44px);
  grid-template-columns: 240px calc(100vw - 240px);

  grid-template-areas:
    "list-bar title-bar"
    "list-bar content";

  background-color: #191919;
}
</style>
