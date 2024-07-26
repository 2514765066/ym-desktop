<template>
  <section
    class="p-r v-c-n click"
    :class="{ active: isEidt }"
    @contextmenu="handleContextMenu"
  >
    <el-tooltip
      effect="light"
      placement="top"
      :hide-after="100"
      :offset="taskbarConfig.data.iconsTipPosition"
      :visible="visible"
      @hide="handleRename"
    >
      <img
        :src="src"
        @click="openPath"
        @mouseenter="disabled = true"
        @mouseleave="disabled = false"
      />

      <template #content>
        <el-input
          size="small"
          style="width: 80px"
          v-model="newName"
          v-if="isEidt"
          maxlength="10"
        ></el-input>

        <span v-else style="margin: 0 6px">
          {{ data.name }}
        </span>
      </template>
    </el-tooltip>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@type";
import { ElTooltip, ElInput } from "element-plus";
import { useIconsStore } from "@/stores/useIconsStore";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const taskbarConfig = useTaskbarStore();
const { rename } = useIconsStore();
const { selectedID } = storeToRefs(useIconsStore());

const props = defineProps<{
  data: Icon;
  index: number;
}>();

//是否进入编辑模式
const isEidt = computed(() => {
  return selectedID.value == props.data.id;
});

//提示是否可见配置
const disabled = ref(false);

//提示是否可见
const visible = computed(() => {
  if (props.data.isSplit) {
    return false;
  }

  if (taskbarConfig.data.iconsTipShow) {
    return isEidt.value || disabled.value;
  }

  return false;
});

//图标
const src = ref(props.data.isSplit ? "" : api.getIcon(props.data.path));

//新名称
const newName = ref(props.data.name);

//处理右键
const handleContextMenu = () => {
  if (selectedID.value == props.data.id) {
    selectedID.value = "";
    return;
  }

  selectedID.value = props.data.id;
};

//重命名
const handleRename = () => {
  if (props.data.name == newName.value) {
    return;
  }

  rename(props.index, newName.value);
};

//打开文件
const openPath = () => {
  api.openPath(props.data.path);
};
</script>

<style scoped lang="scss">
section {
  padding: 2px;
  border: 2px solid transparent;

  > img[src=""] {
    width: 2px;
    border-radius: 2px;
    height: calc(var(--iconsSize) * 0.9);
    background-color: var(--splitColor);
  }

  > img:not([src=""]) {
    width: calc(var(--iconsSize) - 8px);
    height: calc(var(--iconsSize) - 8px);
    -webkit-box-reflect: var(--iconsShadow);
    transition: 0.15s;

    &:hover {
      transform: scale(1.3);
    }
  }

  &:is(.active) {
    border-color: #409eff;
    border-radius: 5px;

    > img {
      &:hover {
        transform: scale(1);
      }
    }
  }
}
</style>
