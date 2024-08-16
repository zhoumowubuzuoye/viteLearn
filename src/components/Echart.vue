<template>
  <div class="echart" ref="echart"></div>
</template>
<script lang="ts" setup>
import { ref, PropType, defineProps } from "vue";
import { useEchart } from "./useChart";
import { EChartsOption } from "echarts";
const props = defineProps({
  options: (Object as PropType<EChartsOption>) || undefined,
});
const echart = ref<HTMLElement>();
useEchart(echart, props.options);
</script>
<style scoped lang="scss">
.echart {
  height: 300px;
  width: 100%;
}
</style>
