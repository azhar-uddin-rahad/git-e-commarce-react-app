import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Shopping from '../components/Shopping/Shopping';


const Main = () => {
    return (
        <div>
          <Header></Header>
          <Outlet></Outlet>
         
        </div>
    );
};

export default Main;