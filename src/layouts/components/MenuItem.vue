<template>
  <el-sub-menu v-if="route?.hasLayOut" :index="route.path">
    <template #title>
      <span>{{ route.name }}</span>
    </template>
    <el-menu-item-group>
      <MenuItem
        :route="item"
        v-for="item in route.children"
        :key="item.path"
      ></MenuItem> </el-menu-item-group
  ></el-sub-menu>
  <el-menu-item :index="route?.path" v-else>
    <span>{{ route?.name }}</span>
  </el-menu-item>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import { AppRouteRecordRaw } from "@/routes/type";
defineProps({
  route: Object as PropType<AppRouteRecordRaw>,
});
</script>
<style scoped lang="scss">
:deep(.el-menu-item-group__title) {
  display: none;
}
</style>
