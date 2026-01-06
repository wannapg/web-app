

function PieChart({data}:{data:RoomEnergy[]}){
  const ref = useRef<HTMLDivElement>(null);
  const option = createRoomEnergyOption(data);
  useEChart(ref,option);
  return <div ref={ref} className="w-full h-full" />;
}