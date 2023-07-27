import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Typography } from "./Typography";
import { InputField } from "./InputField";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal = ({ isOpen, closeModal }: ModalProps) => {
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
                    text="Step 1"
                    color="text-shark-1" />
                </div>
                <div className="mt-6">
                  <div>
                    <InputField placeholder="ex. UX UI Designer" label="Job title" />
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
