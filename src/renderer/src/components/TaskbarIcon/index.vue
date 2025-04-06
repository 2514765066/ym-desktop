<template>
  <section
    class="relative shrink-0 rounded flex justify-center"
    :class="{ active: selectedID == data.id }"
    @contextmenu="handleContextMenu"
  >
    <img
      :src="data.pic"
      class="cursor-pointer"
      :class="{ 'taskbar-shadow': taskbarOption.iconShadow }"
      @click="openPath"
    />

    <div
      class="absolute rounded-md py-1.5 px-2 flex justify-center opacity-0 pointer-events-none"
      :class="{ isEdit: selectedID == data.id }"
      v-if="taskbarOption.iconTipShow"
    >
      <span
        class="text-xs whitespace-nowrap"
        spellcheck="false"
        ref="textRef"
        :contenteditable="selectedID == data.id"
        @blur="handleRename"
      >
        {{ data.name }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconOption } from "@type";
import { useTaskbarStore } from "@/stores/useTaskbarStore";
import { useIconStore } from "@/stores/useIconStore";

const { taskbarOption } = storeToRefs(useTaskbarStore());
const { renameIcon } = useIconStore();
const { selectedID } = storeToRefs(useIconStore());

const props = defineProps<{
  data: IconOption;
}>();

const textRef = ref<HTMLElement>();

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
  if (!textRef.value) {
    return;
  }

  const newName = textRef.value.textContent;

  if (!newName) {
    textRef.value.textContent = props.data.name;
    return;
  }

  if (newName == props.data.name) {
    return;
  }

  renameIcon(newName);
};

//打开文件
const openPath = () => {
  api.openPath(props.data.path);
};
</script>

<style scoped lang="scss">
section {
  > img {
    width: calc(v-bind("taskbarOption.iconSize") * 1px);

    aspect-ratio: 1/1;

    transition: 0.1s;

    &:hover {
      transform: scale(1.3);

      + div {
        opacity: 1;
      }
    }
  }

  > div {
    bottom: calc(v-bind("taskbarOption.iconSize") * 1.5px);

    color: v-bind("taskbarOption.iconTipFontColor");
    background-color: v-bind("taskbarOption.iconTipBackgroundColor");

    transition: 0.1s;

    &::before {
      display: block;
      content: "";
      bottom: -4px;
      transform: rotate(45deg);
      position: absolute;
      display: block;
      width: 8px;
      height: 8px;
      background-color: v-bind("taskbarOption.iconTipBackgroundColor");
    }
  }
}

.active {
  outline: 2px solid #409eff;
  outline-offset: 2px;

  > img {
    &:hover {
      transform: scale(1);
    }
  }
}

.isEdit {
  opacity: 1;
  pointer-events: initial;
}
</style>
