"use client";
import React from 'react';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { userComments } from '../Common/Jsondata';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FcGoogle } from 'react-icons/fc';
import { MdStar } from 'react-icons/md';

const Testimonial = () => {
    const bgColors = ['bg-blue-600', 'bg-red-600', 'bg-green-600', 'bg-yellow-600', 'bg-indigo-600', 'bg-purple-600'];

    return (
        <div className="py-16 bg-slate-400">
            <div className="max-w-7xl mx-auto">


                <div className="py-16">
                    <div className=" flex flex-col">
                        <h2 className='text-xl text-blue-600 font-extrabold'>TESTIMONIALS</h2>
                        <p className='text-2xl font-semibold'>What Our Students Say</p>
                    </div>
                </div>
                <div className=' overflow-hidden'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className='min-h-96'
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },

                        }}
                    >
                        {userComments.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <div className={`min-h-[26rem] px-10 flex flex-col gap-3 pt-10 cursor-pointer rounded shadow-md bg-white hover:scale-105 transition-all ease-in-out`}>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2 items-center">
                                            <p className={`font-semibold uppercase h-10 w-10 text-gray-100 flex justify-center items-center rounded-full ${bgColors[index % bgColors.length]}`}>{item.name[0]}</p>
                                            <p className='font-semibold'>{item.name}</p>
                                        </div>
                                        <FcGoogle className=' text-3xl' />
                                    </div>
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <MdStar key={value} className='text-yellow-500' />
                                        ))}
                                    </div>
                                    <p className='text-sm text-left'>{item.comment}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
