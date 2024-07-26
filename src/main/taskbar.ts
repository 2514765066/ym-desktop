import { join } from "path";
import { createWindow, onMounted } from "ym-electron.js";

onMounted(() => {
  createWindow("taskbar", {
    x: 2000,
    y: -100,
    devTool: true,
    transparent: true,
    resizable: false,

    render: {
      dev: {
        url: `${process.env["ELECTRON_RENDERER_URL"]}/#/taskbar`,
      },
      dep: {
        hash: "taskbar",
        path: join(__dirname, "../renderer/index.html"),
      },
    },
  });
});
