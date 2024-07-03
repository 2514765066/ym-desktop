<template>
  <vue-draggable
    v-model="icons.data!"
    class="v-c-c taskbar"
    :animation="150"
    handle=".handle"
  >
    <section v-for="{ name, src } of icons.data" :key="name" class="p-r v-c-n">
      <img :src="src" class="click handle" />
      <span class="p-a fs-12">{{ name }}</span>
    </section>

    <!-- <aside></aside> -->
  </vue-draggable>
</template>

<script setup lang="ts">
import { VueDraggable } from "vue-draggable-plus";
import { useIconsStore } from "@/stores/useIconsStore";
import { useTaskbarStore } from "@/stores/useTaskbarStore";

const icons = useIconsStore();
const { data } = storeToRefs(useTaskbarStore());
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.taskbar {
  $move: v-bind("data.move? 'drag':'no-drag'");
  $height: calc(v-bind("data.height") * 1px);
  $borderRadius: calc(v-bind("data.borderRadius") * 1px);
  $backgroundColor: v-bind("data.backgroundColor");
  $iconsSize: calc(v-bind("data.iconsSize") * 1px);
  $iconsGap: calc(v-bind("data.iconsGap") * 1px);
  $iconsTipPosition: calc(v-bind("data.iconsTipPosition") * 1px);
  $iconsTipShow: v-bind("data.iconsTipShow? 'block':'none'");
  $splitColor: v-bind("data.splitColor");
  $iconsShadow: v-bind(
    "data.iconsShadow?'below 5px linear-gradient(to bottom, transparent 45%, rgba(0, 0, 0, 0.7))':'none'"
  );

  -webkit-app-region: $move;

  padding: 0 $iconsGap;
  height: $height;
  border-radius: $borderRadius;
  background-color: $backgroundColor;
  gap: $iconsGap;

  > section {
    > img {
      width: $iconsSize;
      height: $iconsSize;
      -webkit-box-reflect: $iconsShadow;
      transition: 0.15s;

      &:hover {
        transform: scale(1.3);
        & + span {
          display: $iconsTipShow;
        }
      }
    }

    > span {
      border-radius: 5px;
      display: none;
      bottom: $iconsTipPosition;
      background-color: #1d1e1f;
      padding: 5px 10px;
      white-space: nowrap;
      border: 1px solid #414243;
      box-shadow: 0 0 3px #1d1e1f;
    }
  }

  > aside {
    width: 1px;
    height: $iconsSize;
    background-color: $splitColor;
  }
}
</style>
