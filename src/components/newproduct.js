import React from 'react';
import Button from './button';

const Newproduct = () => {
    const img = {
        // height: '450px'
    }




    return (
        <div className='container-md p-3'>
            <div className='row'>

                <div className='col-lg-5 col-md-12'>
                    <img className='fluid  w-100'  style={img} src="https://elabd.blob.core.windows.net/elabdcontainer/8fee397e-211e-4f2e-a3ad-d3ebe10b91bf-637720497849849428.jpg" alt="" />

                </div>

                <div className='col-5   align-self-center '>

     
                     <h1 className='align-items-center' >Mini Sandwiches</h1>
                    <p>The most delicious mini sandwiches baked with expertise, taste and quality</p>
                   {/* <div> */}
                   <Button name="Shop now" />
                   {/* </div>  */}
                     
                </div>



            </div>
        </div>
    );
}

export default Newproduct;
