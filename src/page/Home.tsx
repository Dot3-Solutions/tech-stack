import { useState } from 'react'
import { useJobs } from "../api/getJobs";
import { JobCard } from "../components/JobCard";
import { Modal } from "../components/Modal";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { InputField } from '../components/InputField';
import { Spinner } from '../components/Spinner';

const Home = () => {
  const { data: jobs, isLoading, error } = useJobs();
  console.log("data", jobs, isLoading, error);
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <div className='mb-9 font-Poppins'>
      <div className="max-w-[90%] mx-auto px-4 pt-5">
        <div className="flex justify-end">
          <PrimaryButton text="Create Job" onClick={openModal} />
          <SecondaryButton text="Create Job" onClick={openModal} />
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal} />
        {
          isLoading ? <Spinner /> :
            <div className="grid grid-cols-2 gap-[50.12px] mt-10  ">
              {
                !isLoading && !error && jobs &&
                jobs.map(job => {
                  return <JobCard key={job.id} job={job}></JobCard>
                })
              }
            </div>
        }
      </div>
    </div>
  )
};

export default Home;
