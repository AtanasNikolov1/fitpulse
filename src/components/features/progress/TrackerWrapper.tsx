type TrackerWrapperProps = {
  children: React.ReactNode;
};

const TrackerWrapper = ({ children }: TrackerWrapperProps) => {
  return (
    <div className="pt-6 pb-3 pr-3 md:pr-6 bg-white rounded-2xl w-full">
      {children}
    </div>
  );
};

export default TrackerWrapper;
