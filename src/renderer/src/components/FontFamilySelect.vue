<template>
  <el-select v-model="model" filterable>
    <el-option v-for="item in data" :key="item" :label="item" :value="item">
      <div class="wh-100 v-n-c">
        <span class="fs-20" :style="{ fontFamily: item }">05:20</span>
        <span class="fs-12 ml-1r">{{ item }}</span>
      </div>
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ElSelect, ElOption } from "element-plus";
import { useFontFamilyStore } from "@/stores/useFontFamilyStore";

const { data } = storeToRefs(useFontFamilyStore());

const model = defineModel<string>();
</script>

<style scoped lang="scss"></style>
