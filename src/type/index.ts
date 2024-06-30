const eventNames = [
  "minimize",
  "close",
  "maximize",
  "is:maximize",
  "get:icons",
] as const;

export type EventNames = (typeof eventNames)[number];

export type TaskbarConfig = {
  show: boolean;
  x: number;
  y: number;
  icons: string[];
};

export type Icons = {
  name: string;
  src: string;
  path: string;
}[];
