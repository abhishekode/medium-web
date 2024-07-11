import React from 'react';
import Link from 'next/link';
import { ICourse, ICourseResponse } from '@/utils/api/course.api';
import Image from 'next/image';
import { truncateText } from '@/utils/helper';


const CourseCard = ({ course }: { course: ICourse }) => {

  const truncatedDescription = truncateText(course.description.toLowerCase(), 20);

  return <Link href={`courses/${course.slug}`} key={course._id}>
    <div className="w-96 min-h-[26rem] shadow-md transition-all ease-in-out cursor-pointer hover:shadow-2xl flex flex-col border gap-5">
      <div className="h-64 border overflow-hidden">
        <div className="transition-transform h-full hover:scale-105 hover:shadow-md duration-500 ease-in-out">
          <Image src={course.featuredImage} height={300} width={400} alt={course.title} className='object-cover' />
        </div>
      </div>
      <div className="px-6 py-4 space-y-2">
        <h3 className="text-xl font-bold capitalize">{course.title}</h3>
        <p className="truncate-two-lines" dangerouslySetInnerHTML={{ __html: truncatedDescription }}></p>

      </div>
    </div>
  </Link>

};

const OurCourses = async ({ courses, isHomePage }: { courses: ICourseResponse, isHomePage: boolean }) => {
  // Check if home page and limit gallery images to 10
  let course: ICourse[] = courses.courses || [];
  if (isHomePage && course.length > 3) {
    course = course.slice(0, 3);
  }

  return (
    <div className="bg-gray-100 py-20">
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-blue-600 font-bold text-xl">OUR COURSES</h2>
        <p className="text-4xl font-semibold text-center">
          Help you meet your learning <br /> objectives in the shortest time
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="py-20 flex flex-wrap justify-start gap-8">
          {course.length > 0 ? (
            course?.map((course: any) => <CourseCard key={course?._id} course={course} />)
          ) : (
            <p className="text-center text-gray-500">No courses available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
