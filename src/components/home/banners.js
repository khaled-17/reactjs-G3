import React from 'react';
import reportWebVitals from '../../reportWebVitals';
import Button from '../button';

const Banners = () => {




  const wrapper = {
    position: 'relative',
  }
  const myLayer = {
    position: 'absolute', /* becomes a layer */
    left: '30%', /* relative to its parent wrapper */
    top: '60%', /* relative to its parent wrapper */

    // transform: 'translate(-50%, -50%)',
    // msTransform:' translate(-50%, -50%)',
  

    zIndex: '2',

    fontSize: '16px',
    backgroundColor: '#F6B0AB',


  }



  return (
    <div className="container-md  ">
      <div className="row">


        <div className="col ">




          <img className='img-fluid w-100' src="https://elabd.blob.core.windows.net/elabdcontainer/7a27c3da-af7e-4c8c-a1a2-4c12821e97a9-638011841777956594.jpg" alt="" />


          <img className='img-fluid w-100' src="https://elabd.blob.core.windows.net/elabdcontainer/7a27c3da-af7e-4c8c-a1a2-4c12821e97a9-638011841777956594.jpg" alt="" />



        </div>

        <div className="col-sm-12  col-md-5">
          <img className='img-fluid' src="https://elabd.blob.core.windows.net/elabdcontainer/759c3ac1-3ee5-48fe-a02f-80180b50de06-638016987660434646.jpg" alt="" />

        </div>


        <div className="col">
          <img className='img-fluid w-100' src="https://elabd.blob.core.windows.net/elabdcontainer/7a27c3da-af7e-4c8c-a1a2-4c12821e97a9-638011841777956594.jpg" alt="" />
          <img className='img-fluid w-100' src="https://elabd.blob.core.windows.net/elabdcontainer/7a27c3da-af7e-4c8c-a1a2-4c12821e97a9-638011841777956594.jpg" alt="" />
        </div>






      </div>
    </div>
  );
}

export default Banners;
