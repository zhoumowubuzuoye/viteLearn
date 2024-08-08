<template>
  <el-header class="header">
    <div>{{ appName }}</div>
    <el-avatar :src="img" />
    <div>{{ date }}</div>
  </el-header>
</template>
<script lang="ts" setup>
import { useSetting } from "@/store";
import { storeToRefs } from "pinia";
const { getTime } = useSetting();
const { appName, date, img } = storeToRefs(useSetting());
getTime();
</script>
<style scoped lang="scss">
.header {
  height: var(--el-header-height);
  background: grey;
  display: flex;
  align-items: center;
  padding: 0;
}
</style>
