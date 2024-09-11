import {
  setGlobalCreateWindowOption,
  app,
  onMounted,
  createTray,
  windows,
} from "ym-electron.js";
import { icon } from "../hooks/usePath";
import { join } from "node:path";
import "../hooks/ipc";
import "./manage";
import "./taskbar";
import "./clock";

if (app.isSecondeInstanceStart) {
  app.exit();
}

setGlobalCreateWindowOption({
  frame: false,

  webPreferences: {
    preload: join(__dirname, "../preload/index.mjs"),
    sandbox: false,
  },
});

onMounted(() => {
  const tray = createTray({
    label: "ym-desktop",
    iconPath: icon,
    info: [
      {
        label: "退出",
        click: () => app.exit(),
      },
    ],
  });

  tray.on("click", () => {
    const win = windows.get("manage")!;

    if (!win.isVisible()) {
      win.show();
    }
  });
});

app.isAutoStart = true;
