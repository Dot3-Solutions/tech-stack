import netflix from '../assets/netflix.svg';
import { Job } from '../types';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { Typography } from './Typography';
import { useMemo } from 'react';
import Edit from '../assets/Edit.svg';
import Delete from '../assets/Delete.svg';

interface JobCardProps {
  job: Job;
  setOpenConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
  setIsForEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const JobCard = ({ job, setOpenConfirm, setSelectedId, setIsForEdit }: JobCardProps) => {
  const jobExperience: string = useMemo(() => {
    if (!job) return '';
    let str = '';
    if (job.experienceMinimum) str += `Experience (${job.experienceMinimum}`;
    if (job.experienceMaximum) str += ` - ${job.experienceMaximum} Year)`;
    return str;
  }, [job]);
  const salaryExperience: string = useMemo(() => {
    if (!job) return '';
    let str = '';
    if (job.salaryMinimum) str += `INR (₹) ${job.salaryMinimum}`;
    if (job.salaryMaximum) str += ` - ${job.salaryMaximum} / Month `;
    return str;
  }, [job]);

  return (
    <>
      <div className="flex font-Poppins ">
        <div className="bg-white w-full py-4 px-6 rounded-[10px] border border-iron box-shadow">
          <div className="flex items-start gap-2">
            <div>
              <img src={netflix} alt="netflix" height="48" width="48" className="rounded-[5px] " />
            </div>
            <div>
              <Typography
                fontSize="text-2xl"
                fontWeight="font-normal"
                lineHeight="leading-8"
                text={job.jobTitle}
                color="text-black"
              />
              <Typography
                fontSize="text-base"
                fontWeight="font-normal"
                lineHeight="leading-6"
                text={job.companyName}
                color="text-black"
              />
              <Typography
                fontSize="text-base"
                fontWeight="font-normal"
                lineHeight="leading-6"
                text={job.location}
                color="text-dove-gray"
                className="mb-6"
              />
              <Typography
                fontSize="text-base"
                fontWeight="font-normal"
                lineHeight="leading-6"
                text={job.remoteType}
                color="text-shark"
                className="mb-2"
              />
              <Typography
                fontSize="text-base"
                fontWeight="font-normal"
                lineHeight="leading-6"
                text={jobExperience}
                color="text-shark"
                className="mb-2"
              />
              <Typography
                fontSize="text-base"
                fontWeight="font-normal"
                lineHeight="leading-6"
                text={salaryExperience}
                color="text-shark"
                className="mb-2"
              />
              <Typography
                fontSize="text-base"
                fontWeight="font-normal"
                lineHeight="leading-6"
                text={`${job.totalEmployee} employees`}
                color="text-shark"
                className="mb-6"
              />
              {job.applyType ? (
                <PrimaryButton text="Apply Now" />
              ) : (
                <SecondaryButton text="External Apply" />
              )}
            </div>
            <div className="ml-auto flex items-center gap-4">
              <img
                src={Edit}
                className="h-5 w-5 cursor-pointer"
                alt=""
                onClick={() => {
                  setSelectedId(job.id);
                  setIsForEdit(true);
                }}
              />
              <img
                src={Delete}
                className="h-5 w-5 cursor-pointer"
                onClick={() => {
                  setSelectedId(job.id);
                  setOpenConfirm(true);
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
