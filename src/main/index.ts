import { setGlobalCreateWindowOption } from "ym-electron.js";
import { join } from "node:path";
import "../hooks/ipc";
import "./manage";
import "./taskbar";

setGlobalCreateWindowOption({
  frame: false,
  // transparent: true,
  // alwaysOnTop: true,
  // skipTaskbar: true,
  // devTool: false,

  webPreferences: {
    preload: join(__dirname, "../preload/index.mjs"),
    sandbox: false,
  },
});
