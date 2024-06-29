import { createWindow, onMounted } from "ym-electron.js";

import { taskbarData } from "../store/index";
// import { join } from "node:path";
// import { readdirSync } from "node:fs";

const data = taskbarData.get();

onMounted(() => {
  createWindow("taskbar", {
    devTool: true,
    width: data.icon.length * 80 + 40,
    height: 120,

    position: data.position,

    expandCenter: {
      vertical: true,
    },

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

// const iconDir = readdirSync(iconPath);

// if (iconDir.length !== data.icon.length) {
//   iconDir.forEach(fileName => {
//     const path = join(iconPath, fileName);
//     const base64 = fileIcon(path).toString("base64");

//   });
//   // data.icon =
// }
