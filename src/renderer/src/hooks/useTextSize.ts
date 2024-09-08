export const textSize = (
  text: string,
  fontSize: number,
  fontFamily: string
) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  ctx.font = `${fontSize}px ${fontFamily}`;

  const metrics = ctx.measureText(text);
  const width = metrics.width;

  // 计算文本高度，可以近似为字体大小
  const height = fontSize;

  return { width, height };
};
