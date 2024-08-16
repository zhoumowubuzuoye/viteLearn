<template>
  <el-header class="header">
    <div>{{ appName }}</div>
    <el-avatar :src="img" />
    <div>{{ date }}</div>
    <Weather :weather="weather"></Weather>
  </el-header>
</template>
<script lang="ts" setup>
import { useSetting } from "@/store";
import { storeToRefs } from "pinia";
import Weather from "@/components/Weather.vue";
const { getTime } = useSetting();
const { appName, date, img, weather } = storeToRefs(useSetting());
getTime();
</script>
<style scoped lang="scss">
.header {
  height: var(--el-header-height);
  background: grey;
  display: grid;
  align-items: center;
  padding: 0 20px;
  grid-template-columns: 1fr auto auto auto;
  column-gap: 10px;
}
</style>
