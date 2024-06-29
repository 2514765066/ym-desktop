import { windows } from "ym-electron.js";
import { ipcMain } from "electron";
// import { join } from "path";
// import fileIcon from "extract-file-icon";
import { EventNames } from "../type";

//最小化
ipcMain.on<EventNames>("minimize", () => {
  const win = windows.get("manage")!;
  win.minimize();
});

//最大化还原
ipcMain.on<EventNames>("maximize", () => {
  const win = windows.get("manage")!;
  win.isMaximized() ? win.restore() : win.maximize();
});

//关闭
ipcMain.on<EventNames>("close", () => {
  const win = windows.get("manage")!;
  win.close();
});

// ipcMain.handle("get:icon", (_, data: string[]) => {
//   return data.map(name => {
//     const path = join(iconPath, name);
//     const icon = fileIcon(path, 48).toString("base64");
//     const src = `data:image/png;base64,${icon}`;

//     return { name, src };
//   });
// });

// ipcMain.handle("get:db", (_, name: string) => {
//   return deepCopy(map[name].get());
// });
