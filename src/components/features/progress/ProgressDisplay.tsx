type ProgressDisplayProps = {
  hasValue: boolean;
  value?: number;
  unit?: string;
  onEdit: () => void;
};

const ProgressDisplay = ({
  hasValue,
  value = 0,
  unit = "",
  onEdit,
}: ProgressDisplayProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {hasValue ? (
        <>
          <span className="text-xl font-semibold">
            {value} {unit}
          </span>
          <button
            onClick={onEdit}
            className="w-26 py-2 text-lg rounded-xl bg-soft-violet text-pure-white hover:bg-deep-violet transition cursor-pointer"
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <span className="text-lg text-gray-500">No records for today</span>
          <button
            onClick={onEdit}
            className="w-26 py-2 text-lg rounded-xl bg-soft-violet text-pure-white hover:bg-deep-violet transition cursor-pointer"
          >
            Add
          </button>
        </>
      )}
    </div>
  );
};

export default ProgressDisplay;
