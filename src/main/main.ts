import { isDev } from "ym-electron.js";
import { join } from "path";
import { BrowserWindow } from "electron";
import { browserWindows } from "../api/windows";

export const createMain = async () => {
  const bw = new BrowserWindow({
    show: false,
    width: 1200,
    height: 900,
    minWidth: 1000,
    minHeight: 750,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      symbolColor: "#d4d4d4",
      color: "rgba(0,0,0,0)",
      height: 44,
    },

    webPreferences: {
      preload: join(__dirname, "../preload/index.mjs"),
      sandbox: false,
      devTools: isDev(),
    },
  });

  //解决窗口拖动跟忽略鼠标事件的bug
  bw.on("move", () => {
    const win = browserWindows.get("taskbar");

    if (!win) return;

    win.setIgnoreMouseEvents(false);
  });

  bw.on("close", e => {
    e.preventDefault();
    bw.hide();
  });

  browserWindows.set("manage", bw);

  if (isDev() && process.env["ELECTRON_RENDERER_URL"]) {
    bw.webContents.openDevTools({ mode: "detach" });
    await bw.loadURL(`${process.env["ELECTRON_RENDERER_URL"]}/#/manage`);
  } else {
    await bw.loadFile(join(__dirname, "../renderer/index.html"), {
      hash: "manage",
    });
  }

  // bw.show();

  return bw;
};
