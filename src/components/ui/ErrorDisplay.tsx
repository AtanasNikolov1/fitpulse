type ErrorDisplayProps = {
  message?: string;
};

const ErrorDisplay = ({
  message = "Something went wrong. Please try again.",
}: ErrorDisplayProps) => {
  return (
    <div className="w-full flex items-center justify-center text-center text-lg py-6 px-4 rounded-xl bg-red-100 text-red-600 font-semibold">
      {message}
    </div>
  );
};

export default ErrorDisplay;
