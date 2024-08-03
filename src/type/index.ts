const eventNames = [
  "minimize",
  "close",
  "maximize",
  "is:maximize",
  "ignoreMouseEvents",
  "update:config",
  "setSize",
  "center",
  "show",
] as const;

export type ConfigNames = "taskbar" | "clock" | "icons";

export type EventNames = (typeof eventNames)[number];

export type TaskbarConfig = {
  show: boolean;
  move: boolean;
  height: number;
  paddingX: number;
  backgroundColor: string;
  splitColor: string;
  borderRadius: number;
  iconsSize: number;
  iconsGap: number;
  iconsTipPosition: number;
  iconsTipShow: boolean;
  iconsShadow: boolean;
  removeIconKey: string;
  addSplitKey: string;
};

export type ClockConfig = {
  show: boolean;
  move: boolean;
  color: string;
  fontSize: number;
  fontFamily: string;
};

export type Icon = {
  id: string;
  name: string;
  path: string;
  isSplit?: boolean;
};

export type Icons = Icon[];
