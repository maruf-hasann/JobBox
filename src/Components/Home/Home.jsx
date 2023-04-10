import React from 'react';
import Hero from '../Hero';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <>
            <Hero />
            <Category />
            <Featured/>
        </>
    );
};

export default Home;