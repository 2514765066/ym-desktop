import { join } from "path";
import { createWindow, onMounted } from "ym-electron.js";
import { usePosition } from "../api/position";

onMounted(() => {
  const win = createWindow("music", {
    // x: 3000,
    // y: -100,
    // devTool: true,
    frame: false,
    transparent: true,
    resizable: false,
    skipTaskbar: true,

    render: {
      dev: {
        url: `${process.env["ELECTRON_RENDERER_URL"]}/#/music`,
      },
      dep: {
        hash: "music",
        path: join(__dirname, "../renderer/index.html"),
      },
    },

    webPreferences: {
      preload: join(__dirname, "../preload/index.mjs"),
      sandbox: false,
    },
  });

  usePosition("music", () => {
    win.expandCenter({
      horizontal: true,
    });
  });
});
