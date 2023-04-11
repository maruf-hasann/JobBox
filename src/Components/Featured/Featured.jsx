import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../JobCard/Card';

const Featured = () => {
   let jobData = useLoaderData();
  const [data,setData] = useState(jobData)
  useEffect(() => {
    const sliceData = data.slice(0, 4)
    setData(sliceData)
  },[])
  const showAll = () => {
    let showAll = jobData.slice(0,6)
    setData(showAll)
    
  }
  
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
          {data.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
        <div className='mt-14 text-center'>
          <button className='btn' onClick={() => showAll()}>Show More</button>
        </div>
      </div>
    );
};

export default Featured;