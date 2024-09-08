const eventNames = [
  "minimize",
  "close",
  "maximize",
  "is:maximize",
  "ignoreMouseEvents",
  "update:config",
  "setSize",
  "setPosition",
  "center",
  "show",
  "move",
] as const;

export type PositionNames = "taskbarPos" | "clockPos";
export type ConfigNames = "taskbar" | "clock" | "icons";

export type EventNames = (typeof eventNames)[number];

export type Icon = {
  id: string;
  name: string;
  path: string;
  isSplit?: boolean;
};

export type Icons = Icon[];

export type File = {
  id: string;
  name: string;
  path: string;
};

export type Files = File[];
