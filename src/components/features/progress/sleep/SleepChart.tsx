import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  LabelList,
  Cell,
} from "recharts";
import { SleepRecords } from "../../../../types/sleepTypes";
import CustomTooltip from "../../../ui/CustomTooltip";

type SleepChartProps = {
  data: SleepRecords;
};

const SleepChart = ({ data }: SleepChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" />
        <YAxis domain={[0, 12]} />
        <Tooltip
          content={<CustomTooltip labelPrefix="Sleep Duration" unit="h" />}
        />
        <ReferenceLine
          y={8}
          stroke="#FE0000"
          strokeDasharray="3 3"
          label={{
            value: "Recommended (8h)",
            position: "right",
            fill: "#FE0000",
            fontSize: 12,
          }}
        />
        <Bar dataKey="hours" barSize={30}>
          {data.map((entry, index) => (
            <Cell
              key={`bar-${index}`}
              fill={entry.hours >= 8 ? "#7636dd" : "#e5e7eb"}
            />
          ))}
          <LabelList dataKey="hours" position="top" fontSize={14} fill="#444" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SleepChart;
