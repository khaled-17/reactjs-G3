import './cart.scss'

import {  RiDeleteBin6Line } from 'react-icons/ri';
import {  BsFilePlusFill ,BsFileMinusFill} from 'react-icons/bs';
import React, { useState ,useEffect} from 'react';
import Hederlang from '../../components/hederlang'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footermain'
import axios, { Axios } from "axios";
import axiosInstance from '../../axios config/axiosInstance';
// import CartCard from './CartCard';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { changeCounter } from '../../store/actions/counter';


const Cart = ()=> {
    
    
    const counter = useSelector((state) => state.counter.counter)

    const dispatch = useDispatch()

         
  const countStateArray = useState(1);
  const count = countStateArray[0];
  const setCount = countStateArray[1];
  
  // const increase = () => {
  //   setCount(prevCount => prevCount + 1)
  //   setCount(prevCount => prevCount + 1)    
  // };
  
  const increase = () => {
    setCount(count + 1);
    setTotal(count * price)

  }; 
  
  // broken decrease
  // const decrease = () => setCount(prevCount => {
  //   if (prevCount <= 0) return;
  //   return prevCount - 1;
  // })
  
  // working decrease
  const decrease = () => setCount(prevCount => {
    if (prevCount <= 1) return 1;
    return prevCount - 1;
  })
//  let price= 0;

//   let total = 0
 


const [posts, setPosts] = useState([]);
// var total=0;
// var price=0;
const [total, setTotal] = useState(0);
const [price, setPrice] = useState(0);



  

// const params= useParams() 
// 63a38430a814f8dfd154d065


// ${params.id}?
const tokenFromLocal=localStorage.getItem("myAccessToken")
useEffect(() => {
    axiosInstance({  
// Endpoint to send files
url: "/Cart",
method: "GET",
headers: {
  token:`token ${tokenFromLocal}`  
  },
})
.then((res) => {
    setPosts(res.data);
    console.log(res.data)

    let lngth = res.data.length
    dispatch(changeCounter((lngth)))

})
.catch((err) => { });
},[ ])

console.log(posts);

function deleteHandler(id){
    console.log( id);
    const tokenFromLocal=localStorage.getItem("myAccessToken") 
    axiosInstance
    .delete(`/Cart/${id}`,{
        headers:{token:`token ${tokenFromLocal}`,
        'Content-Type': 'application/json'}
    } )
    .then((response) => {
        axios({  
            // Endpoint to send files
            url: "http://localhost:5200/api/elabdfoods/Cart",
            method: "GET",
            headers: {
              token:`token ${tokenFromLocal}`  
              },
            })
            .then((res) => {
                setPosts(res.data);
                let lngth = res.data.length
                dispatch(changeCounter((lngth)))
            })
            .catch((err) => { });
    
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log("server responded");
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    });
}
  
  return (
    <>
    <Hederlang/>
    <Header/>
        <section>
  
        <div class="container">
  <div class="row">
    <div class="col-8 mt-5">

      {posts.map((item) =>
                    <div className=" mb-3">
                        <div className="order-details d-flex align-items-center col-11 cart shadow-lg p-3 mb-4 bg-body rounded ">
                            <div className="order-details-img  ">
                                <div className="d-flex flex-wrap align-items-center  ">
                                    <div className=" mx-4 col-4 ">
                                        <a>
                                            <img src={item.ProductID.Image.url} alt="img" className="img-fluid "/> 
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="order-details-items mx-5 col-4 ">
                                <a>
                                    <h6 className="order-title">{item.ProductID.EnName}</h6>
                                </a>
                                <p className="mb-3 order-price ">
                                    price:
                                    <span className="mx-2">{item.ProductID.Price}</span>

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
                                         <button className="increase-quan border border-0" onClick={increase}>
                                            <BsFilePlusFill/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="delete-cart d-flex justify-content-end col ">
                                <a onClick={()=>deleteHandler(item._id)}>
                                    
                                    <i  ><RiDeleteBin6Line/></i>
                                </a>
                            </div>
                        </div>
                                   </div>
)}

    </div>
    <div class="col-4 mt-5">

      <div className="  order-info">
                        <div className="col-md-12">
                            <div className="order-summary shadow-sm  ">
                                <h6>Order Summary</h6>
                                <ul>
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>sub Total</span>
                                        <span className="sub-price">{price}</span>

                                    </li>
                                    <li className="d-flex flex-wrap justify-content-between mb-2 ">
                                        <span className="total"> Total</span>
                                        <span className="Totla-price">{total}</span>

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
                            <button className="btn  d-block mt-3 proceed-btn  " data-bs-toggle="modal" data-bs-target="#exampleModal"> Complete Order</button>
                            <button className="btn btn-primary-transparent d-block CONTINUE-btn rounded-0 mt-2">CONTINUE SHOPPING</button>
                            <button className="btn btn- Remove-btn">Remove All</button>

                        </div>

                    </div>
    </div>
    
  </div>
</div>










    
    </section>
    <Footer/>
 

<div class="modal" tabindex="-1" id="exampleModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p>Order Created successfully Delivered Within 60 - 90 Minutes </p>
<p>total price= {total}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"   data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={deleteHandler}>Done</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
export default Cart