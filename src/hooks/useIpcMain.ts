import { ipcMain as ipcMain1, IpcMainEvent } from "electron";
import { EventNames } from "../type";

type IpcMainHandler = (event: IpcMainEvent, ...args: any[]) => void;

class IpcMainWrapper {
  on(event: EventNames, listener: IpcMainHandler) {
    ipcMain1.on(event, listener);
  }
}

export const ipcMain = new IpcMainWrapper();
