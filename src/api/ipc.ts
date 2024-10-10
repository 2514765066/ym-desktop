import { windows, fromWebContents } from "ym-electron.js";
import { ipcMain } from "./ipcMain";
import { EventNames } from "../type";
import { readJson, writeJson } from "../api/fs";
import { execSync } from "child_process";
import { shell } from "electron";

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
ipcMain.on("updateConfig", (_, name: string, data: any) => {
  const win = windows.get(name)!;

  win.webContents.send<EventNames>("updateConfig", data);
});

//修改宽高
ipcMain.on("setSize", (_, name: string, width: number, height: number) => {
  const win = windows.get(name)!;

  if (!win.resizable) {
    win.setResizable(true);
    win.setSize(width, height);
    win.setResizable(false);
    return;
  }

  win.setSize(width, height);
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

//读取配置
ipcMain.handle("readConfig", async (_, name: string) => {
  return await readJson(name);
});

//写入配置
ipcMain.handle("writeConfig", async (_, name: string, data: any) => {
  await writeJson(name, data);
  return true;
});

//获取快捷方式的目标路径
ipcMain.handle("shortcutTarget", (_, path: string) => {
  if (!path.includes(".lnk")) {
    return path;
  }

  const normalizedPath = path.replace(/\\/g, "\\\\");

  const command = `wmic path Win32_ShortcutFile where "name='${normalizedPath}'" get Target`;

  const output = execSync(command).toString();

  return output.split("\n")[1].trim();
});

//打开网页
ipcMain.on("openURL", (_, url: string) => {
  shell.openExternal(url);
});
