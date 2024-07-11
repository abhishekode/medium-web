"use client"
import React from 'react'

import { basicIntro } from '@/components/Common/Jsondata'

const BasicInfo = () => {

    return (
        <div className='-mt-20'>
            <div className="max-w-5xl mx-auto bg-blue-700 text-gray-300 min-h-56 flex lg:flex-row flex-col lg:py-0 py-10 justify-between gap-10 px-10 items-center rounded-md">
                <p>
                    A leading language school in Delhi & Noida
                </p>
                <p>
                    Crystal Pathshala has been serving for 5+ years now.Our commitment to excellence is evident in every aspect of our services. Whether you&apos;re seeking <span className='font-bold'>Spoken English</span>, <span className='font-bold'>Personality Development</span>, or <span className='font-bold'>Interview preparation</span>, we&apos;ve curated a diverse range to cater to your unique needs. Our team of dedicated professionals ensures that each service is executed with precision, delivering results that exceed expectations.
                </p>
            </div>
            <div className="max-w-7xl mx-auto py-16">
                <div className="flex gap-10 lg:justify-center items-center flex-col lg:flex-row">
                    {basicIntro.map((item) => (
                        <div key={item.id} className="flex gap-1 items-center">
                            <div className="text-5xl">
                                {item.icons}
                            </div>
                            <div className="">
                                <h3 className="capitalize">{item.title}</h3>
                                {/* <p className="text-sm">{item.text}</p> */}
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default BasicInfo