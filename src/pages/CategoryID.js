import { useSearchParams } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import axios from "axios";
import Cards from './../components/cards';
import Sidebar from './../components/sidebar/sidebar';
import Header from './../components/header/header';
import Footerc from '../components/footer/footerc';
import Footermain from '../components/footer/footermain';
import Loader from '../components/loader/loader';

// import axios from 'axios';
import Hederlang from './../components/hederlang';
import axiosInstance from './../axios config/axiosInstance';
import {
    BrowserRouter as Router, useParams,
} from "react-router-dom";


import { useDispatch, useSelector } from 'react-redux';



const CategoryID = (props) => {



    const hightcost = useSelector((state) => state.counter.hightcost)
    const store = useSelector((state) => state.counter)
    const lowcost = useSelector((state) => state.counter.lowcost)
     console.log(hightcost);
     console.log(lowcost);  

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
 
    const { id } = useParams();

    let [searchParams, setSearchParams] = useSearchParams()

    const theCategorie = searchParams.get("Categorie")
    const theName = searchParams.get("name")

//     console.log(theCategorie,theName)

//    if(theCategorie){
//     console.log('theCategorie')
    
// }else if(theName){
//        console.log('theName')
//    }






    useEffect(() => {
        // console.log(Filter[0].value);

        if(theCategorie){
            // console.log('theCategorie')
            axiosInstance.get("/Product", { params: { Categorie: `${theCategorie}` ,EnName:``} })
            .then((res) => {
                    console.log(res.data);
                    // console.log("res.data");
                    setIsLoading(false)
                    if(posts.length){
                    }  
                    setPosts(res.data)                      
                }).catch((err) => {
                    console.log(err);
                    setIsLoading(true)
                })
     if(posts.length){
        setIsLoading(true)
    
    }



            
        }else if(theName){
            //    console.log('theName')
               axiosInstance.get("/Product", { params: { Categorie:'',EnName:`${theName}`} })
               .then((res) => {
                       console.log(res.data);
                       // console.log("res.data");
                       setIsLoading(false)
                       if(posts.length){
                       }  
                       setPosts(res.data)                      
                   }).catch((err) => {
                       console.log(err);
                       setIsLoading(true)
                   })
        if(posts.length){
           setIsLoading(true)
       
       }




           }

        //    console.log(Filter[0].value);


      

    }, [id,theCategorie,theName,store])


    const languge = JSON.parse(localStorage.getItem('items'));
    

 

   


    return (

        <>
            <Hederlang />
            <Header />


            
            {/* <h3>ID: {id}</h3> */}

            <div className="container-xl  text-center">
                <div className="row">
                    <div className='col-3 filtering-sidebar container d-none d-lg-block d-xl-' controller="List" style={{ height: '500px' }}>


                        <Sidebar />

                    </div>

                    {/* ///////////////////////////////////////////// */}

                    <div className=" col-lg-9   ">



                        <div className="row">

                            <div className="col m-2 text-start">
                                <h6 style={{ fontSize: "1rem", whiteSpace: 'nowrap' }}>Showing {posts.length} product</h6>
                            </div>
                            <div className="col text-center ">

                                <button type="button" className=" d-lg-none   btn btn-sm btn-light" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" ><svg xmlns="http://wwww3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel-fill" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                                </svg> Filter</button>

                            </div>
                            <div className="col  text-end d-flex align-content-center">
                                <h6 style={{ fontSize: "1rem", whiteSpace: 'nowrap' }} className='m-2 '>Sort BY </h6>
                               
                              
                              
                                <select className="form-select-sm btn-sm border-0" style={{ height: '41px' }}>
                                    <option selected="">New Arrivals</option>
                                    <option value="1">from A to Z</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>





                            <div className=" d-flex flex-wrap justify-content-center" >

                                {isLoading ? (
                                    <Loader/>):
                                     (posts
                                     .filter((c) => c.Price < hightcost  )
                                     .filter((c) => c.Price > lowcost  )
                                     .map((item) =>
                                        // Presently we only fetch 
                                        // title from the API 
                                        <div className='p-1 col-6 col-sm-6 col-md-4 col-lg-4' >
                                            {/* {item.Price} */}
                                            <Cards _id={item._id} name={languge === "en" ? item.EnName : item.ArName} img={item.Image.url} prise={item.Price} />
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offcanvas offcanvas-start w-100" tabindex="1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">filter </h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body ">
                        <div>
                            <Sidebar />
                        </div>
                        <div className="dropdown mt-3">
                        </div>
                    </div>
                </div>



            </div>
            <Footermain />
            <Footerc />
        </>

    );
}

export default CategoryID;
