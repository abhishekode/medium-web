import UnderConstruction from '@/components/Common/UnderConstruction'
import SingleMapPost from '@/components/blogs/SingleMapPost'
import { BlogAPI, IBlog } from '@/utils/api/blogs.api'
import { commonMetaData } from '@/utils/helper';
import React from 'react'

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    title: 'Blogs',
    description: 'Crystal Pathshala is a leading institute for Spoken English, Public Speaking, Personality Development, Professional English, and Corporate Training in Noida, Delhi NCR.',
    image: 'https://crystalpathshala.com/images/rahul-p-dev.png',
    url: '/blog',
    keywords: ['blogs', 'articles', 'posts', 'insights', 'experiences'],
  });
  return {
    ...metaData,
  };
};

const Blog = async () => {
  const response = await BlogAPI.getAll()

  if (!response.result || !response.status) {
    return <UnderConstruction title='Blog' />
  }

  const blogs = response.result.blogs || []

  return (
    <div className='bg-gray-50 text-gray-950 min-h-screen'>
      <section className="px-4 py-24 mx-auto max-w-7xl ">
        <h2 className="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">All Articles</h2>
        <div className="w-full xl:w-4/6">
          <div className="flex flex-col space-y-16">
            {blogs.length > 0 ? blogs.map((blog: IBlog) => (
              <SingleMapPost blog={blog} key={blog._id} />
            )) : (
              <div className="text-center">
                <p className="text-gray-500">No blogs found</p>
              </div>
            )}
          </div>
          {blogs.length > 0 && <div className="pt-10 mt-10 border-t border-gray-200">
            <button className="w-full btn btn-light btn-lg md:w-auto">Load More</button>
          </div>}
        </div>
      </section>

    </div>
  )
}

export default Blog