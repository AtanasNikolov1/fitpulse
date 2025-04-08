const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-14 h-14 border-6 border-soft-violet border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
