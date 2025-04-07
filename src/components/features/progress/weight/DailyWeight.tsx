import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Weight } from "lucide-react";
import { toast } from "react-toastify";
import {
  addTodayWeight,
  editTodayWeight,
} from "../../../../services/weightService";
import { useUserId } from "../../../../hooks/useUserId";
import {
  WeightMutationVariables,
  WeightRecordWithId,
} from "../../../../types/weightTypes";
import ProgressDisplay from "../ProgressDisplay";
import ProgressEditor from "../ProgressEditor";

type DailyWeightProps = {
  data: WeightRecordWithId | null;
};

const DailyWeight = ({ data }: DailyWeightProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [weightInput, setWeightInput] = useState(0);
  const userId = useUserId();
  const queryClient = useQueryClient();

  const { mutate: addWeightMutation } = useMutation<
    string,
    Error,
    WeightMutationVariables
  >({
    mutationFn: ({ userId, weight }) => addTodayWeight(userId, weight),
    onSuccess: () => {
      if (userId) {
        toast.success("Weight added successfully!", { autoClose: 1000 });
        queryClient.invalidateQueries({ queryKey: ["weights", userId] });
        queryClient.invalidateQueries({ queryKey: ["weightToday", userId] });
      }
    },
    onError: (error: Error) => {
      const errorMessage = error.message;
      toast.error(errorMessage, {
        autoClose: 3000,
      });
    },
  });

  const { mutate: editWeightMutation } = useMutation<
    string,
    Error,
    WeightMutationVariables
  >({
    mutationFn: ({ userId, weight }) => editTodayWeight(userId, weight),
    onSuccess: () => {
      toast.success("Weight updated successfully!", { autoClose: 1000 });
      queryClient.invalidateQueries({ queryKey: ["weights", userId] });
      queryClient.invalidateQueries({ queryKey: ["weightToday", userId] });
    },
    onError: (error: Error) => {
      const errorMessage = error.message;
      toast.error(errorMessage, {
        autoClose: 3000,
      });
    },
  });

  const handleSave = () => {
    if (weightInput <= 0) return;

    if (data?.weight) {
      editWeightMutation({ userId: userId!, weight: weightInput });
    } else {
      addWeightMutation({ userId: userId!, weight: weightInput });
    }

    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl">
      <div className="flex items-center gap-4 font-bold text-2xl">
        <Weight size={30} className="text-deep-violet" />
        <h1 className="text-deep-violet ">Weight Today</h1>
      </div>

      {!isEditing ? (
        <ProgressDisplay
          hasValue={!!data?.weight}
          value={data?.weight}
          unit="kg"
          onEdit={() => {
            setIsEditing(true);
            setWeightInput(data?.weight || 0);
          }}
        />
      ) : (
        <ProgressEditor
          value={weightInput}
          onChange={setWeightInput}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
          placeholder="Enter weight"
          unit="kg"
        />
      )}
    </div>
  );
};

export default DailyWeight;
