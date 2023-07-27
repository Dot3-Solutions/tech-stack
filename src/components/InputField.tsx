import { twMerge } from "tailwind-merge";
import { Typography } from "./Typography";
import { RequiredSign } from "./RequiredSign";

export type InputFieldProps = {
  placeholder?: string;
  label?: string
};

export const InputField = ({ placeholder, label = "" }: InputFieldProps) => {
  return (
    <>
      <div className="flex pb-1">
        <Typography
          fontSize="text-sm"
          fontWeight="font-medium"
          lineHeight="leading-5"
          text={label}
          color="text-dark"
        />
        <RequiredSign />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={twMerge(
          "flex items-start w-full border border-card-border bg-white outline-none rounded-[0.3125rem] px-3 py-2 text-sm font-normal text-dark"
        )}
      />
    </>
  );
};
