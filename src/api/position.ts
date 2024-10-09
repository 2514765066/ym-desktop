import { windows } from "ym-electron.js";
import { writeJson, readJson } from "../api/fs";

export const usePosition = (name: string, beforeMove?: Function) => {
  const win = windows.get(name)!;

  win.on("moved", () => {
    if (beforeMove) beforeMove();

    const position = win.getPosition();

    writeJson(`${name}Pos`, position);
  });

  (async () => {
    const [x = 0, y = 0] = await readJson(`${name}Pos`);

    if (x == 0 && y == 0) {
      win.center();
      return;
    }

    win.setPosition(x, y);
  })();
};
