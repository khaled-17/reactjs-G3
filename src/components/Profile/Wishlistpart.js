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
 
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col" style={{   textAlign: 'center' }}>Item(S)</th>
                        <th scope="col" style={{   textAlign: 'center' }}>name</th>
                        <th scope="col" >Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody >
                    
                    <tr >
                        <td  style={{ width: '9rem' }}> <img src="https://elabd.blob.core.windows.net/elabdcontainer/2a237402-f1c8-4cb8-ae6d-5053a7742b2a-638015354367135941.jpeg" class="card-img-top" alt="..." /></td>
                        <td style={{   textAlign: 'center' }}> <p  >Cookies Elabd vanilla 6pcs</p> </td>
                        <td ><p>10egp</p> </td>
                        <td ><p>Cookies Elabd vanilla 6pcs</p> </td>
                    </tr >
                    
                    {loading ? (
                                    <h1>hhhhh</h1>) :
                                    (posts.map((item) =>
                                    <tr >
                                    <td  style={{ width: '9rem' }}> <img src={item.ProductID.Image} class="card-img-top" alt="..." /></td>
                                    <td style={{   textAlign: 'center' }}> <p  >{item.ProductID.EnName}</p> </td>
                                    <td ><p>{item.ProductID.Price}</p> </td>
                                    {/* <td ><p>{item.ProductID.Price}</p> </td> */}
                                    </tr >

                                       
                                     )
                                    )
                                }
                        
                       

                </tbody>

            </table>
        </div>
    );
}

export default Wishlistpart;
