import { join } from "path";
import { createWindow, onMounted } from "ym-electron.js";
import { usePosition } from "../api/position";

onMounted(() => {
  createWindow("clock", {
    // x: 3000,
    // y: -100,
    // devTool: true,
    frame: false,
    transparent: true,
    resizable: false,
    skipTaskbar: true,

    render: {
      dev: {
        url: `${process.env["ELECTRON_RENDERER_URL"]}/#/clock`,
      },
      dep: {
        hash: "clock",
        path: join(__dirname, "../renderer/index.html"),
      },
    },

    webPreferences: {
      preload: join(__dirname, "../preload/index.mjs"),
      sandbox: false,
    },
  });

  usePosition("clock");
});
