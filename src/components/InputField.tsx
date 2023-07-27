import { twMerge } from "tailwind-merge";

interface InputFieldProps {
  label: string;
}

export const InputField = ({ label }: InputFieldProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        className={twMerge(
          "flex items-start self-stretch rounded-[0.3125rem] px-3 py-2"
        )}
      />
    </div>
  );
};
