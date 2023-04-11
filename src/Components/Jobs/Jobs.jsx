import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/Fakedb';
import { useLoaderData } from 'react-router-dom';
import ShowJob from '../ShowApplyJob/ShowJob';

const Jobs = () => {
       const [jobs,setJobs] = useState([])
        const data = getShoppingCart()
        const allData = useLoaderData()
    const final =  Object.keys(data)
   
    
    useEffect(() => {
        let newArr = []
        for (let i of final) {
             const jobFind = allData.find((data) => data.id == i);
            newArr.push(jobFind)
             setJobs(newArr);
        }
      
    }, [])
    const remote = () => {
         const arr = []
         const findRemote = jobs.find(data => data.types[0] === 'Remote');
        arr.push(findRemote);
        setJobs(arr)
        console.log(jobs);
    };
    const onsite = () => {
         const arr = []
         const findRemote = jobs.find(data => data.types[1] === 'Onsite');
        arr.push(findRemote);
        setJobs(arr)
        console.log(jobs);
     };
   
    return (
      <div>
        <div className="text-right container mt-16">
          <button className="btn mr-4" onClick={() => remote()}>
            Remote
          </button>
                <button className="btn" onClick={() => onsite()}>Onsite</button>
        </div>
        <div>
          {jobs.map((job) => (
            <ShowJob key={job.id} job={job} />
          ))}
        </div>
      </div>
    );
};

export default Jobs;

