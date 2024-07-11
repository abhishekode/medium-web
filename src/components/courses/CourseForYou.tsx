"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { chooseYourGoal } from '../Common/Jsondata';

const CourseForYou = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedLink, setSelectedLink] = useState('/courses/spoken-english');
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleOptionClick = (value: React.SetStateAction<string>) => {
        setSelectedOption(value);
        setIsOpen(false);
        const link = chooseYourGoal.filter((goal) => goal.title === value)[0].link;
        setSelectedLink(link);
    };

    const handleDiscoverCourse = () => {
        router.push(selectedLink);
    };

    const handleClickOutside = ()=>{
        if(!isOpen) return;
        setIsOpen(false);
    }

   
    return (
        <div className="bg-gray-200" onClick={handleClickOutside}>
            <div className='max-w-7xl mx-auto py-20 text-gray-900 lg:px-10'>
                <div className="flex flex-col gap-10">
                    <div className="">
                        <p className='text-5xl font-bold lg:px-0 px-4'>Let&apos;s find the right <br className='lg:block hidden' /> course for you...</p>
                    </div>
                    <div className=" flex gap-4 items-center flex-wrap lg:justify-normal justify-center">
                        <div className='relative'>
                            <p className='font-bold'>I would like to</p>
                            <div
                                className='flex justify-between items-center w-72 truncate bg-white border border-gray-400 px-4 py-4 rounded cursor-pointer'
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                { selectedOption || 'Choose your goal'}
                                <div className='mr-2'>{isOpen ? '🔽' : '🔼'}</div>
                            </div>
                            {isOpen && (
                                <div className='absolute mt-1 w-72 max-h-40 overflow-y-auto bg-white border border-gray-400 rounded shadow'>
                                    {chooseYourGoal.map((goal) => (
                                        <div
                                            key={goal.id}
                                            className='px-4 py-2 hover:bg-gray-300 cursor-pointer'
                                            onClick={() => handleOptionClick(goal.title)}
                                        >
                                            {goal.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className='w-72'>
                            <p className=' font-bold'>My English level is</p>
                            <select className='w-72 appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
                                <option value=''>Choose your level</option>
                                <option value=''>Beginner</option>
                                <option value=''>Intermediate</option>
                                <option value=''>Advance</option>
                            </select>
                        </div>
                        <div className='w-72'>
                            <p className=' font-bold'>I prefer to study</p>
                            <select className='w-72 appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
                                <option value=''>Choose your study</option>
                                <option value=''>Offline</option>
                                <option value=''>Online</option>
                                <option value=''>Noida Sec 15</option>
                                <option value=''>New Ashok Nagar</option>
                            </select>
                        </div >
                        <div className=''>
                            <p className=' font-bold'>My age is</p>
                            <select className='w-72 appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
                                <option value=''>Choose your age</option>
                                <option value=''>8-15</option>
                                <option value=''>15-20</option>
                                <option value=''>20-30</option>
                                <option value=''>above-30</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-20">
                        <button className='bg-blue-700 text-gray-100 px-4 py-3 rounded text-xl' onClick={handleDiscoverCourse}>Discover my perfect course</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseForYou