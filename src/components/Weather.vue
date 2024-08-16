<template>
  <div class="weather">
    <span style="margin-right: 20px;">{{ weather?.wea }}</span>
    <el-icon style="font-size: 40px"
      ><component :is="getIcon()"></component
    ></el-icon>
  </div>
</template>
<script lang="ts" setup>
import { Weather } from "@/apis/setting";
import { WeatherType } from "@/enums";
import { PropType } from "vue";
import {
  Drizzling,
  Sunny,
  Lightning,
  MostlyCloudy,
  Pouring,
} from "@element-plus/icons-vue";

import { defineProps } from "vue";
const props = defineProps({
  weather: Object as PropType<Weather>,
});
const getIcon = () => {
  switch (props.weather?.wea_img) {
    case WeatherType["xue"]:
      return Drizzling;
    case WeatherType["yun"]:
      return MostlyCloudy;
    case WeatherType["lei"]:
      return Lightning;
    case WeatherType["yu"]:
      return Pouring;
    default:
      return Sunny;
  }
};
</script>
<style scoped lang="scss">
.weather {
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
