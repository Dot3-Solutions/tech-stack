import { twMerge } from 'tailwind-merge';
import { Spinner } from './Spinner';

const variants = {
  primary: 'rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-primary-color',
  secondary: 'border border-primary-color rounded-[0.3125rem] bg-white',
  delete: 'rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-error'
};
export type ButtonProps = {
  type?: keyof typeof variants;
  children: React.ReactNode;
  form?: string;
  onClick?: () => void;
  isLoading?: boolean;
};

export const Button = ({ type = 'primary', children, form = '', isLoading = false, ...props }: ButtonProps) => {
  return (
    <button
      type={'submit'} // Update to customType here
      form={form}
      className={twMerge(`flex justify-center px-4 py-2 items-center`, variants[type])}
      {...props}
    >
      {isLoading ? (
        <div className='flex gap-2 items-center'>
          {children} <Spinner size='sm' variant="light" /> {/* Replace 'Spinner' with your actual spinner component and set the 'color' prop to 'text-white' */}
        </div>
      ) : (
        children
      )}
    </button>
  );
};
