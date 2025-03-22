<template>
  <Group title="常规">
    <Row label="显示" des="任务栏是否显示" icon="show">
      <span class="text-sm mr-4">{{ taskbarOption.show ? "开" : "关" }}</span>

      <el-switch v-model="taskbarOption.show" />
    </Row>

    <Row label="移动" des="任务栏是否可以拖动" icon="move">
      <span class="text-sm mr-4">{{ taskbarOption.move ? "开" : "关" }}</span>

      <el-switch v-model="taskbarOption.move" />
    </Row>

    <Row label="重置位置" des="重置任务栏位置到桌面最上方" icon="reset">
      <ElButton type="danger" text bg @click="handleReset">重置</ElButton>
    </Row>
  </Group>

  <Group title="个性化" icon="style">
    <Row label="背景颜色" des="任务栏背景颜色" icon="color">
      <el-color-picker
        v-model="taskbarOption.backgroundColor"
        show-alpha
        color-format="hex"
        popper-class="el-color-picker-dropdown"
      />
    </Row>

    <Row label="分割线颜色" des="任务栏中分割线颜色" icon="color">
      <el-color-picker
        v-model="taskbarOption.splitColor"
        show-alpha
        color-format="hex"
        popper-class="el-color-picker-dropdown"
      />
    </Row>

    <Row label="高度" des="任务栏高度" icon="height">
      <span class="text-sm mr-4">{{ taskbarOption.height }}</span>

      <el-slider
        v-model.lazy="taskbarOption.height"
        :min="taskbarOption.iconSize"
        :max="taskbarOption.iconSize * 2"
        :show-tooltip="false"
      />
    </Row>

    <Row label="圆角" des="任务栏圆角" icon="radius">
      <span class="text-sm mr-4">{{ taskbarOption.borderRadius }}</span>

      <el-slider
        v-model.lazy="taskbarOption.borderRadius"
        :max="taskbarOption.height / 2"
        :show-tooltip="false"
      />
    </Row>

    <Row label="内边距" des="任务栏两端内边距" icon="padding">
      <span class="text-sm mr-4">{{ taskbarOption.paddingX }}</span>

      <el-slider v-model.lazy="taskbarOption.paddingX" :show-tooltip="false" />
    </Row>
  </Group>

  <Group title="图标" icon="icon">
    <Row label="阴影" des="图标阴影是否显示" icon="shadow">
      <span class="text-sm mr-4"
        >{{ taskbarOption.iconShadow ? "开" : "关" }}
      </span>

      <el-switch v-model="taskbarOption.iconShadow" />
    </Row>

    <Row label="名称" des="图标名称是否显示" icon="show">
      <span class="text-sm mr-4">
        {{ taskbarOption.iconTipShow ? "开" : "关" }}
      </span>

      <el-switch v-model="taskbarOption.iconTipShow" />
    </Row>

    <Row label="名称字体颜色" des="图标名称字体颜色" icon="color">
      <el-color-picker
        v-model="taskbarOption.iconTipFontColor"
        show-alpha
        color-format="hex"
        popper-class="el-color-picker-dropdown"
      />
    </Row>

    <Row label="名称背景颜色" des="图标名称背景颜色" icon="color">
      <el-color-picker
        v-model="taskbarOption.iconTipBackgroundColor"
        show-alpha
        color-format="hex"
        popper-class="el-color-picker-dropdown"
      />
    </Row>

    <Row label="大小" des="图标大小" icon="size">
      <span class="text-sm mr-4">{{ taskbarOption.iconSize }}</span>

      <el-slider
        v-model.lazy="taskbarOption.iconSize"
        :min="20"
        :max="60"
        :show-tooltip="false"
      />
    </Row>

    <Row label="间距" des="图标之间的间距" icon="padding">
      <span class="text-sm mr-4">{{ taskbarOption.iconGap }}</span>

      <el-slider v-model.lazy="taskbarOption.iconGap" :show-tooltip="false" />
    </Row>
  </Group>

  <Group title="快捷键" icon="shortcut">
    <Row label="删除图标" des="选中图标后删除图标的快捷键" icon="shortcut">
      <Shortcut v-model="taskbarOption.removeIconKey" />
    </Row>

    <Row label="添加分割线" des="选中图标后在图标后添加分割线" icon="shortcut">
      <Shortcut v-model="taskbarOption.addSplitKey" />
    </Row>
  </Group>
</template>

<script setup lang="ts">
import Group from "@/components/Group.vue";
import Shortcut from "@/components/Shortcut.vue";
import { ElSwitch, ElSlider, ElColorPicker, ElButton } from "element-plus";
import Row from "@/components/Row.vue";
import { useMainStore } from "@/stores/useMainStore";

const { taskbarOption } = storeToRefs(useMainStore());

const handleReset = () => {
  ipcRenderer.send("resetPosition", "taskbar");
};
</script>

<style scoped lang="scss"></style>
