<template>
  <section
    class="rounded p-0.5 cursor-pointer"
    :class="{ active: selectedID == data.id }"
    @contextmenu="handleContextMenu"
  >
    <div></div>
  </section>
</template>

<script setup lang="ts">
import { IconOption } from "@type";
import { useTaskbarStore } from "@/stores/useTaskbarStore";
import { useIconStore } from "@/stores/useIconStore";

const { taskbarOption } = storeToRefs(useTaskbarStore());
const { selectedID } = storeToRefs(useIconStore());

const props = defineProps<{
  data: IconOption;
}>();

//处理右键
const handleContextMenu = () => {
  if (selectedID.value == props.data.id) {
    selectedID.value = "";
    return;
  }

  selectedID.value = props.data.id;
};
</script>

<style scoped lang="scss">
section {
  > div {
    width: 2px;
    border-radius: 2px;
    height: calc(v-bind("taskbarOption.iconSize") * 1px);
    background-color: v-bind("taskbarOption.splitColor");
  }
}

.active {
  outline: 2px solid #409eff;
  outline-offset: 2px;
}
</style>
