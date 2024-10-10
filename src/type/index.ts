const eventNames = [
  "minimize",
  "close",
  "maximize",
  "is:maximize",

  "ignoreMouseEvents",
  "updateConfig",
  "setSize",
  "setVisible",
  "center",
  "readConfig",
  "writeConfig",
  "shortcutTarget",

  "openURL",
] as const;

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
