<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>{{ card?.title }}</span>
        <el-tag type="primary" :color="card?.color">{{ card?.action }}</el-tag>
      </div>
    </template>
    <div class="body">
      <div class="left">
        <span>${{ numeral(card?.value).format("0,0") }}</span>
        <span>总{{ card?.title }}</span>
      </div>
      <div class="right">
        <el-icon><Watermelon /></el-icon>
        <span>${{ numeral(card?.total).format("0,0") }}</span>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { GrowCardItem } from "../data.ts";
import numeral from "numeral";

defineProps({
  card: Object as PropType<GrowCardItem>,
});
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.body {
  height: 80px;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
  .right {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
}
</style>
