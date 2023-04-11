import React from 'react';
import Img from '../assets/3828537.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <div className="my_container">
        <img src={Img} alt="" className="w-6/12 block" />
        <Link to='/'>
          <button className='btn'>Go Back Home</button>
        </Link>
      </div>
    );
};

export default Error;