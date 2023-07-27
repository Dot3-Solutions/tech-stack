import { Button } from "./Button";
import { Typography } from "./Typography";

export type ButtonProps = {
  text?: string;
  form?: string;
};

export const PrimaryButton = ({ text = "TEXT", form = "" }: ButtonProps) => {
  return (
    <Button
      type="primary"
      children={
        <Typography
          fontSize="text-base"
          fontWeight="font-normal"
          lineHeight="leading-8"
          color="text-white"
          text={text}
        />
      }
      form={form}
    />
  );
};
