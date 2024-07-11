import { GalleryAPI, IGallery } from '@/utils/api/gallery.api';
import Image from 'next/image';
import React from 'react'
import UnderConstruction from '../Common/UnderConstruction';

interface BentoGalleryProps {
  isHomePage: boolean;
}
const BentoGallery: React.FC<BentoGalleryProps> = async ({ isHomePage }) => {
  const response = await GalleryAPI.getAll();

  if (!response.status) {
    return <UnderConstruction title='Gallery' />
  }
  
  let images: IGallery[] = response.result.gallery || [];

   // Check if home page and limit gallery images to 10
   if (isHomePage && images.length > 10) {
    images = images.slice(0, 10);
  }

  return (
    <div className='max-w-6xl mx-auto h-full py-20'>
      <div className="">
        <p className='text-3xl text-center py-5'>Our Gallery, Some Memories</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.length > 0 ? images.map((img, i) => (
          <div className="h-[400px] overflow-hidden" key={i}>
            <Image
              className="max-w-full rounded-lg object-cover object-center h-full cursor-pointer transition-transform hover:scale-125 hover:shadow-md duration-500 ease-in-out"
              src={img.featuredImage}
              alt={`new-ben${i}`}
              height={400}
              width={400}
            />
          </div>
        )) : (
          <div className="text-center">
            <p className="text-gray-500">No Images found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BentoGallery