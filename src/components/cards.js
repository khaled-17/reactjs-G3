import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axiosInstance from './../axios config/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { changeCounter } from '../store/actions/counter';

const Cards = (props) => {
  const { t } = useTranslation();

  const counter = useSelector((state) => state.counter.counter)


  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch()
  const defult = {
    name: "Coodkies Elabd chocolate 6pcs",
     img: "https://elabd.blob.core.windows.net/elabdcontainer/243efe18-09a4-4590-9c5e-1e163e8e0082-638016172405728241.jpeg",
    prise: "45"
  }
  const tokenFromLocal = localStorage.getItem("myAccessToken")
 
  function addToFav(_id) {
    const userData = {
      ProductID: _id,
    };
    console.log(_id);
    // console.log(JSON.stringify(userData))

    axiosInstance
      .post("/Fav", JSON.stringify(userData), {
        headers: {
          token: `token ${tokenFromLocal}`,
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log(response.data);
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

  function addToCart(_id) {
   
    const userData = {
      ProductID: _id,
    };

    console.log(_id);
    // console.log(JSON.stringify(userData))
    axiosInstance
      .post("/Cart", JSON.stringify(userData), {
        headers: {
          token: `token ${tokenFromLocal}`,
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log(response.data);
        axios({  
          // Endpoint to send files
          url: "http://localhost:5200/api/elabdfoods/Cart",
          method: "GET",
          headers: {
            // Add any auth token here
            token:`token ${tokenFromLocal}`  
            },
          // Attaching the form data
          // data: formData,
          })
          // Handle the response from backend here
          .then((res) => {
      
              // console.log(res.data);
              setPosts(res.data);
              let lngth = res.data.length
              // dispatch(changeCounter((lngth)))
              dispatch(changeCounter((lngth)))
          })
          // Catch errors if any
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





    // <div  style={{ maxHeight: "350px" }}>
    // </div>

    // <div class="        border-success ">
    // </div>

    <div class="card shadow  border border-0 p-0 text-center" >

      <ul class="list-group list-group-flush">
        <li class="list-group-item border border-0">
          <div class="d-flex justify-content-center">

            <img style={{ maxHeight: "9rem", width: 'auto' }} src={`${props.img || defult.img}`} class="img-fluid" alt="..." />
          </div>
        </li>

        <li class="list-group-item p-0">
          <p ><Link to={`/Singleproduct/${props._id}`} class="propsName text-decoration-none"> {props.name || defult.name}</Link></p>
          <h5 class="card-prise card-title"><strong class="card-prise">{props.prise || defult.prise} {t('EGP')} </strong></h5>
        </li>


        <li class="list-group-item">
          <div className=" d-flex justify-content-center p-0">
            <button onClick={() => addToCart(props._id)} className="card_btn">
              <svg className="  " xmlns="http:www.w3.org/2000/svg" height="25" fill="currentColor" className="bi bi-basket2-fill" viewBox="0 0 16 16">
                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
              </svg>
            </button>
            <button onClick={() => addToFav(props._id)} className="card_btn">
              <svg className="" xmlns="http:www.w3.org/2000/svg" height="25" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </button>
          </div>
        </li>
      </ul>

    </div>








    // <div class="card  d-flex justify-content-center" style={{ maxWidth: "17rem" }}>

    //     <div class="card-body p-0 d-flex justify-content-center">
    //         <img style={{ maxHeight: "10rem",width: 'auto' }} class="card-img-top " src={`${props.img || defult.img}`} alt="Card image cap" />
    //     </div>


    //     <div class=" d-flex flex-column p-0">
    //         <h5 class="card-title"><Link to="/Singleproduct"> {props.name || defult.name}</Link> </h5>
    //         <h5 class="card-title"><strong>{props.prise || defult.prise} EGP </strong></h5>
    //         <p class="card-text"></p>
    //     </div>

    //         <div className="d-flex justify-content-center p-1">
    //             <button className="card_btn">
    //                 <svg className="mx-2  " xmlns="http://www.w3.org/2000/svg" height="25" fill="currentColor" className="bi bi-basket2-fill" viewBox="0 0 16 16">
    //                     <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
    //                 </svg>
    //             </button>
    //             <button className="card_btn">
    //                 <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" height="25" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
    //                     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
    //                 </svg>
    //             </button>

    //     </div>


    // </div>









  );
}

export default Cards;
{/* <a href="#" class="btn btn-primary">Go somewhere</a> */ }
