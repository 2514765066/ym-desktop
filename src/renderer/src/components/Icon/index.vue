<template>
  <section
    class="p-r v-c-n"
    @contextmenu="handleRemove"
    @mouseup="handleAddSplit"
  >
    <el-tooltip
      effect="light"
      placement="top"
      :hide-after="150"
      :offset="taskbarConfig.data.value.iconsTipPosition"
      :disabled="disabled"
      @hide="handleRename"
    >
      <img :src="data.src" class="click" />

      <template #content>
        <el-input
          ref="rename_input"
          size="small"
          style="width: 80px"
          v-model="name"
          v-if="isRename"
        ></el-input>

        <span @dblclick="handleDblclick" v-else>
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

const taskbarConfig = storeToRefs(useTaskbarStore());
const { remove, rename, addSplit } = useIconsStore();

const props = defineProps<{
  data: Icon;
}>();

//输入框的实例
const rename_input = ref();

//是否进入重命名
const isRename = ref(false);

//新名称
const name = ref(props.data.name);

//提示信息是否显示
const disabled = computed(() => {
  return !taskbarConfig.data.value.iconsTipShow || !props.data.src;
});

//双击进入重命名
const handleDblclick = () => {
  isRename.value = true;

  nextTick(() => {
    rename_input.value.focus();
  });
};

//重命名
const handleRename = () => {
  if (!isRename.value) return;

  isRename.value = false;
  rename(props.data.name, name.value);
};

//移除
const handleRemove = () => {
  remove(props.data.name);
};

//处理添加分隔符
const handleAddSplit = (e: MouseEvent) => {
  if (e.button == 1) {
    addSplit(props.data.name);
  }
};
</script>

<style scoped lang="scss">
section {
  min-width: 5px;

  > img[src=""] {
    border-radius: 1px;
    width: 1.5px;
    height: calc(var(--iconsSize) * 0.9);
    background-color: var(--splitColor);
  }

  > img:not([src=""]) {
    width: var(--iconsSize);
    height: var(--iconsSize);
    -webkit-box-reflect: var(--iconsShadow);
    transition: 0.15s;

    &:hover {
      transform: scale(1.3);
    }
  }
}
</style>
