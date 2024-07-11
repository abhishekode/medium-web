import React from 'react'
import { Metadata } from 'next'
// import Blogs from '@/components/blogs'
import Hero from '@/components/Home/Hero'
import BasicInfo from '@/components/Home/BasicInfo'
import OurCourses from '@/components/courses/OurCourses'
import Testimonial from '@/components/Home/Testimonial'
// import OurFocus from '@/components/Home/OurFocus'
import CourseForYou from '@/components/courses/CourseForYou'
import OnlineEnglishTest from '@/components/Test/OnlineEnglishTest'
import Faqs from '@/components/Home/Faqs'
import UpComingBatches from '@/components/Batches/UpComingBatches'
import PersonalityDevelop from '@/components/Home/PersonalityDevelop'
import BentoGallery from '@/components/Home/BentoGallery'
import { CourseAPI } from '@/utils/api/course.api'
import { commonMetaData } from '@/utils/helper'
import YoutubeVideo from '@/components/Home/YoutubeVideo'

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
  const courses = await CourseAPI.getAll()
  console.log('first courses', courses.result);
  return (
    <div className='bg-gray-50 text-gray-900'>
      <Hero />
      <CourseForYou />
      <BasicInfo />
      <PersonalityDevelop />
      <div id='courses'>
        <OurCourses courses={courses.result} isHomePage={true} />
      </div>
      <Testimonial />
      <OnlineEnglishTest />
      <BentoGallery isHomePage={true} />
      <Faqs isPage={false} />
      <UpComingBatches />
      {/* <OurFocus /> */}
      <YoutubeVideo />
      {/* <Blogs /> */}
    </div>
  )
}

export default Home