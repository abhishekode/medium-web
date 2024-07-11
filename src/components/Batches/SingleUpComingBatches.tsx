'use client'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import EnrollNew from './EnrollNew';

interface SingleUpComingBatchesProps {
  course: {
    id: number;
    title: string;
    icon: any;
  };
}
const SingleUpComingBatches: React.FC<SingleUpComingBatchesProps> = ({ course }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      {isOpen && <EnrollNew isOpen={isOpen} toggleModal={toggleModal} />}
      <div className="w-96 min-h-96 shadow-md transition-all ease-in-out cursor-pointer hover:shadow-2xl flex flex-col border gap-5">
        <div className="h-64 border overflow-hidden">
          <div className="transition-transform h-full hover:scale-125 hover:shadow-md duration-500 ease-in-out">
            {course.icon}
          </div>
        </div>
        <div className="px-6 space-y-3">
          <h3 className="text-xl font-bold ">{course.title}</h3>
          <button className='flex items-center text-blue-700' onClick={toggleModal}>Register Now <MdKeyboardArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default SingleUpComingBatches