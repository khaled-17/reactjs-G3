import React, { useState, useEffect } from 'react'
import axios from "axios";
import axiosInstance from './../../axios config/axiosInstance';

const Wishlistpart = () => {
    const [loading, setLoading] = useState(false);

    const [posts, setPosts] = useState([]);
    const tokenFromLocal=localStorage.getItem("myAccessToken")
    useEffect(() => {
      axiosInstance({  
    // Endpoint to send files
    url: "/Fav",
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
        console.log(res.data);
        setPosts(res.data);
     })
    // Catch errors if any
    .catch((err) => { });
  },[ ])



    function sayHello(i) { 
      console.log( i);
      
             axiosInstance
             .delete(`/Fav/${i}`,{
                 headers:{token:`token ${tokenFromLocal}`,
                 'Content-Type': 'application/json'}
             } )
             .then((response) => {
                console.log(response);
             let  newposts=posts.filter((post)=>post._id!=i)
             console.log(newposts)
             setPosts(newposts)
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
             
                    
                                   <div className=' mb-3 d-flex  align-items-center  border-secondary border-bottom' >
                                    <div   className='w-25 mx-auto'  ><p className='mx-auto'>المنتج</p></div>
                                    <div   className='w-25 '> <p  ></p> </div>
                                    <div   className='w-25 '><p className='mx-auto'>السعر </p> </div>
                                    <div   className='w-25 '><p>أمر </p> </div>
                                    </div >

                    
                    {posts.map((item) =>
                                    <div className=' mb-3 d-flex  align-items-center  border-secondary border-bottom' >
                                    <div  className=' w-25' style={{ width: '9rem' }}> <img src={item.ProductID.Image.url} class="card-img-top" alt="..." /></div>
                                    <div className=' w-25 mx-5'> <p  >{item.ProductID.EnName}</p> </div>
                                    <div  className=' w-25'><p>{item.ProductID.Price}</p> </div>
                                    <div  className=' w-25'><p><button onClick={() =>sayHello(item._id)}>حذف</button></p> </div>
                                    </div >

                                       
                                     )
                                    
                                }
                        
                       

                 

            </>
    );
}

export default Wishlistpart;
