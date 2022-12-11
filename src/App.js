// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component }  from 'react';

// import './App.css';

import Home from './pages/home';
import NotFound from './pages/notFound';

import CategoryID from './pages/CategoryID';
import TermsandConditions from './pages/TermsandConditions';
import Singleproduct from './pages/singleproduct';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <>
      <BrowserRouter>

        {/* <Singleproduct /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/CategoryID" element={<CategoryID />} />
          <Route path="/TermsandConditions" element={<TermsandConditions />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Singleproduct" element={<Singleproduct />} />
        </Routes>




        {/* <Routes>

        <Routes />  */}





      </BrowserRouter>

    </>

  );
}

export default App;
