type PasswordStrengthProps = {
  password: string;
};

const PasswordValidationList = ({ password }: PasswordStrengthProps) => {
  const rules = [
    { regex: /.{8,}/, message: "At least 8 characters" },
    {
      regex: /[A-Z]/,
      message: "Use both uppercase and lowercase letters",
      check: /[a-z]/,
    },
    { regex: /\d/, message: "At least one number" },
    {
      regex: /[@$!%*?&#.,]/,
      message: "At least one special character (@$!%*?&#)",
    },
  ];

  return (
    <ul className="mt-2 text-sm text-gray-600">
      {rules.map(({ regex, message, check }) => {
        const isValid =
          regex.test(password) && (!check || check.test(password));
        return (
          <li
            key={message}
            className={isValid ? "text-green-500" : "text-red-500"}
          >
            {isValid ? "✅" : "❌"} {message}
          </li>
        );
      })}
    </ul>
  );
};

export default PasswordValidationList;
