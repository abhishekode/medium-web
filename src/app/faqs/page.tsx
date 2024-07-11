import Faqs from '@/components/Home/Faqs'
import { commonMetaData } from '@/utils/helper';
import React from 'react'

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    title: 'FAQs',
    description: 'Crystal Pathshala is a leading institute for Spoken English, Public Speaking, Personality Development, Professional English, and Corporate Training in Noida, Delhi NCR.',
    image: 'https://crystalpathshala.com/images/rahul-p-dev.png',
    url: '/faqs',
    keywords: [],
  });
  return {
    ...metaData,
  };
};

const faq = () => {
  return (
    <div className='bg-white text-gray-900'>
        <Faqs isPage />
    </div>
  )
}

export default faq