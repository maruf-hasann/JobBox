import React from 'react';
import Header from './Components/Header/Header';
import { Outlet, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;