import { useEffect } from "react";
import * as echarts from "echarts";

export function useEChart(
    ref: React.RefObject<HTMLDivElement>,
    option: echarts.EChartsOption
){
    useEffect(() => {
        if(!ref.current) return;

        const chart = echarts.init(ref.current);
        chart.setOption(option);

        return () => {
            chart.dispose();
        };
    }, [ref, option]);
}