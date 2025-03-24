type FeatureProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Feature = ({ title, description, children }: FeatureProps) => {
  return (
    <div className="bg-soft-white text-charcoal-gray p-10  rounded-4xl shadow-lg flex flex-col justify-center items-center gap-5">
      <div className="text-soft-violet">{children}</div>
      <h3 className="text-xl font-semibold ">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default Feature;
