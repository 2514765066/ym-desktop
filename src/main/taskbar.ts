import { join } from "path";
import { createWindow, onMounted } from "ym-electron.js";

onMounted(() => {
  const win = createWindow("taskbar", {
    x: 2000,
    y: -100,
    devTool: true,
    transparent: true,

    // expandCenter: {
    //   vertical: true,
    // },

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

  win.on("system-context-menu", e => {
    e.preventDefault();
  });
});
