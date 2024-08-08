<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <Header></Header>
      <el-container>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Header from "./components/Header.vue";
</script>
<style scoped lang="scss"></style>
