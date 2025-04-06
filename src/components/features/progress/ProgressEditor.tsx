type ProgressEditorProps = {
  value: number;
  onChange: (value: number) => void;
  onSave: () => void;
  onCancel: () => void;
  placeholder?: string;
  unit?: string;
};

const ProgressEditor = ({
  value,
  onChange,
  onSave,
  onCancel,
  placeholder = "Enter value",
  unit = "",
}: ProgressEditorProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="flex flex-row gap-4 justify-center items-center">
        <input
          type="number"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(Number(e.target.value))}
          className="px-6 py-1.5 text-lg text-center w-36 border-2 border-soft-violet border-solid rounded-lg focus:outline-none"
        />
        {unit && <span className="text-lg font-medium">{unit}</span>}
      </div>

      <div className="flex gap-4 justify-center items-center">
        <button
          onClick={onSave}
          className="py-2 w-26 text-lg text-center rounded-lg bg-soft-violet text-white hover:bg-deep-violet transition  cursor-pointer"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="py-2 w-26 text-lg text-center rounded-lg bg-gray-300 hover:bg-gray-400 transition cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProgressEditor;
