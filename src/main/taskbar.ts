import { join } from "path";
import { createWindow, onMounted } from "ym-electron.js";
import { usePosition } from "../api/position";

onMounted(() => {
  const win = createWindow("taskbar", {
    // devTool: true,
    frame: false,
    transparent: true,
    resizable: false,
    skipTaskbar: true,
    render: {
      dev: {
        url: `${process.env["ELECTRON_RENDERER_URL"]}/#/taskbar`,
      },
      dep: {
        hash: "taskbar",
        path: join(__dirname, "../renderer/index.html"),
      },
    },
    webPreferences: {
      preload: join(__dirname, "../preload/index.mjs"),
      sandbox: false,
    },
  });

  usePosition("taskbar", () => {
    win.expandCenter({
      horizontal: true,
    });
  });
});
