import React from 'react';
import Cards from './../components/cards';
import Sidebar from './../components/sidebar/sidebar';
import Header from './../components/header/header';
import Footerc from '../components/footerc';
import Footermain from './../components/footermain';


const CategoryID = () => {
    return (

        <>
            <Header/>
            <div className="containekr  text-center">
                <div className="row">
                    <div className='col-3 d-none d-lg-block' style={{ height: '500px' }}>


                        <Sidebar/>

                    </div>

                    {/* ///////////////////////////////////////////// */}

                    <div className=" col-lg-9  ">


                        <div className="container ">
                            <div className="row">
                                <div className="col m-2 text-start">
                                    <h6 >Showing 21 Of 68</h6>
                                </div>
                                <div className="col text-center ">

                                    <button type="button" className=" d-lg-none   btn btn-sm btn-light" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" ><svg xmlns="http://wwww3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel-fill" viewBox="0 0 16 16">
                                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                                    </svg> Filter</button>

                                </div>


                                <div className="col  text-end d-flex align-content-center">
                                    <h6 className='m-2 '>Sort BY </h6>
                                    <select className="form-select-sm btn-sm border-0" style={{ height: '41px' }}>
                                        <option selected="">New Arrivals</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center">

                           

                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />
                            <Cards />



                        </div>




                    </div>



                    {/* col-md-4 */}
                    {/* col-md-4 */}





                </div>





                <div className="offcanvas offcanvas-start w-100" tabindex="1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">filter </h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body ">
                        <div>
                            <idebar />
                        </div>
                        <div className="dropdown mt-3">


                        </div>
                    </div>
                </div>



            </div>
            <Footermain />
            <Footerc />
        </>

    );
}

export default CategoryID;
