import { ipcMain } from "./ipcMain";
import { execSync } from "child_process";
import { browserWindows } from "./windows";
import { BrowserWindow } from "electron";
import { createTaskbar } from "../main/taskbar";
import { write, read } from "./fs";
import { setSize } from "ym-electron.js";

//鼠标是否穿透窗口
ipcMain.on("ignoreMouseEvents", ({ sender }, option) => {
  const win = BrowserWindow.fromWebContents(sender)!;

  win.setIgnoreMouseEvents(option, {
    forward: true,
  });
});

//修改宽高
ipcMain.on("setSize", ({ sender }, option) => {
  const win = BrowserWindow.fromWebContents(sender)!;

  setSize(win, option);
});

//重置位置
ipcMain.on("resetPosition", (_, name) => {
  const win = browserWindows.get(name);

  if (!win) return;

  win.setPosition(0, 0);
});

//读取配置
ipcMain.handle("readConfig", async (_, name) => {
  return await read(name);
});

//写入配置
ipcMain.on("wrtieConfig", async (_, name, data) => {
  await write(name, data);
});

//获取快捷方式的目标路径
ipcMain.handle("shortcutTarget", (_, path) => {
  if (!path.includes(".lnk")) {
    return path;
  }

  const normalizedPath = path.replace(/\\/g, "\\\\");

  const command = `wmic path Win32_ShortcutFile where "name='${normalizedPath}'" get Target`;

  const output = execSync(command).toString();

  return output.split("\n")[1].trim();
});

//发送消息到taskbar窗口
ipcMain.on("toTaskbar", async (_, data, visible) => {
  let win = browserWindows.get("taskbar");

  if (!visible && !win) {
    return;
  }

  if (!visible && win) {
    win.close();
    return;
  }

  if (!win) {
    win = await createTaskbar();
  }

  win.webContents.postMessage("toTaskbar", data);
});
