<template>
  <el-select v-model="model">
    <el-option
      v-for="{ label, value, style } in data"
      :key="value"
      :label="label"
      :value="value"
    >
      <div class="wh-100 v-sb-c">
        <span class="fs-16">{{ style }}</span>
        <span class="fs-12">{{ label }}</span>
      </div>
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ElSelect, ElOption } from "element-plus";
import { replaceMonthString } from "@/hooks/useDate";

const model = defineModel<string>();

const data = [
  {
    label: "汉语",
    style: replaceMonthString("chinese"),
    value: "chinese",
  },
  {
    label: "数字",
    style: replaceMonthString("number"),
    value: "number",
  },
  {
    label: "英文",
    style: replaceMonthString("english"),
    value: "english",
  },
];
</script>

<style scoped lang="scss"></style>
