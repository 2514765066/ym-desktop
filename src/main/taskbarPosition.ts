import { readPosition, writePosition } from "../api/fs";
import { onScreenResize, getScreenSize } from "ym-electron.js";
import { BrowserWindow } from "electron";
import { browserWindows } from "../api/windows";

export const useTaskbarPosition = async (bw: BrowserWindow) => {
  const taskbarPos = await readPosition("taskbar");
  const { width, height } = getScreenSize();
  const key = `${width}:${height}`;
  const position = taskbarPos[key] || [0, 0];

  bw.setPosition(position[0], position[1]);

  //居中
  const center = () => {
    //获取当前位置
    const bwPos = bw.getPosition();

    //设置要保存的位置
    taskbarPos[key] = [0, bwPos[1]];

    //设置窗口位置
    bw.setPosition(0, bwPos[1]);

    //写入
    writePosition("taskbar", taskbarPos);
  };

  const removeEvent = onScreenResize(() => {
    removeEvent();
    browserWindows.get("manage")?.webContents.send("reloadTaskbar");
  });

  bw.on("moved", center);
  bw.on("resized", center);
};
