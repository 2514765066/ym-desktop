import {
  isSecondeInstanceStart,
  onMounted,
  createTray,
  isDev,
} from "ym-electron.js";
import { app } from "electron";
import { createMain } from "./main";
import { icon } from "../api/path";
import "../api/ipc";
import "../api/updater";

if (isSecondeInstanceStart()) {
  app.exit();
}

onMounted(async () => {
  const main = await createMain();

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
    main.show();
  });
});

app.setLoginItemSettings({
  openAtLogin: !isDev(),
});
