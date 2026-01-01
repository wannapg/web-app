import * as echarts from "echarts";

export function createRoomEnergyOption(
  data: { room: string; value: number }[]=[]
): echarts.EChartsOption {
  return {
    tooltip: {},
    series: [
      {
        type: "pie",
        data: data.map(d => ({
          name: d.room,
          value: d.value,
        })),
      },
    ],
  };
}
