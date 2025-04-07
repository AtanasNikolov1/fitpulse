import { useState } from "react";
import {
  SleepMutationVariables,
  SleepRecordWithId,
} from "../../../../types/sleepTypes";
import { useUserId } from "../../../../hooks/useUserId";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addTodaySleep,
  editTodaySleep,
} from "../../../../services/sleepService";
import { toast } from "react-toastify";
import { Moon } from "lucide-react";
import ProgressDisplay from "../ProgressDisplay";
import ProgressEditor from "../ProgressEditor";

type DailySleepProps = {
  data: SleepRecordWithId | null;
};

const DailySleep = ({ data }: DailySleepProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [hoursInput, setHoursInput] = useState(0);
  const userId = useUserId();
  const queryClient = useQueryClient();

  const { mutate: addSleepMutation } = useMutation<
    string,
    Error,
    SleepMutationVariables
  >({
    mutationFn: ({ userId, hours }) => addTodaySleep(userId, hours),
    onSuccess: () => {
      if (userId) {
        toast.success("Sleep hours added successfully!", { autoClose: 1000 });
        queryClient.invalidateQueries({ queryKey: ["sleep", userId] });
        queryClient.invalidateQueries({ queryKey: ["sleepToday", userId] });
      }
    },
    onError: (error: Error) => {
      const errorMessage = error.message;
      toast.error(errorMessage, {
        autoClose: 3000,
      });
    },
  });

  const { mutate: editSleepMutation } = useMutation<
    string,
    Error,
    SleepMutationVariables
  >({
    mutationFn: ({ userId, hours }) => editTodaySleep(userId, hours),
    onSuccess: () => {
      toast.success("Sleep hours updated successfully!", { autoClose: 1000 });
      queryClient.invalidateQueries({ queryKey: ["sleep", userId] });
      queryClient.invalidateQueries({ queryKey: ["sleepToday", userId] });
    },
    onError: (error: Error) => {
      const errorMessage = error.message;
      toast.error(errorMessage, {
        autoClose: 3000,
      });
    },
  });

  const handleSave = () => {
    if (hoursInput <= 0) return;

    if (data?.hours) {
      editSleepMutation({ userId: userId!, hours: hoursInput });
    } else {
      addSleepMutation({ userId: userId!, hours: hoursInput });
    }

    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl">
      <div className="flex items-center gap-4 font-bold text-2xl">
        <Moon size={30} className="text-deep-violet" />
        <h1 className="text-deep-violet ">Sleep Today</h1>
      </div>

      {!isEditing ? (
        <ProgressDisplay
          hasValue={!!data?.hours}
          value={data?.hours}
          unit="hours"
          onEdit={() => {
            setIsEditing(true);
            setHoursInput(data?.hours || 0);
          }}
        />
      ) : (
        <ProgressEditor
          value={hoursInput}
          onChange={setHoursInput}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
          placeholder="Enter hours"
          unit="hours"
        />
      )}
    </div>
  );
};

export default DailySleep;
