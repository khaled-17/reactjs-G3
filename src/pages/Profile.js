import React, { Component } from 'react';
import Header from './../components/header/header';
import Hederlang from './../components/hederlang';
import ProfilePart from './../components/Profile/ProfilePart';
import Addresspart from './../components/Profile/Addresspart';
import Wishlistpart from './../components/Profile/Wishlistpart';
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";


class Profile extends Component {
    render() {

        return (
            <div>
                <Hederlang />
                <Header />

                <div class="container text-center">
                    <div class="row ">
                        <div class="col-4 shadow-lg  mb-0 bg-white rounded m-1 ">




                            <div class="row ">
                                <div class="col-12 border-bottom">
                                <h7>Hello,خالد</h7>
 
                                 </div>

                                <div class="profile-border-r p-0 m-0 col border-right text-center">
                                    <p style={{fontSize:"1rem"}}>4 In My Wishlist</p>
                                </div> 
                                
                                <div class="col border-left p-0 m-0text-center">
                                    <p  style={{fontSize:".9rem"}}>2 Orders This Month</p> 
                                </div>
                            </div>





                        </div>
                        <div class="col-7 shadow-lg  mb-0 bg-white rounded m-1 ">
                             
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="m-1 btn btn-outline-light active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i style={{ color: "#6f3c2e", fontSize: "18px" }} ><FaUserAlt /></i>Profile</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Address</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Wishlistpart</button>
                        </li>


                    </ul>


                        </div>
                      
                    </div>
                </div>








                <div className='col'>

                   
                </div>

                <div class="tab-content container mt-5" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"><ProfilePart/></div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"><Addresspart/></div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"><Wishlistpart/></div>
                    <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
                </div>


            </div>
        );
    }
}

export default Profile;
