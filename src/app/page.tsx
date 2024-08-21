import React from 'react'
import { Metadata } from 'next'
// import Blogs from '@/components/blogs'
import Hero from '@/components/Home/Hero'
import { commonMetaData } from '@/utils/helper'
import BlogLists from '@/components/blogs';

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    title: 'Home',
    description: 'This is description of home page!',
    image: 'https://website.com/images/rahul-p-dev.png',
    url: '/',
    keywords: ['blog', 'hello'],
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