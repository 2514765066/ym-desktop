import { app } from "electron";
import { join } from "path";

// export const resources = app.getPath("userData");
export const resources = join(__dirname, "../../resources");
console.log(resources);

export const icon = join(__dirname, "../../resources/icon.png");
