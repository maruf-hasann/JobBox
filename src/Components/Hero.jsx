import React from 'react';
import Img from '../assets/hero-image.png'

const Hero = () => {
    return (
      <div className="flex flex-col items-center justify-between my_container lg:flex-row">
        {/* Text  */}
        <div className="max-w-xl text-center mb-7 lg:text-left">
          <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
            One Step <br className="hidden md:block" /> Closer To Your
            <br className="hidden md:block" /> Dream Job
          </h1>
          <p className='mb-7'>
            Explore thousands of job opportunities with all the
            <br className="hidden md:block" /> information you need. Its your
            future. Come find it. Manage all <br className="hidden md:block" />
            your job application from start to finish.
          </p>
          <button className="btn">Get Started</button>
        </div>
        {/* Hero img */}
        <div className='px-6 lg:px-0'>
          <img src={Img} alt="" className="w-4/5 block" />
        </div>
      </div>
    );
};

export default Hero;