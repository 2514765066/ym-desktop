export const isFullScreen = ref(false);

export const close = () => {
  api.close();
};

export const maximize = () => {
  api.maximize();
};

export const minimize = () => {
  api.minimize();
};

electron.ipcRenderer.on("is:maximize", (_, res: boolean) => {
  isFullScreen.value = res;
});

//重置窗口位置
export const handleResetPositon = (name: string) => {
  electron.ipcRenderer.send("center", name, {
    horizontal: true,
    vertical: true,
  });
};
