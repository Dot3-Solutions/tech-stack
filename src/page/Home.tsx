import { useState } from 'react';
import { useJobs } from '../api/getJobs';
import { JobCard } from '../components/JobCard';
import { Modal } from '../components/Modal';
import { SecondaryButton } from '../components/SecondaryButton';
import { Spinner } from '../components/Spinner';
import { ConfirmModal } from '../components/ConfirmModal';
import { Job } from '../types';

const Home = () => {
  const { data: jobs, isLoading, error } = useJobs();
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [job, setJob] = useState<Job>();
  const [selectedId, setSelectedId] = useState<string | undefined>('');

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setJob(undefined);
  };

  return (
    <div className="mb-9 font-Poppins">
      <div className="max-w-[90%] mx-auto px-4 pt-5">
        <div className="flex justify-end">
          <SecondaryButton text="Create Job" onClick={openModal} />
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center h-[80vh]">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-[50.12px] lg:grid-cols-2 mt-10  ">
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
                    onEdit={(job) => {
                      setJob(job);
                      setIsOpen(true);
                    }}
                  ></JobCard>
                );
              })}
          </div>
        )}
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} job={job} id={selectedId} />
      <ConfirmModal isOpen={openConfirm} id={selectedId} closeModal={() => setOpenConfirm(false)} />
    </div>
  );
};

export default Home;
