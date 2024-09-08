<template>
  <main class="wh-100 p-r">
    <span class="p-a" ref="elTime">{{ time }}</span>
    <span class="p-a" ref="elDay">{{ nowDate.day }}</span>
    <span class="p-a" ref="elMonth">{{ month }}</span>
  </main>
</template>

<script setup lang="ts">
import { useClockStore } from "@/stores/useClockStore";
import {
  replaceTimeString,
  replaceMonthString,
  nowDate,
} from "@/hooks/useDate";
import { getMinBoundingRect } from "@/hooks/useMinBoundingRect";

const { data } = storeToRefs(useClockStore());

const time = computed(() => replaceTimeString(data.value.timeStyle));
const month = computed(() => replaceMonthString(data.value.monthStyle));

const elTime = ref<HTMLElement>();
const elDay = ref<HTMLElement>();
const elMonth = ref<HTMLElement>();

//监视动态设置宽高
watch(
  [data, nowDate],
  () => {
    nextTick(() => {
      const { width, height } = getMinBoundingRect(
        elTime.value!,
        elDay.value!,
        elMonth.value!
      );

      electron.ipcRenderer.send("setSize", width + 20, height + 20);
    });
  },
  {
    deep: true,
  }
);

//鼠标穿透
watchEffect(() => {
  electron.ipcRenderer.send("ignoreMouseEvents", !data.value.move);
});
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  --move: v-bind("data.move? 'drag':'no-drag'");
  --timeX: calc(v-bind("data.timeX") * 1px);
  --timeY: calc(v-bind("data.timeY + data.timeSize/2") * 1px);
  --timeSize: calc(v-bind("data.timeSize") * 1px);
  --timeFamily: v-bind("data.timeFamily");
  --timeColor: v-bind("data.timeColor");

  --dayX: calc(v-bind("data.dayX") * 1px);
  --dayY: calc(v-bind("data.dayY + data.daySize/2") * 1px);
  --daySize: calc(v-bind("data.daySize") * 1px);
  --dayFamily: v-bind("data.dayFamily");
  --dayColor: v-bind("data.dayColor");

  --monthX: calc(v-bind("data.monthX") * 1px);
  --monthY: calc(v-bind("data.monthY + data.monthSize/2") * 1px);
  --monthSize: calc(v-bind("data.monthSize") * 1px);
  --monthFamily: v-bind("data.monthFamily");
  --monthColor: v-bind("data.monthColor");

  * {
    -webkit-app-region: var(--move);
  }

  > span:nth-child(1) {
    left: var(--timeX);
    top: var(--timeY);
    font-size: var(--timeSize);
    font-family: var(--timeFamily);
    height: var(--timeSize);
    color: var(--timeColor);
  }

  > span:nth-child(2) {
    left: var(--dayX);
    top: var(--dayY);
    font-size: var(--daySize);
    font-family: var(--dayFamily);
    height: var(--daySize);
    color: var(--dayColor);
  }

  > span:nth-child(3) {
    left: var(--monthX);
    top: var(--monthY);
    font-size: var(--monthSize);
    font-family: var(--monthFamily);
    height: var(--monthSize);
    color: var(--monthColor);
  }
}
</style>
