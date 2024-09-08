export const getMinBoundingRect = (...elements: HTMLElement[]) => {
  if (!elements || elements.length === 0) {
    return { width: 0, height: 0, minLeft: 0, minTop: 0 };
  }

  // 获取每个元素的边界信息
  const rects = elements.map(el => el.getBoundingClientRect());

  // 找出最左、最右、最上、最下的边界
  const maxRight = Math.max(...rects.map(rect => rect.right));
  const maxBottom = Math.max(...rects.map(rect => rect.bottom));

  // 计算最小矩形的宽高
  const width = Math.ceil(maxRight);
  const height = Math.ceil(maxBottom);

  return { width, height };
};
