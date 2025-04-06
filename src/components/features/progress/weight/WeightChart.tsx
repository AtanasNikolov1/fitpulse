import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { WeightRecords } from "../../../../types/weightTypes";

type WeightChartProps = {
  data: WeightRecords;
};

const WeightChart = ({ data }: WeightChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" padding={{ left: 10, right: 10 }} />
        <YAxis domain={[0, 140]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="weight"
          stroke="#7636dd"
          strokeWidth={2}
          dot={{ r: 4 }}
        >
          <LabelList
            dataKey="weight"
            position="top"
            fill="#7636dd"
            fontSize={14}
            offset={10}
          />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeightChart;
