import Image from 'next/image'
import React from 'react'

const BlogLists = () => {
    return (
        <section className="px-4 py-24 mx-auto max-w-7xl">
            <h2 className="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">All Articles</h2>
            <div className="w-full ">
                <div className="flex flex-col space-y-16">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((post) => (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-4" data-aos="fade-right" key={post}>
                            <Image
                                src="/images/hori-crystal-img3.jpeg"
                                className="object-cover w-full h-40 col-span-1 bg-center border shadow-sm rounded-2xl"
                                height={350}
                                width={200}
                                alt="Kutty"
                                loading="lazy"
                            />
                            <div className="col-span-1 md:col-span-3">
                                <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
                                <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                                    <a href="#" className="text-gray-900 hover:text-purple-700">Process Documents Using Artificial Intelligence For RPA Bots</a>
                                </h2>
                                <p className="mb-3 text-sm font-normal text-gray-500">
                                    Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                                    Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                                </p>
                                <a href="#" className="btn btn-light btn-sm">Read More</a>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="pt-10 mt-10 border-t border-gray-200">
                    <a href="#" className="w-full btn btn-light btn-lg md:w-auto">Load More</a>
                </div>
            </div>
        </section>

    )
}

export default BlogLists