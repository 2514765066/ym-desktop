const eventNames = [
  "minimize",
  "close",
  "maximize",
  "is:maximize",

  "get:icons",
  "update:config",
] as const;

export type EventNames = (typeof eventNames)[number];

export type TaskbarConfig = {
  show: boolean;
  move: boolean;
  height: number;
  backgroundColor: string;
  splitColor: string;
  borderRadius: number;
  iconsSize: number;
  iconsGap: number;
  iconsTipPosition: number;
  iconsTipShow: boolean;
  iconsShadow: boolean;
  icons: string[];
};

export type Icons = {
  name: string;
  src: string;
  path: string;
}[];
