import netflix from '../assets/netflix.svg'
import { PrimaryButton } from './PrimaryButton';
import { Typography } from './Typography';


export const JobCard = () => {
  return (
    <>
      <div className="flex w-1/2   ">
        <div className="bg-white w-full py-4 px-6 rounded-[10px] border border-iron box-shadow">
          <div className='flex gap-2'>
            <div>
              <img src={netflix} alt="netflix" height="48" width="48" className='rounded-[5px] ' />
            </div>
            <div>
              <Typography
                fontSize="text-2xl"
                fontWeight="font-normal"
                lineHeight="leading-8"
                text="UX UI Designer"
                color="text-black" />
              <Typography
                fontSize="text-base"
                fontWeight="font-normal"
                lineHeight="leading-6"
                text="Great Vibes - Information Technology"
                color="text-black" />
              <Typography
                fontSize="text-base"
                fontWeight="font-normal"
                lineHeight="leading-6"
                text="Chennai, Tamilnadu, India (In-office)"
                color="text-dove-gray"
                className='mb-6' />
              <Typography
                fontSize="text-base"
                fontWeight="font-normal"
                lineHeight="leading-6"
                text="Part-Time (9.00 am - 5.00 pm IST)"
                color="text-shark"
                className='mb-2' />
              <Typography
                fontSize="text-base"
                fontWeight="font-normal"
                lineHeight="leading-6"
                text="Experience (1 - 2 years)"
                color="text-shark"
                className='mb-2' />
              <Typography
                fontSize="text-base"
                fontWeight="font-normal"
                lineHeight="leading-6"
                text="INR (₹) 30,000 - 50,000 / Month"
                color="text-shark"
                className='mb-2' />
              <Typography
                fontSize="text-base"
                fontWeight="font-normal"
                lineHeight="leading-6"
                text="51-200 employees"
                color="text-shark"
                className='mb-6' />
              <div className='flex '>

                <PrimaryButton text="Apply Now" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
