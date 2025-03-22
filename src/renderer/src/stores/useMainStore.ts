import { defineStore } from "pinia";
import { TaskbarOption } from "@type";

export const useMainStore = defineStore("main", () => {
  //任务栏配置项
  const taskbarOption = ref<TaskbarOption>({
    show: true,
    move: true,

    backgroundColor: "rgba(255,255,255,0)",
    splitColor: "#fff",
    height: 80,
    borderRadius: 10,
    paddingX: 24,

    iconShadow: false,
    iconTipShow: true,
    iconTipFontColor: "#fff",
    iconTipBackgroundColor: "#1D1D1D",
    iconSize: 40,
    iconGap: 24,

    removeIconKey: "Delete",
    addSplitKey: "Insert",
  });

  //获取任务栏配置项
  const getTaskbarData = async () => {
    const data = await ipcRenderer.invoke("readConfig", "taskbar");

    //处理无数据
    if (!data) return;

    taskbarOption.value = JSON.parse(data);
  };

  //初始化
  const init = async () => {
    await Promise.all([getTaskbarData()]);

    //通知窗口更新数据
    watchEffect(() => {
      ipcRenderer.send(
        "toTaskbar",
        JSON.stringify(taskbarOption.value),
        taskbarOption.value.show
      );
    });

    //保存配置项数据
    watch(
      taskbarOption,
      val => {
        ipcRenderer.send("wrtieConfig", "taskbar", JSON.stringify(val));
      },
      {
        deep: true,
      }
    );
  };

  //重启taskbar
  ipcRenderer.on("reloadTaskbar", () => {
    ipcRenderer.send("toTaskbar", "", false);
    ipcRenderer.send(
      "toTaskbar",
      JSON.stringify(taskbarOption.value),
      taskbarOption.value.show
    );
  });

  init();

  return {
    taskbarOption,
  };
});
