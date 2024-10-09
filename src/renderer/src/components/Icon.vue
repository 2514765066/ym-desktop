<template>
  <section
    class="p-r v-c-n click"
    :class="{ active: isEidt }"
    @contextmenu="handleContextMenu"
  >
    <img
      :src="src"
      @click="openPath"
      @mouseenter="disabled = true"
      @mouseleave="disabled = false"
    />

    <icon-tip
      :offset="taskbarConfig.data.iconsTipPosition"
      :label="data.name"
      :visible="visible"
      :max="10"
      @blur="handleRename"
    />
  </section>
</template>

<script setup lang="ts">
import IconTip from "@/components/IconTip.vue";
import { Icon } from "@type";
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

//处理右键
const handleContextMenu = () => {
  if (selectedID.value == props.data.id) {
    selectedID.value = "";
    return;
  }

  selectedID.value = props.data.id;
};

//重命名
const handleRename = (newName: string) => {
  if (props.data.name == newName) {
    return;
  }

  rename(props.index, newName);
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
