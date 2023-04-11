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
    console.log(jobs);
    return (
        <div>
            {
                jobs.map(job => <ShowJob key={job.id} job={job} />)
            }
        </div>
    );
};

export default Jobs;

