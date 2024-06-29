import { createWindow } from "ym-electron.js";

interface option {
  sender: Electron.WebContents;
  win: ReturnType<typeof createWindow>;
  value: boolean | string | number | object;
}

interface map {
  [key: string]: (option: option) => void;
}

export const map: map = {
  //bw显示与隐藏
  show: ({ sender, win, value }) => {
    value ? win.show() : win.hide();
    sender.send("show", value);
  },

  //渲染的阴影
  shadow: ({ sender, value }) => {
    sender.send("shadow", value);
  },

  //渲染的字体
  fontFamily: ({ sender, value }) => {
    sender.send("fontFamily", value);
  },

  //渲染的字体大小
  fontSize: ({ sender, win, value }) => {
    win.setSize((value as number) * 4, (value as number) * 3);
    sender.send("fontSize", value);
  },

  //渲染的字体颜色
  color: ({ sender, value }) => {
    sender.send("color", value);
  },

  //位置
  position({ win, value }) {
    const { x, y } = value as {
      x: number;
      y: number;
    };
    win.setPosition(x, y);
  },

  //音乐跳动的点的个数
  count: ({ sender, win, value }) => {
    win.setSize((value as number) * 14 - 6, 120);
    win.expandCenter({
      vertical: true,
    });
    sender.send("count", value);
  },
};
