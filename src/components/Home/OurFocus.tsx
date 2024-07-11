import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurFocus = () => {
    const focus = {
        title: "OUR FOCUS",
        focusOn: "To help you succeed in life",
        description: "Achieve your learning aims and communicate effectively in English. Above all, you will develop the ability to use English naturally in a whole range of contexts at work, in an educational setting or for international communication. Our English courses in Noida Sec 15 will help you obtain your vision for success with your ambitions in the shortest possible time.",
    }
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-5">
                        <h1 className="mb-4 font-medium text-blue-700">{focus.title}</h1>
                        <p className="leading-relaxed sm:text-4xl text-3xl text-gray-900 font-bold">{focus.focusOn}</p>
                        <p>{focus.description}</p>
                        <div className="flex justify-center">
                            <Link href={'/courses'} className="inline-flex text-white bg-blue-600 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">See All Courses</Link>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Image className="object-cover object-center rounded" height={720} width={800} alt="hero" src="/assets/focus.jpg" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurFocus