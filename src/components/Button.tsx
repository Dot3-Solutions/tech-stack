import { twMerge } from "tailwind-merge";

const variants = {
  primary:
    "flex px-4 py-2 justify-center items-center rounded rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
  secondary:
    "flex px-4 py-2 justify-center items-center border rounded rounded-[0.3125rem] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
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
        `inline-flex cursor-pointer justify-center text-center rounded font-Regular `,
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
