import { useQuery } from "@tanstack/react-query";
import { useUserId } from "../../../../hooks/useUserId";
import { StepsRecords, StepsRecordWithId } from "../../../../types/stepsTypes";
import {
  getStepsRecords,
  getTodaySteps,
} from "../../../../services/stepsService";
import { transformRecordDates } from "../../../../utils/formatData";
import TrackerWrapper from "../TrackerWrapper";
import StepsChart from "./StepsChart";
import DailySteps from "./DailySteps";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import ErrorDisplay from "../../../ui/ErrorDisplay";

const StepsTracker = () => {
  const userId = useUserId();

  const {
    data: chartData,
    isLoading: isChartLoading,
    error: chartError,
  } = useQuery<StepsRecords, Error>({
    queryKey: ["steps", userId],
    queryFn: () => getStepsRecords(userId!),
    select: (data) => transformRecordDates(data),
  });

  const {
    data: dailySteps,
    isLoading: isDailyLoading,
    error: dailyError,
  } = useQuery<StepsRecordWithId | null, Error>({
    queryKey: ["stepsToday", userId],
    queryFn: () => getTodaySteps(userId!),
  });

  if (isChartLoading || isDailyLoading) return <LoadingSpinner />;
  if (chartError || dailyError)
    return <ErrorDisplay message="Error loading steps data." />;

  return (
    <TrackerWrapper>
      <StepsChart
        data={
          chartData && chartData.length > 0
            ? chartData
            : [{ createdAt: "No Records", steps: 0 }]
        }
      />
      <DailySteps data={dailySteps ?? null} />
    </TrackerWrapper>
  );
};

export default StepsTracker;
