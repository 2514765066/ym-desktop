<template>
  <el-alert
    title="本软件仅供学习参考，禁止商用"
    type="info"
    show-icon
    class="f-s-0"
  />

  <Row label="版本号" des="当前软件的版本号">
    <span class="fs-14 c-ccc mr-2">正式版 {{ version }}</span>

    <template #icon>
      <img src="@/assets/svg/Info.svg" width="25" />
    </template>
  </Row>

  <Row label="手动更新" des="进入Github手动更新">
    <MyButton @click="handleUpdate">检查更新</MyButton>

    <template #icon>
      <img src="@/assets/svg/Cloud.svg" width="25" />
    </template>
  </Row>

  <Row label="官网" des="进入Github的代码存储">
    <MyButton @click="handleCode">查看</MyButton>

    <template #icon>
      <img src="@/assets/svg/Cloud.svg" width="25" />
    </template>
  </Row>
</template>

<script setup lang="ts">
import { ElAlert } from "element-plus";
import MyButton from "@/components/MyButton.vue";
import Row from "@/components/Row.vue";
import { version } from "@/hooks/useVersion";

const handleUpdate = () => {
  electron.ipcRenderer.send(
    "openURL",
    "https://github.com/2514765066/ym-desktop/releases"
  );
};

const handleCode = () => {
  electron.ipcRenderer.send(
    "openURL",
    "https://github.com/2514765066/ym-desktop"
  );
};
</script>

<style scoped lang="scss"></style>
