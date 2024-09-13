import { join } from "path";
import { createWindow, onMounted } from "ym-electron.js";
import { writeJson, readJson } from "../hooks/useFs";
import { debounce } from "../hooks/useDebounce";

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

  const writeDebounce = debounce(position => {
    writeJson("taskbarPos", position);
  }, 300);

  win.on("move", () => {
    const position = win.getPosition();

    writeDebounce(position);
  });

  (async () => {
    const [x = 0, y = 0] = await readJson("taskbarPos");
    win.setPosition(x, y);
  })();
});
