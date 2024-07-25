import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
import { EventNames, Icons } from "../type";
import { readFile, readdir, writeFile, rename, unlink } from "fs/promises";
import { config, icons } from "../hooks/usePath";
import { extname, join } from "path";
import getFileIcon from "extract-file-icon";

type ConfigNames = "taskbar" | "clock" | "icons";

const api = {
  //最小化
  minimize() {
    // @ts-ignore
    ipcRenderer.send<EventNames>("minimize");
  },

  //最大化还原
  maximize() {
    // @ts-ignore
    ipcRenderer.send<EventNames>("maximize");
  },

  //关闭
  close() {
    // @ts-ignore
    ipcRenderer.send<EventNames>("close");
  },

  //读取配置
  async getConfig(name: ConfigNames) {
    const path = join(config, `${name}.json`);

    const res = await readFile(path);

    return JSON.parse(res.toString());
  },

  //读取图标
  async getIcons() {
    const res: Icons = [];

    const dir = await readdir(icons);

    for (const name of dir) {
      const path = join(icons, name);

      const base64 = getFileIcon(path, 48).toString("base64");

      res.push({
        name: name.split(".")[0],
        path,
        src: `data:image/png;base64,${base64}`,
      });
    }

    res.push({
      name: "",
      path: "",
      src: "",
    });

    return res;
  },

  //写入配置
  async writeConfig(name: ConfigNames, data: any) {
    const path = join(config, `${name}.json`);

    await writeFile(path, JSON.stringify(data, null, 2));
  },

  //重命名图标
  async renameIcon(oldPath: string, newName: string) {
    const ext = extname(oldPath);
    const newPath = join(icons, `${newName}${ext}`);

    await rename(oldPath, newPath);
  },

  //删除图标
  async removeIcon(path: string) {
    await unlink(path);
  },
};

export type Api = typeof api;

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
