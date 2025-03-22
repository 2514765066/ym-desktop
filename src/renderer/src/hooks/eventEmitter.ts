import { MenuGrounp } from "@/lib/Menu";

// 定义事件到函数类型的映射
type EventMap = {
  "menu:show": (option: {
    data: MenuGrounp[];
    width: number;
    x: number;
    y: number;
  }) => void;
};

type EventNames = keyof EventMap;

class EventEmitter {
  private listeners = {} as Record<EventNames, Set<Function>>;

  on<T extends EventNames>(eventName: T, listener: EventMap[T]) {
    if (!(eventName in this.listeners)) {
      this.listeners[eventName] = new Set();
    }

    this.listeners[eventName].add(listener);
  }

  emit<T extends EventNames>(eventName: T, ...args: Parameters<EventMap[T]>) {
    this.listeners[eventName].forEach(listener => listener(...args));
  }
}

export default new EventEmitter();
