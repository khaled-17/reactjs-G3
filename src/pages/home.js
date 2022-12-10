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
import Sidebar from './../components/sidebar/sidebar';
 
const Home = () => {
    return (
        <div>
            <Header />
            
            <Slideshow />
            <Newproduct />
 
            <Carousels />
 

            <Banners />
             <h2 className='m-4 col-12 d-flex justify-content-center'>Best Seller</h2>

            <Carousels />

            <Footermain />
            <Footerc />
            <Sidebar />

        </div>
    );
}

export default Home;

