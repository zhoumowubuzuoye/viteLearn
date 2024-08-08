<script setup lang="ts">
import { RouterView } from "vue-router";
import {useRoute} from 'vue-router'

console.log(useRoute())
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
#app{
  height: 100%;
}
</style>
