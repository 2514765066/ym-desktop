import { app } from "electron";
import { join } from "path";

export const resources = app.getPath("userData");

export const icon = join(__dirname, "../../resources/icon.png");
