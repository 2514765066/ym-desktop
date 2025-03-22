import { IpcEvent } from "../type";
import { IpcRendererWrapper } from "ym-electron.js";

export const ipcRenderer = new IpcRendererWrapper<IpcEvent>();

export type IpcRenderer = typeof ipcRenderer;
