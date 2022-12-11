import React from 'react';
import Slideshow from '../components/home/Slideshow';
import Newproduct from '../components/home/newproduct';
import Monthspecials from './../components/monthspecials';
import Banners from '../components/home/banners';
import Carou from './../components/carou';
import Footermain from './../components/footermain';
import Footerc from './../components/footerc';
import Header from './../components/header/header';
import Filter from './../components/Filter';
import Carousels from './../components/Carousel';
import Hederlang from './../components/hederlang';
import Sidebar from './../components/sidebar/sidebar';
 
const Home = () => {
    return (
        <>
            <Hederlang/>
            <Header />
            
            <Slideshow />
            <Newproduct />
 
            <Carousels />
 

            <Banners />
            <h2 className=' w-100 d-flex justify-content-center'>Best Seller</h2>

            <Carousels />

            <Footermain />
            <Footerc />
 
        </>
    );
}

export default Home;

