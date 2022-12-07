import React from 'react';
import Slideshow from './../components/Slideshow';
import Newproduct from './../components/newproduct';
import Monthspecials from './../components/monthspecials';
import Banners from './../components/banners';
import Carousels from './../components/Carousel';
import Footermain from './../components/footermain';
import Footerc from './../components/footerc';

const Home = () => {
    return (
        <div>
            <Slideshow />
            <Newproduct />

            {/* <Monthspecials /> */}
            <Carousels />


            <Banners />
            <Carousels />
            <Footermain/>
            <Footerc/>
        </div>
    );
}

export default Home;

