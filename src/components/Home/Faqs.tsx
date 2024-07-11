import { faqQuestionList } from '@/constant/AppData'
import Link from 'next/link'
import React from 'react'
import { MdReadMore } from 'react-icons/md'

interface FaqsProps {
    isPage: boolean
}

const Faqs: React.FC<FaqsProps> = ({ isPage }) => {
    return (
        <div className={`${isPage ? '': ''}`}>
            <div className='max-w-6xl mx-auto py-24 px-4 relative'>
                <h2 className="text-blue-600 font-bold text-3xl mb-8 text-center">FAQS</h2>
                <div>
                    <div>
                        <div className="flex flex-col gap-10">
                            {faqQuestionList.map((faq) => (
                                <div key={faq.id} className={`p-4 ${isPage? 'shadow-md px-4 py-4 w-full': 'border border-gray-500 rounded-md'}`}>
                                    <div className="text-2xl font-bold text-blue-700 mb-8">{faq.question}</div>
                                    <div className="flex my-2">{faq.description}</div>
                                    {isPage && (
                                        <div className=''>
                                            <div className="my-3">{faq.subDescription}</div>
                                            <div className="flex flex-col gap-8">
                                                {faq.subContent?.length > 0 && faq.subContent.map((item, index) => (
                                                    <li key={item.id} className="flex gap-2">
                                                        <div className="">
                                                            {index + 1}.
                                                        </div>
                                                        <div className="">
                                                            <p className="font-bold">{item.question}</p>
                                                            <p>{item.answer}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {!isPage && <Link href={'/faqs'} className='flex justify-end w-full text-blue-700' title='Read More'>---&gt;</Link>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
