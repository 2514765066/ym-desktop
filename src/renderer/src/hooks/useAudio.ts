import { useMusicStore } from "@/stores/useMusicStore";

const data = ref<number[]>([]);

export const useAudio = () => {
  const musicStore = storeToRefs(useMusicStore());

  let isInit = false;
  let analyser: AnalyserNode;
  let buffer: Uint8Array;

  (async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    if (isInit) return;

    isInit = true;

    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaStreamSource(stream);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    buffer = new Uint8Array(analyser.frequencyBinCount);
    source.connect(analyser);
  })();

  const update = () => {
    if (!musicStore.data.value.show) {
      return;
    }

    requestAnimationFrame(update);

    if (!isInit) {
      return;
    }

    analyser.getByteFrequencyData(buffer);

    const res: number[] = [];

    for (let i = 0; i < buffer.length; i++) {
      res[i] = buffer[i];
    }

    const ratio = Number((musicStore.data.value.height / 256).toFixed(1));

    data.value = res.map(item => {
      const val = item * ratio;

      if (val < musicStore.data.value.barWidth) {
        return musicStore.data.value.barWidth;
      }

      if (val > musicStore.data.value.height) {
        return musicStore.data.value.height;
      }

      return val;
    });
  };

  watchEffect(() => {
    if (musicStore.data.value.show) {
      update();
    }
  });

  return {
    audio: data,
  };
};
