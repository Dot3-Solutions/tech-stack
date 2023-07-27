import { twMerge } from "tailwind-merge";

export type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const Layout = ({ children, className }: LayoutProps) => (
  <div className={twMerge(`font-Poppins`, className)}>{children}</div>
);
