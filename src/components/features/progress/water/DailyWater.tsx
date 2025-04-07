import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  addTodayWater,
  editTodayWater,
} from "../../../../services/waterService";
import {
  WaterMutationVariables,
  WaterRecordWithId,
} from "../../../../types/waterTypes";
import { useUserId } from "../../../../hooks/useUserId";
import { Droplet } from "lucide-react";
import ProgressEditor from "../ProgressEditor";
import ProgressDisplay from "../ProgressDisplay";

type DailyWaterProps = {
  data: WaterRecordWithId | null;
};

const DailyWater = ({ data }: DailyWaterProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [amountInput, setAmountInput] = useState(0);
  const userId = useUserId();
  const queryClient = useQueryClient();

  const { mutate: addWaterMutation } = useMutation<
    string,
    Error,
    WaterMutationVariables
  >({
    mutationFn: ({ userId, amount }) => addTodayWater(userId, amount),
    onSuccess: () => {
      if (userId) {
        toast.success("Water amount added successfully!", { autoClose: 1000 });
        queryClient.invalidateQueries({ queryKey: ["water", userId] });
        queryClient.invalidateQueries({ queryKey: ["waterToday", userId] });
      }
    },
    onError: (error: Error) => {
      const errorMessage = error.message;
      toast.error(errorMessage, {
        autoClose: 3000,
      });
    },
  });

  const { mutate: editWaterMutation } = useMutation<
    string,
    Error,
    WaterMutationVariables
  >({
    mutationFn: ({ userId, amount }) => editTodayWater(userId, amount),
    onSuccess: () => {
      toast.success("Water amount updated successfully!", { autoClose: 1000 });
      queryClient.invalidateQueries({ queryKey: ["water", userId] });
      queryClient.invalidateQueries({ queryKey: ["waterToday", userId] });
    },
    onError: (error: Error) => {
      const errorMessage = error.message;
      toast.error(errorMessage, {
        autoClose: 3000,
      });
    },
  });

  const handleSave = () => {
    if (amountInput <= 0) return;

    if (data?.amount) {
      editWaterMutation({ userId: userId!, amount: amountInput });
    } else {
      addWaterMutation({ userId: userId!, amount: amountInput });
    }

    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl">
      <div className="flex items-center gap-4 font-bold text-2xl">
        <Droplet size={30} className="text-deep-violet" />
        <h1 className="text-deep-violet ">Water Intake Today</h1>
      </div>

      {!isEditing ? (
        <ProgressDisplay
          hasValue={!!data?.amount}
          value={data?.amount}
          unit="ml"
          onEdit={() => {
            setIsEditing(true);
            setAmountInput(data?.amount || 0);
          }}
        />
      ) : (
        <ProgressEditor
          value={amountInput}
          onChange={setAmountInput}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
          placeholder="Enter water amount"
          unit="ml"
        />
      )}
    </div>
  );
};

export default DailyWater;
