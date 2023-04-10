import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../JobCard/Card';

const Featured = () => {
    const jobData = useLoaderData()
    return (
      <div className="my_container">
        <div className="text-center space-y-4 mb-10">
          <h3 className="text-4xl font-bold">Job Category List</h3>
          <p className="text-gray-700">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className='grid lg:grid-cols-2 lg:gap-5'>
          {jobData.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      </div>
    );
};

export default Featured;