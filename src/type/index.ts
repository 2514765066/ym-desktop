const eventNames = [
  "minimize",
  "close",
  "maximize",
  "is:maximize",
  "ignoreMouseEvents",

  "get:icons",
  "update:config",
] as const;

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
};

export type Icon = {
  name: string;
  src: string;
  path: string;
};

export type Icons = Icon[];
