import { debounce } from "@/hooks/useDebounce";

export const initConfig = (name: string, data: Ref<any>) => {
  const route = useRoute();

  //manage中
  if (route.path.includes("manage")) {
    const debounceConfig = debounce(value => {
      electron.ipcRenderer.send("updateConfig", name, value);
      electron.ipcRenderer.invoke("writeConfig", name, value);
    }, 200);

    //检测配置改动自动写入
    watch(
      data,
      val => {
        const value = JSON.parse(JSON.stringify(val));

        debounceConfig(value);
      },
      {
        deep: true,
      }
    );

    return;
  }

  //监视显示隐藏
  watchEffect(() => {
    const isShow = data.value.show;

    electron.ipcRenderer.send("setVisible", name, isShow);
  });

  electron.ipcRenderer.on("updateConfig", (_, value: any) => {
    data.value = value;
  });
};
