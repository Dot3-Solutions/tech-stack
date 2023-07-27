import { twMerge } from "tailwind-merge";

export type InputFieldProps = {
  placeholder: string;
};

export const InputField = ({ placeholder }: InputFieldProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={twMerge(
        "flex items-start w-full border border-card-border bg-white outline-none rounded-[0.3125rem] px-3 py-2 text-sm font-normal text-dark"
      )}
    />
  );
};
