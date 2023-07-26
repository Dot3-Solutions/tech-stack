import { twMerge } from "tailwind-merge";

const variants = {
  primary: "border border-transparent bg-primary-color text-on-primary-color",
  secondary:
    "border border-primary-color bg-on-primary-color text-primary-color",
};

export type ButtonProps = {
  type?: keyof typeof variants;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({
  type = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={twMerge(
        `inline-flex cursor-pointer justify-center text-center rounded font-Regular`,
        `bg-primary-color`,
        variants[type],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
