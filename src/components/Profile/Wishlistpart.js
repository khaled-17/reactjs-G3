import React, { useState, useEffect } from 'react'
import axios from "axios";

const Wishlistpart = () => {
    const [loading, setLoading] = useState(false);

    const [posts, setPosts] = useState([]);
    const tokenFromLocal=localStorage.getItem("myAccessToken")
    useEffect(() => {
axios({  
    // Endpoint to send files
    url: "http://localhost:5200/api/elabdfoods/Fav",
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
        axios({
            url: `http://localhost:5200/api/elabdfoods/Fav/${i}`,
            method: "DELETE",
            headers: {
               token:`token ${tokenFromLocal}`  
            },
           })
            // Handle the response from backend here
            .then((res) => {
                console.log(res.data);
                setPosts(res.data);        
             })

             setPosts(
              posts.filter((post) => {
                console.log(post.ProductID._id);

                 return post.ProductID._id !== i;
              })
           );



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
                                    <div  className=' w-25'><p><button onClick={() =>sayHello(item.ProductID._id)}>حذف</button></p> </div>
                                    </div >

                                       
                                     )
                                    
                                }
                        
                       

                 

            </>
    );
}

export default Wishlistpart;
