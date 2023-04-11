import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {PhoneIcon,MapPinIcon,EnvelopeIcon,CurrencyDollarIcon, CalendarDaysIcon  } from "@heroicons/react/24/solid";
import { addToDb } from '../utilities/Fakedb';
const CardInfo = () => {
    const [data, setData] = useState({})
    let { jobId } = useParams();
    const cardData = useLoaderData()
    

    useEffect(() => {
        if (cardData) {
            let filtering = cardData.find((d) => d.id == jobId);
            setData(filtering);
        } else {

        }
     },[jobId])

  
 const {id,Phone,email,location, desc, responsibility, requirements, Experiences, salary, title } =
   data;

  const handleApplyJob = (id) => {
    addToDb(id)
  }
  
    
    return (
      <div className="my_container">
        <div className="text-center space-y-5 lg:space-y-4 mb-10">
          <h3 className="text-4xl font-bold">Job Details</h3>
        </div>
        <div className="lg:flex">
          <div className="lg:w-3/5 space-y-4">
            <p className="text-gray-500 lg:w-9/12">
              <strong className="text-black">Job Description :</strong> {desc}
            </p>
            <p className="text-gray-500 lg:w-9/12">
              <strong className="text-black">Job Responsibility :</strong>{" "}
              {responsibility}
            </p>
            <div>
              <strong>Educational Requirements:</strong>
              <p className="text-gray-500 lg:w-9/12">{requirements}</p>
              <strong>Experiences:</strong>
              <p className="text-gray-500">{Experiences}</p>
            </div>
          </div>
          {/* JOb information */}
          <div className="bg-blue-50 p-4 rounded-lg mt-6 lg:mt-0">
            <h1 className="font-bold text-blue-900 mb-3 ">JOB Details</h1>
            <hr className="border-blue-400"></hr>
            <div className="flex flex-col py-4">
              <h3 className="inline-flex mb-2 ">
                <CurrencyDollarIcon className="h-6 w-6 text-blue-500 mr-2" />
                Salary : {salary} (Per Month)
              </h3>
              <h3 className="inline-flex">
                <CalendarDaysIcon className="h-6 w-6 text-blue-500 mr-2" />
                Job Title: {title}
              </h3>
            </div>
            <hr className="border-blue-400"></hr>
            <h3 className="font-bold text-blue-900 mt-3">Contact Information</h3>
            <div className="flex flex-col mt-2 mb-4">
              <h3 className="inline-flex">
                <PhoneIcon className="h-6 w-6 text-blue-500 mr-2" />
                Phone : {Phone}
              </h3>
              <h3 className="inline-flex my-2">
                <EnvelopeIcon className="h-6 w-6 text-blue-500 mr-2" />
                Email : {email}
              </h3>
              <h3 className="inline-flex">
                <MapPinIcon className="h-6 w-6 text-blue-500 mr-2" />
                Location : {location}
              </h3>
            </div>
            <button className="btn" onClick={() => handleApplyJob(id)} >Apply Now</button>
          </div>
        </div>
      </div>
    );
};

export default CardInfo;