<template>
  <el-row :gutter="10">
    <el-col
      :xs="12"
      :sm="12"
      :md="12"
      :lg="6"
      :xl="6"
      v-for="card in growCardList"
      :key="card.title"
    >
      <Card :card="card"></Card>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import Card from "./card.vue";
import { GrowCardItem } from "../data.ts";

defineProps({
  growCardList: Array as PropType<GrowCardItem[]>,
});
</script>
<style scoped lang="scss">
:deep(.el-col) {
  margin-bottom: 20px;
}
</style>
