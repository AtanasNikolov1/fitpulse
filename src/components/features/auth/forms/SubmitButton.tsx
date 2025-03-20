type SubmitButtonProps = {
  text: string;
};

const SubmitButton = ({ text }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="bg-soft-violet text-pure-white py-3 px-6 sm:px-8 border border-soft-violet rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-deep-violet hover:cursor-pointer hover:border-deep-violet mt-6 sm:mt-8 w-full sm:w-auto transition"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
