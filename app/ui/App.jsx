import React from 'react';
import { Header } from './common/header/Header.jsx';
import { Footer } from './common/footer/Footer.jsx';
import { MainRoutes } from './common/main/MainRoutes.jsx';
import { Outlet } from 'react-router-dom';

export const App = () => {
  
  return(
     
    <> 
  
    <div>
    <Header/>
    <div className="mx-auto max-w-7xl p-2">
    <MainRoutes />
  </div>
    <Outlet />
    <Footer/>
    </div>
  </>
);
  }