import { InputField } from './InputField';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RadioButton } from './RadioButton';

const applyTypeOptions = [
  { value: 'quickApply', label: 'Quick apply' },
  { value: 'externalApply', label: 'External apply' },
];
export type Step2FormValues = {
  experienceMinimum?: number;
  experienceMaximum?: number;
  salaryMinimum?: number;
  salaryMaximum?: number;
  totalEmployee?: number;
  applyType?: boolean;
};

const stepTwoSchema = yup.object().shape({
  experienceMinimum: yup.number(),
  experienceMaximum: yup.number().when(['experienceMinimum'], (experienceMinimum, schema) => {
    return experienceMinimum
      ? schema.min(experienceMinimum, 'Minimum ≤ Maximum Experience')
      : schema;
  }),
  salaryMinimum: yup.number(),
  salaryMaximum: yup.number().when(['salaryMinimum'], (salaryMinimum, schema) => {
    return salaryMinimum ? schema.min(salaryMinimum, 'Minimum ≤ Maximum Salary') : schema;
  }),
  totalEmployee: yup.number(),
  appylyType: yup.boolean(),
});

export type Step2Props = {
  onSubmit: (data: Step2FormValues) => void;
};

export const Step2 = ({ onSubmit }: Step2Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepTwoSchema),
  });

  return (
    <form id="step2Form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-6 ">
      <div className="flex gap-6">
        <div className="w-full">
          <Controller
            name="experienceMinimum"
            control={control}
            render={({ field }) => (
              <InputField {...field} type="number" placeholder="Minimum" label="Experience" />
            )}
          />
        </div>
        <div className="w-full">
          <Controller
            name="experienceMaximum"
            control={control}
            render={({ field }) => (
              <InputField {...field} type="number" placeholder="Maximum" label="" />
            )}
          />
          {errors.experienceMaximum && (
            <p className="text-error">{errors.experienceMaximum.message}</p>
          )}
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-full">
          <Controller
            name="salaryMinimum"
            control={control}
            render={({ field }) => (
              <InputField {...field} type="number" placeholder="Minimum" label="Salary" />
            )}
          />
        </div>
        <div className="w-full">
          <Controller
            name="salaryMaximum"
            control={control}
            render={({ field }) => (
              <InputField {...field} type="number" placeholder="Maximum" label="" />
            )}
          />
          {errors.salaryMaximum && <p className="text-error">{errors.salaryMaximum.message}</p>}
        </div>
      </div>
      <Controller
        name="totalEmployee"
        control={control}
        render={({ field }) => (
          <InputField {...field} placeholder="ex. 100" label="Total employee" />
        )}
      />

      <div className="mt-4">
        <Controller
          name="applyType"
          control={control}
          render={({ field }) => (
            <RadioButton
              {...field}
              options={applyTypeOptions}
              form="step2Form"
              label="Apply type"
            />
          )}
        />
        {/* <label className="block text-lg font-semibold">Select an option:</label> */}
      </div>
    </form>
  );
};
