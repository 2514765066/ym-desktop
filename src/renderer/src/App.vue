<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import eventEmitter from "@/hooks/eventEmitter";
import { ElMessage } from "element-plus";

eventEmitter.on("error:show", (message: string) => {
  ElMessage({
    message,
    type: "error",
    grouping: true,
  });
});

eventEmitter.on("success:show", (message: string) => {
  ElMessage({
    message,
    type: "success",
    grouping: true,
  });
});
</script>

<style lang="scss">
* {
  -webkit-app-region: no-drag;
}

#app {
  width: 100vw;
  height: 100vh;

  * {
    user-select: none;
  }
}

.c-ccc {
  color: #ccc;
}

.l-h-12 {
  line-height: 12px;
}

.l-h-14 {
  line-height: 14px;
}
</style>
