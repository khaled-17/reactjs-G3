import React,{useState,useEffect} from 'react';
import Rating from './../components/Rating';
import Footermain from './../components/footer/footermain';
import Carousels from './../components/Carousel';
import ProductSlider from './../components/productSlider/productSlider';


import AddReview from './../components/addReview';



import Footerc from './../components/footer/footerc';

import { Button } from 'react-bootstrap';
import Quantity from './../components/quantity ';
import { AiOutlineHeart } from "react-icons/ai";
import { FaShuttleVan } from 'react-icons/fa';
import Header from './../components/header/header';
import "../App.css";
import axiosInstance from './../axios config/axiosInstance';
import { useParams } from 'react-router';

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
    // console.log(window.location.href);
    const curntURL = window.location.href
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    const [img, setImg] = useState();

useEffect(() => {
axiosInstance.get(`/Product/${id}`,{})
.then((res) => {
console.log(res.data);
console.log( res.data.Image);
setPosts(res.data)
setImg(posts.Image.url);


}).catch((err) => {
console.log(err);
})
// axios.post("url","data",{params:{},headers:{}})

}, [id])








    return (
        <>
            <Header />
                                 
            <div className='container'>


                <div className="row">

                    <div className="col-5 ">

                        <img className='w-75'src={img}  alt="" />
   {/* <h1>{posts.Image.url}</h1> */}
                                       

                    </div>


                    <div className="col-7  border-start">

                        <h5>{posts.EnName}</h5>


                        <div className="d-flex flex-row">
                            <Rating />
                            <span className=" mx-2">|</span>
                            <AddReview/>




























                        </div>
                        <div className="d-flex flex-row">
                            <h3>{posts.Price} eg</h3>
                            <Quantity />

                        </div>
                        <div>
                            <select name="cars" id="cars">
                                <option value="volvo">200 gm</option>
                                <option value="saab">400 gm</option>
                            </select>
                        </div>
                        <button  class="btn d-block  w-75 my-2  button-prod"  style={{backgroundColor:'rgb(111, 60, 46)' ,color:"white"}} > add to cart</button>
                        {/* <button class="btn btn-primary w-75  border-0 button-prod2"> One click order</button> */}
                        {/* <div class="alert alert-secondary w-75" >
                            <p class="m-0"> <span class="fw-semibold">Shipment Fees :</span>  15 EGP</p>
                            <p class="m-0"><span class="fw-semibold">Address :</span>  ,,,,,,llllk-جرين ٤-Egypt</p>

                        </div> */}

                        <div class="alert m-0 alert-secondary d-flex justify-content-around p-0" style={alerth} role="alert">

                            <p class=""   >
                                <span class="">
                                    <span class="bg-secondary  rounded-5  text-white " style={icon}>
                                        <FaShuttleVan />
                                    </span >
                                    <span class="fw-semibold fs-6"> Delivered Within :</span>
                                </span> Delivered Within

                            </p>

                            <div>
                                <a class="m-3 fb-xfbml-parse-ignore text-secondary" target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=https://YOUR-SITE-HERE.com" + curntURL}><svg xmlns="http://www.w3.org/2000/svg" height="26" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg></a>
                                <a class="twitter-share-button text-secondary" target="_blank" href={"https://twitter.com/intent/tweet?url=" + curntURL + "&hashtags=elabdfoods"}><svg xmlns="http://www.w3.org/2000/svg" height="26" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg></a>
                            </div>



                            <div>
                                <p class="ms-auto"><AiOutlineHeart />Add To Wish list</p>
                            </div>





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
            <h2 className='m-4 col-12 d-flex justify-content-center'>You may be interested in</h2>
            {/* <ProductSlider/> */}

            <Carousels />
            <h2 className='m-4 col-12 d-flex justify-content-center'>Who Viewed This Viewed That</h2>

            <Carousels />

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
