import {use, useRef} from "react";
import {useEChart} from "@/hooks/useEChart";
import {createRoomEnergyOption} from "@/charts/roomEnergy.option.ts";
import {createEnergyLineOption} from "@/charts/energyLine.option.ts";


function PieChart({data}:{data:RoomEnergy[]}){
  const ref = useRef<HTMLDivElement>(null);
  const option = createRoomEnergyOption(data);
  useEChart(ref,option);
  return <div ref={ref} className="w-full h-full" />;
}

function LineChart({data}:{data:EnergyLineData[]}){
  const ref = useRef<HTMLDivElement>(null);
  const option = createEnergyLineOption(data);
  useEChart(ref,option);
  return <div ref={ref} className="w-full h-full" />;
}

export default function Dashboard() {
  const data = [
  { room: "Bedroom", value: 300 },
  { room: "Workroom", value: 200 },
  { room: "Livingroom", value: 400 },
];
  const lineData = [
    { time: "09:00", value: 120 },
    { time: "10:00", value: 180 },
    { time: "11:00", value: 150 },
    { time: "12:00", value: 220 },
  ];

  return (
    <div className="flex gap-2 w-full">
      {/* Pie Charts */}
      <div className="flex gap-2">
        <div className="w-[160px] h-[180px]">
          <PieChart data={data} />
        </div>
        <div className="w-[160px] h-[180px]">
          <PieChart data={data} />
        </div>
        <div className="w-[160px] h-[180px]">
          <PieChart data={data} />
        </div>
      </div>

      {/* Line Chart (BIG) */}
      <div className="flex-1 w-[300px] h-[300px]">
        <LineChart data={lineData} />
      </div>
    </div>
  );
}

