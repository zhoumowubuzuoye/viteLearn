<template>
  <div class="main">
    <div class="el">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
@import url("@/assets/styles/index.scss");
.main {
  width: 100%;
  padding: 10px;
  overflow: auto;
}
.el {
  // background: green;
  width: 100%;
}
</style>
