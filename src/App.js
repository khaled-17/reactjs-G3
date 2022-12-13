// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import Home from './pages/home';
import NotFound from './pages/notFound';

import CategoryID from './pages/CategoryID';
import TermsandConditions from './pages/TermsandConditions';
import Singleproduct from './pages/singleproduct';
import AboutUs from './pages/AboutUs';


function App() {
  const { t, i18n } = useTranslation();

  document.body.dir = i18n.dir();


  
  // console.log(isrtl);
  return (
    <>
      <BrowserRouter>

        {/* <Singleproduct />  dir={(items=="en")?'ltr':'rtl'}*/}
        <div >

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/*" element={<NotFound/>} />
            <Route path="/CategoryID" element={<CategoryID/>} />
            <Route path="/TermsandConditions" element={<TermsandConditions/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/Singleproduct" element={<Singleproduct/>} />
          </Routes>
        </div>




        {/* <Routes>

        <Routes />  */}





      </BrowserRouter>

    </>

  );
}

export default App;
