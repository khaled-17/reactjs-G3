import './cart.scss'

import {  RiDeleteBin6Line } from 'react-icons/ri';
import {  BsFilePlusFill ,BsFileMinusFill} from 'react-icons/bs';
import React, { useState ,useEffect, useRef} from 'react';
import Hederlang from '../../components/hederlang'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footermain'
import axios from "axios";
import axiosInstance from '../../axios config/axiosInstance';
// import CartCard from './CartCard';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { changeCounter } from '../../store/actions/counter';


const Cart = ()=> {
    
     const inputRef = useRef();
    const counter = useSelector((state) => state.counter.counter)

    const dispatch = useDispatch()

         
//   const countStateArray = useState(1);
// //   const count = countStateArray[0];
// let count=1

//   const setCount = countStateArray[1];
  
  const [count ,setcount]=useState([])
  // const increase = () => {
  //   setCount(prevCount => prevCount + 1)
  //   setCount(prevCount => prevCount + 1)    
  // };
  
//   const increase = (id) => {;
//  if(id){
//     // setCount(count+1)
//     console.log(id)
//     ++count
//  }
  
//   inputRef.current.innerText=count
//   console.log(inputRef.current.innerText || 'not set')
 
// // setCount(count + 1);
//   }; 
function handleIncrement(cart_id){
    setcount(cart =>
         cart.map( (item ,index) => 
             cart_id === item.ProductID._id ? {...item, Amount: item.ProductID.Amount + (item.ProductID.Amount < 10 ? 1:0)} : item
        )
    );
    
  
}
  
  // broken decrease
  // const decrease = () => setCount(prevCount => {
  //   if (prevCount <= 0) return;
  //   return prevCount - 1;
  // })
  
  // working decrease
  const decrease = () => setcount(prevCount => {
    if (prevCount <= 1) return 1;
    return prevCount - 1;
  })
 let price= 0;

  let total = 0
 


const [posts, setPosts] = useState([]);
  

// const params= useParams() 
// 63a38430a814f8dfd154d065


// ${params.id}?
const tokenFromLocal=localStorage.getItem("myAccessToken")
useEffect(() => {
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
    console.log(res.data)

    let lngth = res.data.length
    dispatch(changeCounter((lngth)))

})
.catch((err) => { });
},[ ])



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
    <div class="col-8">

      One of three columns
      {posts.map((item) =>
                    <div className=" mb-3">
                        <div className="order-details d-flex align-items-center col-11 cart shadow-lg p-3 mb-5 bg-body rounded ">
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
                                        <span  ref={inputRef} className="span-count">{count}</span>
                                        </p> 
                                         <button className="increase-quan border border-0" onClick={()=> handleIncrement(item._id)}>
                                            <BsFilePlusFill/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="delete-cart d-flex justify-content-end col ">
                                <a onClick={()=>deleteHandler(item._id)}>
                                    
                                    <i><RiDeleteBin6Line/></i>
                                </a>
                            </div>
                        </div>
                                   </div>
)}

    </div>
    <div class="col-4">

      One of three columns
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