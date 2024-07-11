import OurCourses from '@/components/courses/OurCourses'
import { CourseAPI } from '@/utils/api/course.api'
import React from 'react'

const CoursePage = async () => {
    const courses = await CourseAPI.getAll()

    return (
        <div className='bg-gray-50 text-gray-900 min-h-screen'>
            <OurCourses courses={courses.result} isHomePage={false} />
        </div>
    )
}

export default CoursePage