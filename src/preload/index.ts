import { contextBridge, ipcRenderer, shell } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
import { EventNames, ConfigNames } from "../type";
import { readFile, writeFile } from "fs/promises";
import { config } from "../hooks/usePath";
import { join } from "path";
import getFileIcon from "extract-file-icon";

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

  //写入配置
  async writeConfig(name: ConfigNames, data: any) {
    const path = join(config, `${name}.json`);

    await writeFile(path, JSON.stringify(data, null, 2));
  },

  //获取图标
  getIcon(path: string) {
    const base64 = getFileIcon(path, 48).toString("base64");
    return `data:image/png;base64,${base64}`;
  },

  //打开文件
  openPath(path: string) {
    shell.openPath(path);
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
