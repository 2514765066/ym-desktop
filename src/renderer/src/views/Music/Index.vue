<template>
  <main class="Music wh-100 v-c-c">
    <canvas ref="canvas"></canvas>
  </main>
</template>

<script setup lang="ts">
import { useMusicStore } from "@/stores/useMusicStore";
import { useAudio } from "@/hooks/useAudio";

const { audio } = useAudio();
const { data } = storeToRefs(useMusicStore());

const canvas = ref<HTMLCanvasElement>();

onMounted(() => {
  const ctx = canvas.value!.getContext("2d")!;

  function draw(arr: number[], color: string) {
    ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
    ctx.fillStyle = color;

    const width = data.value.barWidth;

    for (let i = 0; i < arr.length; i++) {
      const x = i * (width + data.value.barGap);
      const y = canvas.value!.height - arr[i];

      ctx.beginPath();
      ctx.roundRect(x, y, width, arr[i], width / 2);
      ctx.fill();
    }
  }

  watchEffect(() => {
    const arr1 = audio.value.slice(0, data.value.barCount);
    const arr2 = arr1.filter((_, index) => index % 2 == 0).reverse();
    const arr3 = arr1.filter((_, index) => index % 2 != 0);

    draw([...arr2, ...arr3], data.value.barColor);
  });

  //监视动态设置宽高
  watchEffect(() => {
    const width =
      data.value.barWidth * data.value.barCount +
      data.value.barGap * (data.value.barCount - 1);

    const height = data.value.height;

    canvas.value!.width = width;
    canvas.value!.height = height;

    electron.ipcRenderer.send("setSize", "music", width + 20, height + 3);
    electron.ipcRenderer.send("center", "music", {
      horizontal: true,
    });
  });
});

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

.Music {
  --move: v-bind(" data.move? 'drag':'no-drag'");

  * {
    -webkit-app-region: var(--move);
  }
}
</style>
