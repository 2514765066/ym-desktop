<template>
  <section class="TitleBar v-n-c">
    <Logo />

    <Control class="ml" />
  </section>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";
import Control from "./Control.vue";
</script>

<style scoped lang="scss">
.TitleBar {
  grid-area: TitleBar;
  $hoverBg: #373737;
  padding-left: 0.5rem;
  height: 38px;
  -webkit-app-region: drag;

  > div {
    width: 600px;
    height: 26px;
    border: 1px solid #454545;
    border-radius: 0.5rem;
    background-color: #2a2a2a;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    transition: 0.15s;

    &:hover {
      background-color: #313131;
      border-color: #5b5b5b;
    }
  }

  > button {
    width: 30px;
    height: 30px;
    border-radius: 0.5rem;
    transition: 0.15s;

    > img {
      width: 18px;
      height: 18px;
    }

    &:hover {
      background-color: $hoverBg;
    }
  }

  > aside {
    > div {
      width: 2.8rem;
      border-radius: 0.5rem;
      transition: 0.15s;

      &:hover {
        background-color: $hoverBg;
      }

      > img {
        width: 14px;
        height: 14px;
      }
    }

    > div:last-child {
      &:hover {
        background-color: #c42b1c;
      }
    }
  }
}
</style>
