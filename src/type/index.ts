export type IpcEvent = {
  ignoreMouseEvents: (option: boolean) => void;

  setSize: (option: { width?: number; height?: number }) => void;
  resetPosition: (name: WindowsName) => void;

  readConfig: (name: ConfigName) => string;
  wrtieConfig: (name: ConfigName, data: string) => void;

  shortcutTarget: (path: string) => string;

  toTaskbar: (data: string, visible?: boolean) => void;
  reloadTaskbar: () => void;
};

export type WindowsName = "manage" | "taskbar";

export type ConfigName = "manage" | "taskbar" | "icons";

export type File = {
  id: string;
  name: string;
  path: string;
};

//taskbar配置
export type TaskbarOption = {
  show: boolean;
  move: boolean;

  backgroundColor: string;
  splitColor: string;
  height: number;
  borderRadius: number;
  paddingX: number;

  iconShadow: boolean;
  iconTipShow: boolean;
  iconTipFontColor: string;
  iconTipBackgroundColor: string;
  iconSize: number;
  iconGap: number;

  removeIconKey: string;
  addSplitKey: string;
};

//icon配置
export type IconOption = {
  id: string;
  name: string;
  path: string;
  isSplit?: boolean;
};

//文档信息
export type DocInfo = {
  name: string;
  data: string[];
};
