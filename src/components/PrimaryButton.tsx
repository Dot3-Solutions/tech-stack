import { Button } from './Button';
import { Typography } from './Typography';

export type ButtonProps = {
  text?: string;
  form?: string;
  onClick?: () => void;
};

export const PrimaryButton = ({ text = 'TEXT', form = '', ...props }: ButtonProps) => {
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
      {...props}
    />
  );
};
