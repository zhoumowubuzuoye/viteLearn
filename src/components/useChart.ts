import * as echarts from "echarts";
import { EChartsOption } from "echarts";
import { watch, unref } from "vue";
export const useEchart = (
  chartDom: Ref<HTMLElement | undefined>,
  options: EChartsOption | undefined
) => {
  watch(
    () => chartDom.value,
    () => {
      if (chartDom) {
        const chart = unref(chartDom);
        const myChart = echarts.init(chart);

        window.addEventListener("resize", function () {
          myChart.resize();
        });
        options && myChart.setOption(options);
      }
    }
  );
};
