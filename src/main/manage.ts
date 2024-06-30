import { createWindow, onMounted } from "ym-electron.js";
import { EventNames } from "../type";

onMounted(() => {
  const win = createWindow("manage", {
    x: 2000,
    y: -100,
    // devTool: true,

    render: {
      dev: {
        url: `${process.env["ELECTRON_RENDERER_URL"]}/#/manage`,
      },
      dep: {
        hash: "manage",
      },
    },
  });

  win.setMinimumSize(1200, 900);
  win.setSize(1200, 900);

  win.on("maximize", () => {
    win.webContents.send<EventNames>("is:maximize", true);
  });

  win.on("unmaximize", () => {
    win.webContents.send<EventNames>("is:maximize", false);
  });
});
