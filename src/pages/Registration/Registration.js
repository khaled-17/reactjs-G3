// import "./Registration.scss";
import React, { useState } from 'react';

 
const Registration = () => {
  
  function generateArray(start,end){         
    let arr = [];
    for(start; start <= end; start++){
      arr.push(start);
    }
    return arr;
 }
 
 const months =  ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; 
 //1-31
 const days = generateArray(1,31);
 //1900-today
 const years = generateArray(1962,2022);
{months.map((item)=>{return <option value="" role="listbox" >{item}</option>})}
{days.map((item)=>{return <option value="" role="listbox" >{item}</option>})}
{years.map((item)=>{return <option value="" role="listbox" >{item}</option>})}


//  console.log(a);

//  {branches.map((item)=>{return <option value="" role="listbox" >{item.branch}</option>})}

 

  return (
    <>
   
      <div className="Registration px-5 pt-5 ">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row  ">
            <div className="col-12">
              <div className=" mw-550 mx-2 shadow-sm p-3 mb-5 bg-body rounded ">
                <div className="card-body mx-5 mw-550  ">
                  <h4 className="mb-4 text-center create-title">
                    {" "}
                    Create a New Account
                  </h4>
                  <form className="mw-450 ">
                    <div className="form-group mb-3 ">
                      <input
                        type="text"
                        placeholder="First Name *"
                        className="form-control Registration-input"
                      />
                    </div>

                    <div className="form-group mb-3 ">
                      <input
                        type="text"
                        placeholder="Last Name *"
                        className="form-control Registration-input"
                      />
                    </div>
                    <div className="form-group mb-3 ">
                      <input
                        type="text"
                        placeholder="Email Name *"
                        className="form-control Registration-input"
                      />
                    </div>
                    <div className="form-group mb-3 ">
                      <input
                        type="text"
                        placeholder="Mobile *"
                        className="form-control Registration-input"
                      />
                    </div>
                    <div className="form-group mb-3 ">
                      <input
                        type="text"
                        placeholder="Password *"
                        className="form-control Registration-input"
                      />
                    </div>
                    <div className="form-group mb-3 ">
                      <input
                        type="text"
                        placeholder="Confirm Password *"
                        className="form-control Registration-input"
                      />
                    </div>
                    <div className="row mb-2 ">
                      <div className="col-4">
                        <div className="form-group">
                          <select id="" className="form-control">
                            <option selected disabled>
                              Birth Day
                            </option>
                            {days.map((item)=>{return <option value="" role="listbox" >{item}</option>})}
                          </select>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <select id="" className="form-control">
                            <option selected disabled>
                              Month
                            </option>
                            {months.map((item)=>{return <option value="" role="listbox" >{item}</option>})}
                          </select>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <select id="" className="form-control">
                            <option selected disabled>
                              Year
                            </option>
                            {years.map((item)=>{return <option value="" role="listbox" >{item}</option>})}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group d-flex align-items-center mx-3 pb-2">
                      <label htmlFor="genderSelect" className="mb-0 mr-4">
                        Gender :
                      </label>
                      <div className="custom-control mx-3 custom-radio custom-control-inline  ">
                        <input
                          type="radio"
                          className="custom-control-input mx-2"
                          value="1"
                          id="customRadioInline1"
                          name="customRadioInline1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadioInline1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="custom-control mx-3 custom-radio custom-control-inline ">
                        <input
                          type="radio"
                          className="custom-control-input mx-2"
                          value="2"
                          id="customRadioInline2"
                          name="customRadioInline2"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadioInline2"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                    <div className="form-group custom-control custom-checkbox  terms ">
                      <input
                        type="checkbox"
                        id="terms"
                        className="custom-control-input mx-2 "
                      />
                      <label
                        className="custom-control-label text-dark font-weight-bold text-sm "
                        htmlFor="terms"
                      >
                        I Have Read and Agree On The 
                      </label>
                      <a href="#" className="Terms-link  ">
                         Terms and Conditions of The Website*{" "}
                      </a>
                    </div>
                    <div className="form-group custom-control custom-checkbox mb-2">
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="custom-control-input mx-2"
                      />
                      <label
                        className="custom-control-label text-dark font-weight-bold text-sm"
                        htmlFor="newsletter"
                      >
                        Subscribe to our Newsletters
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn  btn-block mb-3 w-100 creat-btn text-light"
                    >
                      Create New Account
                    </button>
                    <p className="text-md ">
                      If You have an Account
                      <a href="#" className="Login-link">
                        {" "}
                        Log in
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
