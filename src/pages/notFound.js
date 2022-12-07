import React, { Component } from 'react';
import Footerc from '../components/footerc';
import Footermain from './../components/footermain';
import Cards from './../components/cards';
import Slideshow from './../components/Slideshow';
import Newproduct from './../components/newproduct';
import Monthspecials from './../components/monthspecials';
import Banners from './../components/banners';

class NotFound extends Component {
    render() {
        const mystyle = {
            //  fontFamily: "Arial"
            height: "900px",
            width: "500px"

        };

        return (
            < >
                {/* <div className='d-flex justify-content-center '>
                    <img style={mystyle} src="https://elabdfoods.com/public/Content/images/shapes/Group%202576.jpg" alt="BigCo Inc. logo" />
                </div> */}
                {/* <Cards/> */}
                     
                  
 
                {/* <Footermain/> */}
                {/* <Footerc /> */}
            </>
        );
    }
}

export default NotFound;
