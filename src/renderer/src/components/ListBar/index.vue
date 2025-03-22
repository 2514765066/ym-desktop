<template>
  <section class="list-bar flex flex-col items-center gap-1 p-2">
    <Logo />

    <Item title="任务栏" to="/manage/taskbar" icon="home" />

    <Item title="桌面时钟（废弃）" to="/manage" icon="home" />

    <Item title="可视化音频（废弃）" to="/manage" icon="home" />

    <div class="w-full mt-auto flex justify-end">
      <Tooltip content="版本，更新和更多...">
        <button
          class="rounded-md flex items-center justify-center w-7 h-7"
          ref="btnRef"
          @click="handleClick"
        >
          <Icon name="question" size="20" color="#989898"></Icon>
        </button>
      </Tooltip>
    </div>
  </section>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";
import Item from "./Item.vue";
import Tooltip from "@/lib/ToolTip/index.vue";
import eventEmitter from "@/hooks/eventEmitter";
import { useAppStore } from "@/stores/useAppStore";

const router = useRouter();
const { version } = useAppStore();

const btnRef = ref<HTMLElement>();

//点击帮助
const handleClick = () => {
  if (!btnRef.value) {
    return;
  }

  const rect = btnRef.value?.getBoundingClientRect();

  eventEmitter.emit("menu:show", {
    width: 220,
    x: rect.x + rect.width - 220,
    y: rect.y - rect.height - 32 * 4,
    data: [
      {
        children: [
          {
            title: "更新内容",
            icon: "book",
            onSelect() {
              router.push("/doc");
            },
          },
          {
            title: "版本更新",
            icon: "download",
            onSelect() {
              api.openUrl("https://github.com/2514765066/ym-desktop/releases");
            },
          },
          {
            title: "项目地址",
            icon: "github",
            onSelect() {
              api.openUrl("https://github.com/2514765066/ym-desktop");
            },
          },
        ],
      },
      {
        children: [
          {
            sub: `当前版本 ${version}`,
          },
        ],
      },
    ],
  });
};
</script>

<style scoped lang="scss">
.list-bar {
  grid-area: list-bar;

  border: 1.5px solid #2b2b2b;
  background-color: #202020;
}
</style>
