import { createWindow, onMounted, windows } from "ym-electron.js";
import { EventNames } from "../type";
import { join } from "path";

onMounted(() => {
  const win = createWindow("manage", {
    // x: 3000,
    // y: -100,
    // devTool: true,
    frame: false,
    show: false,
    render: {
      dev: {
        url: `${process.env["ELECTRON_RENDERER_URL"]}/#/manage`,
      },
      dep: {
        hash: "manage",
        path: join(__dirname, "../renderer/index.html"),
      },
    },

    webPreferences: {
      preload: join(__dirname, "../preload/index.mjs"),
      sandbox: false,
    },
  });

  win.setSize(1200, 900);

  win.on("maximize", () => {
    win.webContents.send<EventNames>("is:maximize", true);
  });

  win.on("unmaximize", () => {
    win.webContents.send<EventNames>("is:maximize", false);
  });

  //解决窗口拖动跟忽略鼠标事件的bug
  win.on("move", () => {
    windows.get("taskbar")!.setIgnoreMouseEvents(false);
    windows.get("clock")!.setIgnoreMouseEvents(false);
  });
});
