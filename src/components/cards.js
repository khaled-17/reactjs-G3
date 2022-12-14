import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {

    const mystyle = {
        //  margin:'1px',
        boxShadow: '1px 3px 5px #888888',
        minWidth: '250px',
        // maxWidth:   '380px',
        // width:' 100%',
        maxWidth: '210px',
        height: 'auto',






    };
    const Text = {

        color: "#7D3C2E",



    };

    const defult = {
        name: "Coodkies Elabd chocolate 6pcs",
        // img: "https://elabd.blob.core.windows.net/elabdcontainer/243efe18-09a4-4590-9c5e-1e163e8e0082-638016172405728241.jpeg",
        img: "https://elabd.blob.core.windows.net/elabdcontainer/243efe18-09a4-4590-9c5e-1e163e8e0082-638016172405728241.jpeg",
        prise: "45"
    }


    return (

       

             <div class="card" style={{width: "18rem"}}> 
                <img class="card-img-top" src={`${props.img || defult.img}`} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title"><Link to="/Singleproduct"> {props.name || defult.name}</Link> </h5>
                    <h5 class="card-title"><strong>{props.prise || defult.prise} EGP </strong></h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            /* <ul className="list-group list-group-flush">
                <div style={{ height: "140px" }} >

                    <img className="  imgcarda card-img-top" src={`${props.img || defult.img}`} alt="Card image cap" />
                </div>

                <div style={Text} className="text-center list-group-item d-flex flex-column justify-content-center ">

                    <p className='prd-name'> <Link to="/Singleproduct">     {props.name || defult.name}</Link> </p>
                    <strong>{props.prise || defult.prise} EGP </strong>





                </div>

                <li className="list-group-item d-flex justify-content-center">

                    <button className="card_btn">

                        <svg className="mx-2  " xmlns="http://www.w3.org/2000/svg" height="25" fill="currentColor" className="bi bi-basket2-fill" viewBox="0 0 16 16">
                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
                        </svg>


                    </button>

                    <button className="card_btn">

                        <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" height="25" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </button>



                </li>


            </ul> */
        /* </div> */







    );
}

export default Cards;
