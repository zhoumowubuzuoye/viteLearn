<template>
  <div class="common-layout">
    <el-container
      style="height: 100vh; display: grid; grid-auto-rows: auto 1fr auto"
    >
      <Header></Header>
      <el-container style="overflow: auto">
        <Aside></Aside>
        <Main></Main>
      </el-container>
      <Footer></Footer>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Header from "./components/Header.vue";
import Aside from "./components/Aside.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
</script>
<style scoped lang="scss"></style>
