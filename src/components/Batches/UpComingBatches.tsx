import React from 'react'
import { upComingBatches } from '../Common/Jsondata'
import SingleUpComingBatches from './SingleUpComingBatches'

const UpComingBatches = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-blue-600 font-bold text-3xl">UPCOMING BATCHES</h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="py-10 flex flex-wrap justify-center gap-8">
          {upComingBatches.map((course) => (
           <SingleUpComingBatches course={course} key={course.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpComingBatches