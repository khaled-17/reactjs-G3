import React from 'react';
import Rating from './../components/Rating';
import Footermain from './../components/footermain';

import Footerc from './../components/footerc';

import { Button } from 'react-bootstrap';
import Quantity from './../components/quantity ';
import { AiOutlineHeart } from "react-icons/ai";
import { FaShuttleVan } from 'react-icons/fa';
import Header from './../components/header/header';
import "../App.css";

const Singleproduct = () => {



    const icon = {
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingBottom: '5px',


        width: '100px',
    }
    const alerth = {
        height: '35px'


    }

    return (
        <>
            <Header />

            <div className='container'>


                <div className="row">

                    <div className="col-5 ">

                        <img className='w-75' src="https://elabd.blob.core.windows.net/elabdcontainer/9282b052-8e08-48b1-9968-58f53ff03ac4-637854438059048202.jpg" alt="" />


                    </div>


                    <div className="col-7  border-start">

                        <h5>Cookies Elabd vanilla 2pcs</h5>


                        <div className="d-flex flex-row">
                            <Rating />
                            <span className=" mx-2">|</span>
                            <button class=" "  >+ Add Review</button>
                        </div>
                        <div className="d-flex flex-row">
                            <h3>45 EGP</h3>
                            <Quantity />

                        </div>
                        <div>
                            <select name="cars" id="cars">
                                <option value="volvo">200 gm</option>
                                <option value="saab">400 gm</option>
                            </select>
                        </div>
                        <button class="btn btn-primary w-75 my-2 border-0 button-prod" > add to cart</button>
                        {/* <button class="btn btn-primary w-75  border-0 button-prod2"> One click order</button> */}
                        <div class="alert alert-secondary w-75" >
                            <p class="m-0"> <span class="fw-semibold">Shipment Fees :</span>  15 EGP</p>
                            <p class="m-0"><span class="fw-semibold">Address :</span>  ,,,,,,llllk-جرين ٤-Egypt</p>

                        </div>

                        <div class="alert m-0 alert-secondary d-flex justify-content-around p-0" style={alerth} role="alert">
                            <p class=""   >
                                <span class="">
                                    <span class="bg-secondary  rounded-5  text-white " style={icon}>
                                        <FaShuttleVan />
                                    </span >
                                    <span class="fw-semibold fs-6"> Delivered Within :</span>
                                </span> Delivered Within</p>


                            <p class="ms-auto"><AiOutlineHeart />Add To Wish list</p>
                        </div>


                    </div>


                </div>
            </div>


            <div class="alert alert-secondary">

                <div class="h6 pb-2 mb-4 ">
                    <ul class='border'>
                        DETAILS
                    </ul>

                    <div class="d-flex">

                        <hr class="border border-danger border-1  opacity-50 w-25 " />
                        <hr class="border border-danger border-1 w-75" />
                    </div>
                </div>






                Product Code: 4005016012
                Categories: Kahk and Biscuits, Petits-fours

            </div>
            <Footermain />
            <Footerc />







            {/* <!-- The Modal --> */}
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Write Review</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <h5>Rate your Product</h5>
                            <form>
                                <Rating className="border border-primary" />
                                <div className="form-group" >
                                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea style={{ height: '100px' }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="modal-footer mx-auto" >
                                    <button type="submit" style={{ background: '#F6B0AB' }} className="btn  mb-1">submit</button>
                                    <button type="button" className="btn btn-dark " data-bs-dismiss="modal">Cancel</button>
                                </div>

                            </form>

                        </div>


                        {/* <!-- Modal footer --> */}

                    </div>
                </div>


            </div>





        </>
    );
}

export default Singleproduct;
