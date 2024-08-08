<template>
  <div>{{ counter }}</div>
</template>
<script lang="ts" setup>
import { useMain } from "@/store/modules/home";
const { counter } = useMain();
</script>
<style scoped lang="scss"></style>
