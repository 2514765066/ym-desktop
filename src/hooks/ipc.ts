import { windows, fromWebContents } from "ym-electron.js";
import { ipcMain } from "./useIpcMain";
import { EventNames } from "../type";

//最小化
ipcMain.on("minimize", () => {
  const win = windows.get("manage")!;
  win.minimize();
});

//最大化还原
ipcMain.on("maximize", () => {
  const win = windows.get("manage")!;
  win.isMaximized() ? win.restore() : win.maximize();
});

//关闭
ipcMain.on("close", () => {
  const win = windows.get("manage")!;
  win.hide();
});

//鼠标是否穿透窗口
ipcMain.on("ignoreMouseEvents", ({ sender }, option: boolean) => {
  const win = fromWebContents(sender);
  win.setIgnoreMouseEvents(option, {
    forward: true,
  });
});

//更新配置
ipcMain.on("update:config", (_, name: string, data: any) => {
  const win = windows.get(name)!;

  win.webContents.send<EventNames>("update:config", data);
});

//修改宽高
ipcMain.on("setSize", ({ sender }, width: number, height: number) => {
  const win = fromWebContents(sender);

  if (!win.resizable) {
    win.setResizable(true);
    win.setSize(width, height);
    win.setResizable(false);
    return;
  }

  win.setSize(width, height);
});

//修改位置
ipcMain.on("setPosition", (_, name: string, x: number, y: number) => {
  const win = windows.get(name)!;

  win.setPosition(x, y);
});

//显示隐藏
ipcMain.on("setVisible", (_, name: string, option: boolean) => {
  const win = windows.get(name)!;

  if (win.isVisible() && option == false) {
    win.hide();
    return;
  }

  if (!win.isVisible() && option == true) {
    win.show();
    return;
  }
});

//水平居中
ipcMain.on("center", (_, name: string, option) => {
  const win = windows.get(name)!;

  win.expandCenter(option);
});

//永久水平居中
const moveListeners = new Map<string, () => void>();

ipcMain.on("setEverCenter", (_, name: string, option: boolean) => {
  const win = windows.get(name)!;

  if (option && !moveListeners.has(name)) {
    const moveListener = () => {
      win.expandCenter({
        horizontal: true,
      });
    };

    moveListener();
    win.on("move", moveListener);
    moveListeners.set(name, moveListener);
    return;
  }

  if (!option && moveListeners.has(name)) {
    win.removeListener("move", moveListeners.get(name)!);
    moveListeners.delete(name);
  }
});
