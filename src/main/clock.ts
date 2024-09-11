import { join } from "path";
import { createWindow, onMounted } from "ym-electron.js";
import { writeJson, readJson } from "../hooks/useFs";

onMounted(() => {
  const win = createWindow("clock", {
    // x: 3000,
    // y: -100,
    // devTool: true,
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
  });

  win.on("moved", () => {
    const position = win.getPosition();

    writeJson("clockPos", position);
  });

  (async () => {
    const [x = 0, y = 0] = await readJson("clockPos");
    win.setPosition(x, y);
  })();
});
