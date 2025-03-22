import { contextBridge, shell } from "electron";
import getFileIcon from "extract-file-icon";
import { ipcRenderer } from "../api/ipcRenderer";

const api = {
  //获取图标
  getIcon(path: string) {
    const base64 = getFileIcon(path, 48).toString("base64");
    return `data:image/png;base64,${base64}`;
  },

  //打开文件
  openPath(path: string) {
    shell.openPath(path);
  },

  //打开网页
  openUrl(url: string) {
    shell.openExternal(url);
  },
};

export type Api = typeof api;

contextBridge.exposeInMainWorld("api", api);

contextBridge.exposeInMainWorld("ipcRenderer", {
  send: ipcRenderer.send,
  on: ipcRenderer.on,
  invoke: ipcRenderer.invoke,
});
