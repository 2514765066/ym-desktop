<template>
  <section class="p-r v-c-n">
    <el-tooltip
      effect="light"
      :hide-after="0"
      placement="top"
      :offset="taskbarConfig.data.value.iconsTipPosition"
      :disabled="!taskbarConfig.data.value.iconsTipShow"
    >
      <img :src="data.src" class="click handle" />

      <template #content>
        <span class="fs-12">{{ data.name }}</span>
        <!-- <el-button size="small" style="width: 56px" @click="isRename = true">
          重命名
        </el-button>

        <el-button
          size="small"
          type="danger"
          style="width: 56px"
          @click="remove(data.name)"
        >
          删除
        </el-button> -->
      </template>
    </el-tooltip>

    <!-- <span class="p-a">
      <span class="fs-12" v-if="!isRename">{{ data.name }}</span>
      <el-input
        size="small"
        placeholder="请输入名称"
        style="width: 130px"
        v-model="name"
        :autofocus="true"
        @blur="rename(data.name, name)"
        v-else
      />
    </span> -->
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@type";
import { ElPopover, ElButton, ElInput, ElTooltip } from "element-plus";
import { useIconsStore } from "@/stores/useIconsStore";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const props = defineProps<{
  data: Icon;
}>();

const taskbarConfig = storeToRefs(useTaskbarStore());
const { remove, rename } = useIconsStore();

const isRename = ref(false);

const name = ref(props.data.name);
</script>

<style scoped lang="scss">
section {
  > img {
    width: var(--iconsSize);
    height: var(--iconsSize);
    -webkit-box-reflect: var(--iconsShadow);
    transition: 0.15s;

    &:hover {
      transform: scale(1.3);
      & + span {
        display: var(--iconsTipShow);
      }
    }
  }

  > span {
    border-radius: 5px;
    display: v-bind("isRename?'block':'none'");
    bottom: var(--iconsTipPosition);
    background-color: #1d1e1f;
    padding: 5px 10px;
    white-space: nowrap;
    border: 1px solid #414243;
    box-shadow: 0 0 3px #1d1e1f;
  }
}
</style>
