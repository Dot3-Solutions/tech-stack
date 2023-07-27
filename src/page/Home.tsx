import { useState } from 'react';
import { useJobs } from '../api/getJobs';
import { JobCard } from '../components/JobCard';
import { Modal } from '../components/Modal';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import { InputField } from '../components/InputField';
import { Spinner } from '../components/Spinner';
import { ConfirmModal } from '../components/ConfirmModal';

const Home = () => {
  const { data: jobs, isLoading, error } = useJobs();
  console.log('data', jobs, isLoading, error);

  const [openConfirm, setOpenConfirm] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [selectedId, setSelectedId] = useState<string>('');
  return (
    <div className="mb-9 font-Poppins">
      <div className="max-w-[90%] mx-auto px-4 pt-5">
        <div className="flex justify-end">
          <PrimaryButton text="Create Job" onClick={openModal} />
          <SecondaryButton text="Create Job" onClick={openModal} />
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal} />
        {isLoading ? (
          <div className="flex items-center justify-center h-[80vh]">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-[50.12px] mt-10  ">
            {!isLoading &&
              !error &&
              jobs &&
              jobs.map((job) => {
                return (
                  <JobCard
                    key={job.id}
                    job={job}
                    setOpenConfirm={setOpenConfirm}
                    setSelectedId={setSelectedId}
                  ></JobCard>
                );
              })}
          </div>
        )}
      </div>

      <ConfirmModal isOpen={openConfirm} id={selectedId} closeModal={() => setOpenConfirm(false)} />
    </div>
  );
};

export default Home;
