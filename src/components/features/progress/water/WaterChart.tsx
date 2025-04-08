import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { WaterRecords } from "../../../../types/waterTypes";
import CustomTooltip from "../../../ui/CustomTooltip";

type WaterChartProps = {
  data: WaterRecords;
};

const WaterChart = ({ data }: WaterChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" />
        <YAxis domain={[0, 4000]} />
        <Tooltip
          content={<CustomTooltip labelPrefix="Water Intake" unit="ml" />}
        />
        <ReferenceLine
          y={2000}
          stroke="#FE0000"
          strokeDasharray="3 3"
          label="Target (2000ml)"
        />
        <Area
          type="monotone"
          dataKey="amount"
          stroke="#7636dd"
          fill="#7636dd"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default WaterChart;
