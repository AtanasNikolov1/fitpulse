import { useQuery } from "@tanstack/react-query";
import { useUserId } from "../../../../hooks/useUserId";
import {
  getSleepRecords,
  getTodaySleep,
} from "../../../../services/sleepService";
import { SleepRecords, SleepRecordWithId } from "../../../../types/sleepTypes";
import { transformRecordDates } from "../../../../utils/formatData";
import TrackerWrapper from "../TrackerWrapper";
import SleepChart from "./SleepChart";
import DailySleep from "./DailySleep";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import ErrorDisplay from "../../../ui/ErrorDisplay";

const SleepTracker = () => {
  const userId = useUserId();

  const {
    data: chartData,
    isLoading: isChartLoading,
    error: chartError,
  } = useQuery<SleepRecords, Error>({
    queryKey: ["sleep", userId],
    queryFn: () => getSleepRecords(userId!),
    select: (data) => transformRecordDates(data),
  });

  const {
    data: dailySleep,
    isLoading: isDailyLoading,
    error: dailyError,
  } = useQuery<SleepRecordWithId | null, Error>({
    queryKey: ["sleepToday", userId],
    queryFn: () => getTodaySleep(userId!),
  });

  if (isChartLoading || isDailyLoading) return <LoadingSpinner />;
  if (chartError || dailyError)
    return <ErrorDisplay message="Error loading sleep hours data." />;

  return (
    <TrackerWrapper>
      <SleepChart
        data={
          chartData && chartData.length > 0
            ? chartData
            : [{ createdAt: "No Records", hours: 0 }]
        }
      />
      <DailySleep data={dailySleep ?? null} />
    </TrackerWrapper>
  );
};

export default SleepTracker;
