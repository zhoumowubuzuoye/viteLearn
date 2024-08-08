<template>
  <div>
    <button @click="handleClick">按钮</button>
    <div>{{ counter }}</div>
  </div>
</template>
<script lang="ts" setup>
import { useMain } from "@/store"
import { storeToRefs } from "pinia";

const main = useMain();
const { counter } = storeToRefs(main);

const handleClick = () => {
  main.increment();
};
</script>
