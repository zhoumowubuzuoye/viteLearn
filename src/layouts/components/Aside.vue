<template>
  <el-aside width="200px">
    <el-row class="tac">
      <el-col>
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
        >
          <MenuItem
            :route="item"
            v-for="item in routes"
            :key="item.path"
          ></MenuItem>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>
<script lang="ts" setup>
import routes from "@/routes/modules";
import MenuItem from "./MenuItem.vue";
console.log(routes);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style scoped lang="scss">
:deep(.tac) {
  height: 100%;
  .el-menu {
    height: 100%;
    overflow: auto;
  }
}
</style>
