import './cart.scss'

import {  RiDeleteBin6Line } from 'react-icons/ri';
import {  BsFilePlus ,BsFileMinus} from 'react-icons/bs';
import React, { useState } from 'react';
import Hederlang from '../../components/hederlang'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footermain'





const Cart = ()=> {
    
    
  const countStateArray = useState(1);
  const count = countStateArray[0];
  const setCount = countStateArray[1];
  
  // const increase = () => {
  //   setCount(prevCount => prevCount + 1)
  //   setCount(prevCount => prevCount + 1)    
  // };
  
  const increase = () => {
    setCount(count + 1);
  }; 
  
  // broken decrease
  // const decrease = () => setCount(prevCount => {
  //   if (prevCount <= 0) return;
  //   return prevCount - 1;
  // })
  
  // working decrease
  const decrease = () => setCount(prevCount => {
    if (prevCount <= 0) return 0;
    return prevCount - 1;
  })
  
  return (
    <>
    <Hederlang/>
    <Header/>
        <section>
        <div className="container ">
            <div className="row">
                <div className="col-12 d-flex flex-wrap">
                    <div className="col-md-8 col-sm-12 mb-md-0 mb-3">
                        <div className="order-details d-flex align-items-center col-11 cart shadow-lg p-3 mb-5 bg-body rounded ">
                            <div className="order-details-img  ">
                                <div className="d-flex flex-wrap align-items-center  ">
                                    <div className=" mx-4 col-4 ">
                                        <a>
                                            <img src="" alt="img" className="img-fluid "/> 
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="order-details-items mx-5 col-4 ">
                                <a>
                                    <h6>Chocolate Sponge Gâteau</h6>
                                </a>
                                <p className="mb-3">
                                    price:
                                    <span className="mx-2">17 EGP</span>

                                </p>
                                <p className="order-details-Quantity">Quantity:</p>
                                <div className="product-single-price">
                                    <div className="quantity-input">
                                        <button className="decrease-quan border border-0" onClick={decrease}>
                                            <BsFileMinus/>
                                        </button >
                                        <p className="d-inline d">
                                        <span className="span-count">{count}</span>
                                        </p>
                                        {/* <input type="number"   className="quan-input"/> */}
                                        <button className="increase-quan border border-0" onClick={increase}>
                                            <BsFilePlus/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="delete-cart ">
                                <a>
                                    
                                    <i  ><RiDeleteBin6Line/></i>
                                </a>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-4 col-sm-12 order-info">
                        <div className="col-md-12">
                            <div className="order-summary shadow-sm  ">
                                <h6>Order Summary</h6>
                                <ul>
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>sub Total</span>
                                        <span className="sub-price">68 EGP</span>

                                    </li>
                                    <li className="d-flex flex-wrap justify-content-between mb-2 ">
                                        <span className="total"> Total</span>
                                        <span className="Totla-price">68 EGP</span>

                                    </li>

                                </ul>
                            </div>
                        </div >
                        <div className="col-md-12">
                            <div className="delivered-date">
                                <h6>
                                Delivered Within 60 - 90 Minutes
                                </h6>
                            </div>

                        </div>
                        <div className="col-12">
                            <button className="btn  d-block mt-3 proceed-btn  "> proceed To purchase</button>
                            <button className="btn btn-primary-transparent d-block CONTINUE-btn rounded-0 mt-2">CONTINUE SHOPPING</button>
                            <button className="btn btn- Remove-btn">Remove All</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}
export default Cart