import BentoGallery from '@/components/Home/BentoGallery'
import { commonMetaData } from '@/utils/helper';
import React from 'react'

export const generateMetadata = async () => {
    const metaData = commonMetaData({
      title: 'Gallery',
      description: 'Crystal Pathshala is a leading institute for Spoken English, Public Speaking, Personality Development, Professional English, and Corporate Training in Noida, Delhi NCR.',
      image: 'https://crystalpathshala.com/images/rahul-p-dev.png',
      url: '/gallery',
      keywords: [],
    });
    return {
      ...metaData,
    };
  };

const GalleryPage = () => {
    return (
        <div>
            <BentoGallery isHomePage={false} />
        </div>
    )
}

export default GalleryPage