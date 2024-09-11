<template>
  <div class="p-a v-c-e" @click="elText?.focus()">
    <span
      class="fs-12"
      contenteditable="true"
      ref="elText"
      spellcheck="false"
      @blur="emits('blur', elText?.textContent)"
      @input="handleInput"
    >
      {{ label }}
    </span>
    <span></span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    offset: number;
    label: string;
    visible: boolean;
    max?: number;
  }>(),
  {
    offset: 0,
    label: "",
    visible: true,
  }
);

const emits = defineEmits(["blur"]);

const elText = ref<HTMLElement>();

// 处理最大输入内容
const handleInput = () => {
  if (!elText.value || !props.max) {
    return;
  }

  const text = elText.value.textContent!;

  if (text.length > props.max) {
    const selection = window.getSelection()!;
    const range = selection.getRangeAt(0);
    const index = range.startOffset;

    elText.value.textContent = text.slice(0, index - 1) + text.slice(index);

    // 将光标移动到之前的插入点位置
    const newRange = document.createRange();
    newRange.setStart(elText.value.firstChild!, index - 1);
    newRange.collapse(true);
    selection.removeAllRanges();
    selection.addRange(newRange);
  }
};
</script>

<style scoped lang="scss">
div {
  --offset: calc(v-bind("props.offset") * 1px);
  --visible: v-bind("props.visible");
  $bg: #1d1e1f;
  $borderColor: #414243;

  display: v-bind("props.visible ?'flex':'none'");
  bottom: var(--offset);
  border-radius: 5px;
  background-color: $bg;
  padding: 4px 10px;
  min-height: 30px;
  cursor: text;
  border: 1px solid $borderColor;

  > span:last-child {
    bottom: -4px;
    transform: rotate(45deg);
    position: absolute;
    display: block;
    width: 8px;
    height: 8px;
    background-color: $bg;
    border: 1px solid transparent;
    border-right-color: $borderColor;
    border-bottom-color: $borderColor;
  }
}
</style>
