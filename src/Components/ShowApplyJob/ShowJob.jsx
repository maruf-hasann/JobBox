import React from "react";
import { MapPinIcon,CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const ShowJob = ({job}) => {
  
  const {logo, title, company, types, location, salary,id } = job;
  return (
    <div className="my_container ">
     
      <div className="lg:flex items-center justify-between border rounded-lg p-6">
        <div className="lg:flex items-center">
          <div className="w-3/1 ">
            <img src={logo} alt="" />
          </div>
          <div className="ml-3">
            <h3 className="font-bold text-2xl">{title}</h3>
            <h3 className="font-semibold">{company}</h3>
            <div>
              {types.map((type,i) => (
                <span className="border  p-2 font-bold my-4 inline-block mr-3" key={i}>
                  {type}
                </span>
              ))}
            </div>
            <div>
              <span className="inline-flex mr-4">
                <MapPinIcon className="h-6 w-6 text-blue-500" />
                {location}
              </span>
              <span className="inline-flex">
                <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                {salary}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <Link to={`/card/${id}`}>
            <button className="btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowJob;
