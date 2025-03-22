import { join } from "path";
import { isDev, getScreenSize } from "ym-electron.js";
import { browserWindows } from "../api/windows";
import { BrowserWindow } from "electron";
import { useTaskbarPosition } from "./taskbarPosition";

export const createTaskbar = async () => {
  const { width } = getScreenSize();

  const bw = new BrowserWindow({
    title: "ym-desktop",
    width,
    show: false,
    frame: false,
    transparent: true,
    resizable: false,
    skipTaskbar: true,

    webPreferences: {
      preload: join(__dirname, "../preload/index.mjs"),
      sandbox: false,
      devTools: isDev(),
    },
  });

  useTaskbarPosition(bw);

  browserWindows.set("taskbar", bw);

  bw.on("close", () => {
    browserWindows.delete("taskbar");
  });

  if (isDev() && process.env["ELECTRON_RENDERER_URL"]) {
    bw.webContents.openDevTools({ mode: "detach" });
    await bw.loadURL(`${process.env["ELECTRON_RENDERER_URL"]}/#/taskbar`);
  } else {
    await bw.loadFile(join(__dirname, "../renderer/index.html"), {
      hash: "taskbar",
    });
  }

  bw.show();

  return bw;
};
