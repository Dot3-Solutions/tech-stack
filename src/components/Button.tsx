import { twMerge } from "tailwind-merge";

const variants = {
  primary:
    "rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-primary-color",
  secondary: "border border-primary-color rounded-[0.3125rem] bg-white",
};

export type ButtonProps = {
  type?: keyof typeof variants;
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({
  type = "primary",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={twMerge(
        `flex justify-center px-4 py-2 items-center`,
        variants[type]
      )}
      {...props}
    >
      {children}
    </button>
  );
};
