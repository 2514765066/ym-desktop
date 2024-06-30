import { createWindow, onMounted } from "ym-electron.js";

onMounted(() => {
  createWindow("taskbar", {
    x: 2000,
    y: -100,
    devTool: true,
    width: 500,
    height: 120,
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
      },
    },
  });
});
