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
import Profile from './pages/Profile';
// Mahmoud's pages import
import Zone from './pages/zone/Zone-page'
import Login from './pages/login/Login'
import Registration from './pages/Registration/Registration'
import Cart from './pages/cart/Cart'
import DonateButton from './Paypal/Paypal';
import  Paypal  from './Paypal/Paypal';


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
          <Route path="/Zone" element={<Zone />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/paypal" element={<Paypal />} />
            <Route path="/Registration" element={<Registration />} /> 
            <Route path="/Cart" element={<Cart />} /> 
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/CategoryID/:id" element={<CategoryID />} />
            <Route path="/TermsandConditions" element={<TermsandConditions />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Singleproduct" element={<Singleproduct />} />
          </Routes>
        </div>




        {/* <Routes>

        <Routes />  */}





      </BrowserRouter>

    </>

  );
}

export default App;
