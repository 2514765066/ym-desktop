import {
  onMounted,
  createTray,
  windows,
  isSecondeInstanceStart,
  autoStart,
} from "ym-electron.js";
import { app } from "electron";
import { icon } from "../hooks/usePath";
import "../hooks/ipc";
import "./manage";
import "./taskbar";
import "./clock";

if (isSecondeInstanceStart()) {
  app.exit();
}

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

autoStart();
