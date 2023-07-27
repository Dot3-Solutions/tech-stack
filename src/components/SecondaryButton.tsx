import { Button } from "./Button";
import { Typography } from "./Typography";

export type ButtonProps = {
  text?: string;
};

export const PrimaryButton = ({ text = "primary" }: ButtonProps) => {
  return (
    <Button
      type="secondary"
      children={
        <Typography
          fontSize="text-sm"
          fontWeight="font-normal"
          lineHeight="leading-8"
          color="text-white"
          text={text}
        />
      }
    />
  );
};
