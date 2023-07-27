import { useState } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Typography } from "./Typography";
import { PrimaryButton } from "./PrimaryButton";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import * as yup from 'yup';

const stepTwoSchema = yup.object().shape({
  experienceMinimum: yup.number(),
  experienceMaximum: yup.number().test(
    'is-greater',
    'Maximum experience should be greater than or equal to minimum experience',
    function (value) {
      return this.parent.experienceMinimum <= value;
    }
  ),
  salaryMinimum: yup.number(),
  salaryMaximum: yup.number().test(
    'is-greater',
    'Maximum salary should be greater than or equal to minimum salary',
    function (value = 0) {
      return this.parent.salaryMinimum <= value;
    }
  ),
  totalEmployee: yup.number(),
  applyType: yup.boolean(),
});

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal = ({ isOpen, closeModal }: ModalProps) => {

  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const onSubmitStep1 = (data) => {
    console.log("Error", data);
    handleNextStep()
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-[10px] bg-white p-8 align-middle shadow-xl transition-all border border-card-border">
                <div className="flex flex-col gap-24">
                  <div>
                    <div className="flex justify-between">
                      <Typography
                        fontSize="text-xl"
                        fontWeight="font-normal"
                        lineHeight="leading-7"
                        text="Create a job"
                        color="text-shark-1" />
                      <Typography
                        fontSize="text-base"
                        fontWeight="font-medium"
                        lineHeight="leading-6"
                        text={`Step ${step}`}
                        color="text-shark-1" />
                    </div>
                    {step === 1 && <Step1 onSubmit={onSubmitStep1} />}
                    {step === 2 && <Step2 />}

                  </div>
                  <div className="flex justify-end">
                    {
                      step === 1 ?
                        <PrimaryButton text="Next" form="step1Form" />
                        :
                        <PrimaryButton text="Save" form="step2Form" />

                    }
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
