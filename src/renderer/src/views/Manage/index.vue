<template>
  <div class="wh-100 manage">
    <title-bar></title-bar>

    <list-bar></list-bar>

    <breadcrumb></breadcrumb>

    <main class="h o-h">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import ListBar from "@/components/ListBar.vue";
</script>

<style lang="scss">
.manage {
  background-color: #191919;
  gap: 5px;
  display: grid;
  grid-template-rows: 38px 50px 1fr;
  grid-template-columns: 280px 1fr;
  grid-template-areas:
    "TitleBar TitleBar"
    "ListBar Breadcrumb"
    "ListBar Content";

  > main {
    padding: 0 1.5rem 1.5rem;
    grid-area: Content;
    gap: 6px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    .el-input-number {
      width: 120px;

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

    .el-select {
      width: 200px;
      background-color: #272727;
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
  background-color: #1d1e1f !important;

  .el-color-dropdown__btns {
    display: flex;
    align-items: center;
  }

  .el-color-dropdown__link-btn {
    display: none !important;
  }

  .el-color-dropdown__value {
    flex: 1;
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInRight {
  animation-duration: 0.5s;
  animation-name: fadeInRight;
}
</style>
