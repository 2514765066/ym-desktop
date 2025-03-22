<template>
  <button
    ref="el"
    class="text-sm cursor-pointer text-color"
    :class="{ active: isEdit }"
    @focus="focus"
    @blur="blur"
  >
    {{ isEdit ? "按下按键" : key }}
  </button>
</template>

<script setup lang="ts">
//传递过来的按键名称
const model = defineModel<string>();

const key = computed(() => {
  switch (model.value) {
    case " ":
      return "空格";
    case "Control":
      return "Ctrl";
    case "ArrowUp":
      return "方向上";
    case "ArrowDown":
      return "方向下";
    case "ArrowLeft":
      return "方向左";
    case "ArrowRight":
      return "方向右";
  }

  return model.value;
});

//button元素
const el = ref<HTMLElement>();

//是否编辑
const isEdit = ref(false);

const handle = ({ key }: KeyboardEvent) => {
  model.value = key;
  el.value!.blur();
};

const focus = () => {
  isEdit.value = true;
  el.value!.addEventListener("keydown", handle);
};

const blur = () => {
  isEdit.value = false;
  el.value!.removeEventListener("keydown", handle);
};
</script>

<style scoped lang="scss">
button {
  width: 100px;
  height: 30px;
  transition: 0.15s;

  border-radius: 0.3rem;
  background-color: #272727;
  border: 1px solid #454545;
}
</style>
