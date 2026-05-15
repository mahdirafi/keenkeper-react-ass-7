import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineContext } from "../../context/TimelineContext";

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

   
  const callCount = timeline.filter(item => item.type === "Call").length;
  const textCount = timeline.filter(item => item.type === "Text").length;
  const videoCount = timeline.filter(item => item.type === "Video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FFBB28" },
  ];

  return (
    <div className="my-9">
        <div className="mb-16">
            <h2 className="text-[#131836] text-7xl font-bold">Friendship Analytics</h2>
        </div>
        <h2 className="text-[#0e3024] text-xl font-semibold">By Interaction Type</h2>
        <div className="flex justify-center">
        {timeline.length === 0 ? (
            <h2 className="text-gray-500 font-semibold">
            No data to show stats
            </h2>
        ) : (
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
        <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            
            cornerRadius="50%"
            fill="#8884d8"
            
            paddingAngle={5}
            dataKey="value"
            
        />
        <Legend/>
        <Tooltip/>
        </PieChart>
        )}
        </div>
    </div>
  );
};

export default Stats;