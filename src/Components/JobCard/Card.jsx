import React from 'react';
import { MapPinIcon,CurrencyDollarIcon } from "@heroicons/react/24/solid";
import './Card.css'
const Card = ({ job }) => {
    console.log(job);
    const {id,company,location,salary,title,types,logo} = job
    return (
      <div className=" border border-blue-300 rounded-lg p-10 space-y-2 mb-5 lg:mb-0">
        <img src={logo} alt="" className="w-28" />
        <h2 className="text-2xl font-bold">{title}</h2>
        <h3 className="text-xl text-gray-500">{company}</h3>
        {types.map((type) => (
          <strong className=" rounded-lg border-blue-500 border py-2 px-3 mr-2 inline-block font-semibold text-blue-500 ">
            {type}
          </strong>
        ))}
        <div className="font-semibold text-blue-950 lg:flex">
          <h4 className="mr-7 inline-flex">
            <MapPinIcon className="h-6 w-6 text-gray-400" />
            {location}
          </h4>
          <h4 className='inline-flex location'>
            <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
            Salary: {salary}
          </h4>
        </div>
        <button className="btn">View Details</button>
      </div>
    );
};

export default Card;