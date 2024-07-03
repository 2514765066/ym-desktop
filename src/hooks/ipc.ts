import { windows } from "ym-electron.js";
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

//更新配置
ipcMain.on("update:config", (_, name: string, data: any) => {
  windows.get(name)?.webContents.send<EventNames>("update:config", data);
});
