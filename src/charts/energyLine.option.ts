import * as echarts from "echarts";

export function createEnergyLineOption(
  data: { time: string; value: number }[]
): echarts.EChartsOption {
  return {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: data.map(d => d.time),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "line",
        smooth: true,
        data: data.map(d => d.value),
      },
    ],
  };
}
