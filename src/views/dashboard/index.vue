<template>
  <div>
    <Cards :growCardList="growCardList"></Cards>
    <Tabs></Tabs>
  </div>
</template>
<script lang="ts" setup>
import Cards from "./components/cards.vue";
import { growCardList } from "./data.ts";
import Tabs from "./components/tabs.vue";
</script>
<style scoped lang="scss"></style>
