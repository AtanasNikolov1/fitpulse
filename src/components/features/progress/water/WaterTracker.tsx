import { useQuery } from "@tanstack/react-query";
import { useUserId } from "../../../../hooks/useUserId";
import {
  getTodayWater,
  getWaterRecords,
} from "../../../../services/waterService";
import { WaterRecords, WaterRecordWithId } from "../../../../types/waterTypes";
import { transformRecordDates } from "../../../../utils/formatData";
import TrackerWrapper from "../TrackerWrapper";
import WaterChart from "./WaterChart";
import DailyWater from "./DailyWater";
import LoadingSpinner from "../../../ui/LoadingSpinner";

const WaterTracker = () => {
  const userId = useUserId();

  const {
    data: chartData,
    isLoading: isChartLoading,
    error: chartError,
  } = useQuery<WaterRecords, Error>({
    queryKey: ["water", userId],
    queryFn: () => getWaterRecords(userId!),
    select: (data) => transformRecordDates(data),
  });

  const {
    data: dailyWater,
    isLoading: isDailyLoading,
    error: dailyError,
  } = useQuery<WaterRecordWithId | null, Error>({
    queryKey: ["waterToday", userId],
    queryFn: () => getTodayWater(userId!),
  });

  if (chartError || dailyError) return <div>Error loading water data</div>;
  if (isChartLoading || isDailyLoading) return <LoadingSpinner />;

  return (
    <TrackerWrapper>
      <WaterChart
        data={
          chartData && chartData.length > 0
            ? chartData
            : [{ createdAt: "No Records", amount: 0 }]
        }
      />
      <DailyWater data={dailyWater ?? null} />
    </TrackerWrapper>
  );
};

export default WaterTracker;
