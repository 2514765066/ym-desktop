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

//设置窗口位置
export const handleResetPositon = (name: string, x: number, y: number) => {
  electron.ipcRenderer.send("setPosition", name, x, y);
};

//
