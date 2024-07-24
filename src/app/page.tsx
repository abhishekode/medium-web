import React from 'react'
import { Metadata } from 'next'
// import Blogs from '@/components/blogs'
import Hero from '@/components/Home/Hero'
import { commonMetaData } from '@/utils/helper'
import BlogLists from '@/components/blogs';

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    title: 'Learn Spoken English & Professional Skills in Noida, Delhi NCR',
    description: 'Crystal Pathshala offers top-tier training in Spoken English, Public Speaking, Personality Development, and Corporate Training in Noida, Delhi NCR. Elevate your skills today!',
    image: 'https://crystalpathshala.com/images/rahul-p-dev.png',
    url: '/',
    keywords: ['Crystal Pathshala', 'Spoken English', 'Public Speaking', 'Personality Development', 'Professional English', 'Corporate Training', 'Noida', 'Delhi NCR', 'skills training'],
  });
  return {
    ...metaData,
  };
};



const Home = async () => {
  return (
    <div className='bg-gray-50 text-gray-900'>
      <Hero />
      <BlogLists />
      {/* <Blogs /> */}
    </div>
  )
}

export default Home