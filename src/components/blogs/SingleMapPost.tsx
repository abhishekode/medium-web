import { IBlog } from '@/utils/api/blogs.api';
import { truncateText } from '@/utils/helper';
import Image from 'next/image';
import React from 'react'
import dayjs from 'dayjs';
import Link from 'next/link';

interface SingleMapPostProps {
  blog: IBlog;
}
const SingleMapPost: React.FC<SingleMapPostProps> = ({ blog }) => {
  const truncatedDescription = truncateText(blog.content, 20);


  const formattedDate = dayjs(blog.updatedAt).format('MMMM DD, YYYY, HH:mm a');


  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <Image
        src={blog.featuredImage}
        className="object-cover w-full h-64 rounded-tr-[3rem] col-span-1 bg-center"
        width={300}
        height={200}
        alt={blog.slug}
        loading="lazy"
      />
      <div className="col-span-1 md:col-span-3">
        <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">{formattedDate}</p>
        <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800 first-letter:uppercase">
          <Link href={`blog/${blog.slug}`}>
            <p className="text-gray-900 hover:text-purple-700 first-letter:uppercase">{blog.title}</p>
          </Link>
        </h2>
        <p className="truncate-two-lines" dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
        <button className="text-sm border px-4 py-1 rounded-tr-2xl mt-5">Read More</button>
      </div>
    </div>
  );
}

export default SingleMapPost