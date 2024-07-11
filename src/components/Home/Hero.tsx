import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover object-center"
        >
          <source src="/assets/crystal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)] opacity-60"></div>
      </div>
      <div className=" max-w-5xl mx-auto absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white">
          <h1 className="title-font sm:text-7xl text-4xl mb-4 font-bold">
          English Courses & Personality Development.
          </h1>
          <p className="mb-8 leading-relaxed text-white">
          At Crystal Pathshala, we take pride in being an exceptional English Language School and the Best Institute for Spoken English Course & Personality Development. Join us on a journey towards fluent English and holistic personality enhancement.
          </p>
          {/* <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            Neutra shabby chic ramps, viral fixie.
          </p> */}
          <div className="flex justify-center items-center">
            <button className="bg-blue-600 inline-flex py-3 px-8 rounded-lg items-center hover:bg-blue-500 text-gray-100 focus:outline-none">
              Contact us
            </button>
            <button className="border inline-flex py-3 px-8 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
              Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
