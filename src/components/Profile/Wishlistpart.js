import React, { useState, useEffect } from 'react'
import axios from "axios";

const Wishlistpart = () => {
    const [loading, setLoading] = useState(false);

    const [posts, setPosts] = useState([]);

axios({
  
    // Endpoint to send files
    url: "http://localhost:5200/api/elabdfoods/Fav",
    method: "GET",
    headers: {

      // Add any auth token here
      token: "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTFmZjIzNWQzNGZmZjYwNWU0NmNkZSIsIklzQWRtaW4iOmZhbHNlLCJGaXJzdE5hbWUiOiJhc2Rhc2QiLCJpYXQiOjE2NzE1NjEwMDEsImV4cCI6MTY3MjQyNTAwMX0.JJF2N0p0bRUZwEvYGS5TDdjkMIxKxVPek9qSAz-6lIs",
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
 
    function sayHello(i) {
        // useEffect(() => {

        // alert('You clicked me!'+ i);
        axios({
  
            // Endpoint to send files
            url: "http://localhost:5200/api/elabdfoods/Fav/63a20be95d34fff605e49a16?",
            method: "DELETE",
            headers: {
        
              // Add any auth token here
              token: "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTFmZjIzNWQzNGZmZjYwNWU0NmNkZSIsIklzQWRtaW4iOmZhbHNlLCJGaXJzdE5hbWUiOiJhc2Rhc2QiLCJpYXQiOjE2NzE1NjEwMDEsImV4cCI6MTY3MjQyNTAwMX0.JJF2N0p0bRUZwEvYGS5TDdjkMIxKxVPek9qSAz-6lIs",
            },
        
            // Attaching the form data
            // data: formData,
          })
        
            // Handle the response from backend here
            .then((res) => {
                console.log(res.data);
                setPosts(res.data);
        
        
             })



            // }, []);


      }
    return (
        <>
             
                    
                 
                    
                    {posts.map((item) =>
                                    <tr >
                                    <td  style={{ width: '9rem' }}> <img src={item.ProductID.Image} class="card-img-top" alt="..." /></td>
                                    <td style={{   textAlign: 'center' }}> <p  >{item.ProductID.EnName}</p> </td>
                                    <td ><p>{item.ProductID.Price}</p> </td>
                                    <td ><p><button onClick={() =>sayHello(item.ProductID._id)}>Default</button>;</p> </td>
                                    </tr >

                                       
                                     )
                                    
                                }
                        
                       

                 

            </>
    );
}

export default Wishlistpart;
