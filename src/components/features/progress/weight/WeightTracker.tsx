import WeightChart from "./WeightChart";
import DailyWeight from "./DailyWeight";
import { useUserId } from "../../../../hooks/useUserId";
import {
  WeightRecords,
  WeightRecordWithId,
} from "../../../../types/weightTypes";
import { useQuery } from "@tanstack/react-query";
import {
  getTodayWeight,
  getWeightRecords,
} from "../../../../services/weightService";
import { transformRecordDates } from "../../../../utils/formatData";
import TrackerWrapper from "../TrackerWrapper";
import LoadingSpinner from "../../../ui/LoadingSpinner";

const WeightTracker = () => {
  const userId = useUserId();

  const {
    data: chartData,
    isLoading: isChartLoading,
    error: chartError,
  } = useQuery<WeightRecords, Error>({
    queryKey: ["weights", userId],
    queryFn: () => getWeightRecords(userId!),
    select: (data) => transformRecordDates(data),
  });

  const {
    data: dailyWeight,
    isLoading: isDailyLoading,
    error: dailyError,
  } = useQuery<WeightRecordWithId | null, Error>({
    queryKey: ["weightToday", userId],
    queryFn: () => getTodayWeight(userId!),
  });

  if (chartError || dailyError) return <div>Error loading weight data</div>;
  if (isChartLoading || isDailyLoading) return <LoadingSpinner />;

  return (
    <TrackerWrapper>
      <WeightChart
        data={
          chartData && chartData.length > 0
            ? chartData
            : [{ createdAt: "No Records", weight: 0 }]
        }
      />
      <DailyWeight data={dailyWeight ?? null} />
    </TrackerWrapper>
  );
};

export default WeightTracker;
