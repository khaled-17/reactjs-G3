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
 
const Home = () => {
    return (
        <div>
            <Header />
            <Slideshow />
            <Newproduct />

            {/* <Monthspecials /> */}
            <Filter />
            <Carousels />
            <Carou/>


            <Banners />
            {/* <Carousels /> */}
            <Footermain />
            <Footerc />
        </div>
    );
}

export default Home;

