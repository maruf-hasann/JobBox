import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const Category = () => {
    const [categorys,setCategorys] = useState([])
    useEffect(() => {
        fetch('Category.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    },[])
    return (
      <div className="my_container">
        <div className="text-center space-y-4 mb-10">
          <h3 className="text-4xl font-bold">Job Category List</h3>
          <p className="text-gray-700">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className='grid gap-7  lg:grid-cols-4'>
          {categorys.map((singleCategory) => (
            <SingleCategory
              key={singleCategory.id}
              singleCategory={singleCategory}
            ></SingleCategory>
          ))}
        </div>
      </div>
    );
};

export default Category;