import { debounce } from "@/hooks/useDebounce";
import { ConfigNames } from "@type";

export const initConfig = (name: ConfigNames, data: Ref<any>) => {
  const { path } = useRoute();

  if (path.includes("manage")) {
    const write = debounce(value => {
      api.writeConfig(name, value);
    }, 300);

    //检测配置改动自动写入
    watch(
      data,
      val => {
        const value = JSON.parse(JSON.stringify(val));
        write(value);
        electron.ipcRenderer.send("update:config", name, value);
      },
      {
        deep: true,
      }
    );

    //监视显示隐藏
    watchEffect(() => {
      const isShow = data.value.show;
      electron.ipcRenderer.send("show", name, isShow);
    });
  } else {
    electron.ipcRenderer.on("update:config", (_, value: any) => {
      data.value = value;
    });
  }
};
