import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Footprints } from "lucide-react";
import {
  addTodaySteps,
  editTodaySteps,
} from "../../../../services/stepsService";
import {
  StepsMutationVariables,
  StepsRecordWithId,
} from "../../../../types/stepsTypes";
import { useUserId } from "../../../../hooks/useUserId";
import ProgressDisplay from "../ProgressDisplay";
import ProgressEditor from "../ProgressEditor";

type DailyStepsProps = {
  data: StepsRecordWithId | null;
};

const DailySteps = ({ data }: DailyStepsProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [stepsInput, setStepsInput] = useState(0);
  const userId = useUserId();
  const queryClient = useQueryClient();

  const { mutate: addStepsMutation } = useMutation<
    string,
    Error,
    StepsMutationVariables
  >({
    mutationFn: ({ userId, steps }) => addTodaySteps(userId, steps),
    onSuccess: () => {
      if (userId) {
        toast.success("Steps added successfully!", { autoClose: 1000 });
        queryClient.invalidateQueries({ queryKey: ["steps", userId] });
        queryClient.invalidateQueries({ queryKey: ["stepsToday", userId] });
      }
    },
    onError: (error: Error) => {
      const errorMessage = error.message;
      toast.error(errorMessage, {
        autoClose: 3000,
      });
    },
  });

  const { mutate: editStepsMutation } = useMutation<
    string,
    Error,
    StepsMutationVariables
  >({
    mutationFn: ({ userId, steps }) => editTodaySteps(userId, steps),
    onSuccess: () => {
      toast.success("Steps updated successfully!", { autoClose: 1000 });
      queryClient.invalidateQueries({ queryKey: ["steps", userId] });
      queryClient.invalidateQueries({ queryKey: ["stepsToday", userId] });
    },
    onError: (error: Error) => {
      const errorMessage = error.message;
      toast.error(errorMessage, {
        autoClose: 3000,
      });
    },
  });

  const handleSave = () => {
    if (stepsInput <= 0) return;

    if (data?.steps) {
      editStepsMutation({ userId: userId!, steps: stepsInput });
    } else {
      addStepsMutation({ userId: userId!, steps: stepsInput });
    }

    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl">
      <div className="flex items-center gap-4 font-bold text-2xl">
        <Footprints size={30} className="text-deep-violet" />
        <h1 className="text-deep-violet">Steps Today</h1>
      </div>

      {!isEditing ? (
        <ProgressDisplay
          hasValue={!!data?.steps}
          value={data?.steps}
          unit="steps"
          onEdit={() => {
            setIsEditing(true);
            setStepsInput(data?.steps || 0);
          }}
        />
      ) : (
        <ProgressEditor
          value={stepsInput}
          onChange={setStepsInput}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
          placeholder="Enter Steps"
          unit="steps"
        />
      )}
    </div>
  );
};

export default DailySteps;
