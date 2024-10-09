export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number = 500
): T => {
  let timeout: ReturnType<typeof setTimeout> | null;
  return function (this: any, ...args: Parameters<T>) {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func.apply(this, args), wait);
  } as T;
};
