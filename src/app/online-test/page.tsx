import UnderConstruction from '@/components/Common/UnderConstruction'
import { commonMetaData } from '@/utils/helper';
import React from 'react'


export const generateMetadata = async () => {
  const metaData = commonMetaData({
    title: 'Online Test',
    description: 'Crystal Pathshala is a leading institute for Spoken English, Public Speaking, Personality Development, Professional English, and Corporate Training in Noida, Delhi NCR.',
    image: 'https://crystalpathshala.com/images/rahul-p-dev.png',
    url: '/online-test',
    keywords: [],
  });
  return {
    ...metaData,
  };
};

const OnlineTest = () => {
  return (
    <div>
        <UnderConstruction title='Online Test' />
    </div>
  )
}

export default OnlineTest