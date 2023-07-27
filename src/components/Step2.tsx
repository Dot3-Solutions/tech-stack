import { InputField } from "./InputField";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define your validation schema for Step2
// Define your validation schema for Step2
// Define your validation schema for Step2
const stepTwoSchema = yup.object().shape({
    experienceMinimum: yup.number(),
    experienceMaximum: yup.number()
        .when(['experienceMinimum'], (experienceMinimum, schema) => {
            return experienceMinimum ? schema.min(experienceMinimum, 'Maximum experience should be greater than or equal to minimum experience') : schema;
        }),
    salaryMinimum: yup.number(),
    salaryMaximum: yup.number()
        .when(['salaryMinimum'], (salaryMinimum, schema) => {
            return salaryMinimum ? schema.min(salaryMinimum, 'Maximum salary should be greater than or equal to minimum salary') : schema;
        }),
    totalEmployee: yup.number(),
});



export const Step2 = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(stepTwoSchema),
    });

    console.log("error", errors)

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form id="step2Form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-6 ">
            <div className="flex gap-6">
                <div>
                    <Controller
                        name="experienceMinimum"
                        control={control}
                        render={({ field }) =>
                            <InputField
                                {...field}
                                type="number"
                                placeholder="Minimum"
                                label="Experience"
                            />
                        }
                    />

                </div>
                <Controller
                    name="experienceMaximum"
                    control={control}
                    render={({ field }) =>
                        <InputField
                            {...field}
                            type="number"
                            placeholder="Maximum"
                            label=""
                        />
                    }
                />
                {errors.experienceMaximum && <p className="text-error">{errors.experienceMaximum.message}</p>}

            </div>
            <div className="flex gap-6">
                <Controller
                    name="salaryMinimum"
                    control={control}
                    render={({ field }) =>
                        <InputField
                            {...field}
                            type="number"
                            placeholder="Minimum"
                            label="Salary"
                        />
                    }
                />
                <div>
                    <Controller
                        name="salaryMaximum"
                        control={control}
                        render={({ field }) =>
                            <InputField
                                {...field}
                                type="number"
                                placeholder="Maximum"
                                label=""
                            />
                        }
                    />
                    {errors.salaryMaximum && <p className="text-error">{errors.salaryMaximum.message}</p>}

                </div>
            </div>
            <Controller
                name="totalEmployee"
                control={control}
                render={({ field }) =>
                    <InputField
                        {...field}
                        placeholder="ex. 100"
                        label="Total employee"
                    />
                }
            />
        </form>
    );
};
