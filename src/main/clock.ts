import { join } from "path";
import { createWindow, onMounted } from "ym-electron.js";

onMounted(() => {
  createWindow("clock", {
    x: 2000,
    y: -100,
    devTool: true,
    transparent: true,
    resizable: false,

    render: {
      dev: {
        url: `${process.env["ELECTRON_RENDERER_URL"]}/#/clock`,
      },
      dep: {
        hash: "clock",
        path: join(__dirname, "../renderer/index.html"),
      },
    },
  });
});
