<template>
  <div class="wh-100 manage">
    <title-bar></title-bar>
    <list-bar></list-bar>
    <main class="h g-2">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import TitleBar from "./TitleBar/index.vue";
import ListBar from "./ListBar/index.vue";
</script>

<style lang="scss">
.manage {
  background-color: #191919;
  gap: 5px;
  display: grid;
  grid-template-rows: 38px 1fr;
  grid-template-columns: 280px 1fr;
  grid-template-areas:
    "TitleBar TitleBar"
    "ListBar Content";

  > main {
    padding: 0 1.5rem;
    grid-area: Content;

    .el-input-number {
      width: 100px;

      .el-input__wrapper {
        --el-input-bg-color: #272727 !important;
      }
    }

    .el-color-picker {
      width: 100px;
      height: 35px;

      .el-color-picker__trigger {
        width: 100% !important;
        height: 100% !important;
      }
    }

    .el-switch {
      --el-switch-off-color: #272727 !important;
      --el-switch-on-color: #bdbbe6 !important;

      &:not(.is-checked) {
        .el-switch__core {
          border-color: #cdced0 !important;
        }
        .el-switch__action {
          background-color: #cdced0 !important;
        }
      }

      .el-switch__core {
        border-color: #bdbbe6 !important;
      }

      .el-switch__action {
        transform: scale(0.8);
        background-color: #000 !important;
      }
    }

    .el-slider {
      --el-slider-main-bg-color: #bdbbe6 !important;
      --el-slider-runway-bg-color: #666 !important;
      --el-slider-height: 4px !important;
      --el-slider-button-size: 14px !important;

      .el-slider__button {
        border: none !important;
        box-shadow: 0 0 5px #000 !important;
      }
    }
  }
}

@font-face {
  font-family: "logo";
  src: url("@/assets/logo.ttf");
}

.el-dialog {
  border-radius: 0.5rem !important;
}

.el-message-box {
  border-radius: 0.5rem !important;
}

.el-color-picker-dropdown {
  .el-color-dropdown__link-btn,
  .el-color-dropdown__btn {
    display: none !important;
  }
  .el-color-dropdown__value {
    width: 100%;
  }
}
</style>
