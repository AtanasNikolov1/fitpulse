import { Eye, EyeOff } from "lucide-react";

type PasswordToggleButtonProps = {
  isVisible: boolean;
  onToggle: () => void;
};

const PasswordToggleButton = ({
  isVisible,
  onToggle,
}: PasswordToggleButtonProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 hover:cursor-pointer"
    >
      {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>
  );
};

export default PasswordToggleButton;
