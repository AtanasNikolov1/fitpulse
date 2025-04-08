import { TooltipProps } from "recharts";

type CustomTooltipProps = TooltipProps<number, string> & {
  unit?: string;
  labelPrefix?: string;
};

const CustomTooltip = ({
  active,
  payload,
  labelPrefix = "Value",
  unit = "",
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow text-sm text-gray-800 border border-gray-200">
        <p>
          {`${labelPrefix}: ${payload[0].value}`}
          {unit && ` ${unit}`}
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
