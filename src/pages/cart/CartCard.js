import './cart.scss'

import axiosInstance from '../../axios config/axiosInstance';
import React, { useState ,useEffect} from 'react';
import {  RiDeleteBin6Line } from 'react-icons/ri';
import {  BsFilePlusFill ,BsFileMinusFill} from 'react-icons/bs';

const CartCard =(props)=>{
    const countStateArray = useState(1);
    const count = countStateArray[0];
    const setCount = countStateArray[1];


    const increase = () => {
        setCount(count + 1);
      };   

      const decrease = () => setCount(prevCount => {
        if (prevCount <= 1) return 1;
        return prevCount - 1;
      })
     const price= 17;
    
      const total= count * price;



    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     axiosInstance.get("/Product/63a38430a814f8dfd154d065")
    //     .then((res) => {
    //         console.log(res.data);
    //         // console.log("res.data");
                
    //         setPosts(res.data)
    
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    //     // axios.post("url","data",{params:{},headers:{}})
    
    // }, [])


    const defult = {
        Name: "Coodkies Elabd chocolate 6pcs",
        // // img: "https://elabd.blob.core.windows.net/elabdcontainer/243efe18-09a4-4590-9c5e-1e163e8e0082-638016172405728241.jpeg",
        img: "https://elabd.blob.core.windows.net/elabdcontainer/243efe18-09a4-4590-9c5e-1e163e8e0082-638016172405728241.jpeg",
        price: "45"
    }

return(
    <>
    {/* <div className="col-md-8 col-sm-12 mb-md-0 mb-3"> */}
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
                                    <h6 className="order-title"> {props.name || defult.name}</h6>
                                </a>
                                <p className="mb-3 order-price ">
                                    price:
                                    <span className="mx-2"> {props.price || defult.price} EGP</span>

                                </p>



                                
                                <p className="order-details-Quantity">Quantity:</p>
                                <div className="product-single-price">
                                    <div className="quantity-input ">
                                        <button className="decrease-quan border border-0 " onClick={decrease}>
                                            <BsFileMinusFill/>
                                        </button >
                                        <p className="d-inline ">
                                        <span className="span-count">{count}</span>
                                        </p>
                                        {/* <input type="number"   className="quan-input"/> */}
                                        <button className="increase-quan border border-0" onClick={increase}>
                                            <BsFilePlusFill/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="delete-cart d-flex justify-content-end col ">
                                <a>
                                    
                                    <i  ><RiDeleteBin6Line/></i>
                                </a>
                            </div>
                        </div>
                    {/* </div> */}
    
    
    </>
)



}
export default CartCard