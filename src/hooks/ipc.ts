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
  win.close();
});

//鼠标是否穿透窗口
ipcMain.on("ignoreMouseEvents", ({ sender }, bool: boolean) => {
  const win = fromWebContents(sender);
  win.setIgnoreMouseEvents(bool, {
    forward: true,
  });
});

//更新配置
ipcMain.on("update:config", (_, name: string, data: any) => {
  windows.get(name)?.webContents.send<EventNames>("update:config", data);
});

//修改宽高
ipcMain.on("setSize", ({ sender }, width, height) => {
  const win = fromWebContents(sender);
  if (!win.resizable) {
    win.setResizable(true);
    win.setSize(width, height);
    win.setResizable(false);
    return;
  }

  win.setSize(width, height);
});
