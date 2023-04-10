import React from 'react';
import './Single.css'
const SingleCategory = ({ singleCategory }) => {
  const { icon, category, job } = singleCategory;
  return (
    <div className="bg_category p-7 rounded-xl text-center space-y-2 lg:text-left">
      <img src={icon} alt="" className='mx-auto lg:mx-0' />
      <h3 className="text-xl font-bold text-gray-700">{category}</h3>
      <p className="text-gray-500">{job} Jobs Available</p>
    </div>
  );
};

export default SingleCategory;