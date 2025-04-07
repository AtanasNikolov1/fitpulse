import {
  Bar,
  BarChart,
  CartesianGrid,
  DefaultTooltipContent,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { StepsRecords } from "../../../../types/stepsTypes";

type StepsChartProps = {
  data: StepsRecords;
};

const StepsChart = ({ data }: StepsChartProps) => {
  return (
    <ResponsiveContainer width={"100%"} height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <DefaultTooltipContent />
        <Bar dataKey="steps" fill="#7636dd" barSize={30}>
          <LabelList
            dataKey="steps"
            position="top"
            fill="#7636dd"
            fontSize={14}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StepsChart;
