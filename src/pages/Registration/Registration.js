import "./Registration.scss";
import React, { useState, useEffect } from "react";
import Hederlang from "../../components/hederlang";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footermain";
import { Link } from "react-router-dom";
import axios from "axios";
import useLocalStorage from './../../hooks/useLocalStorage'
import { useNavigate } from "react-router-dom";
const Registration = () => {
  function generateArray(start, end) {
    let arr = [];
    for (start; start <= end; start++) {
      arr.push(start);
    }
    return arr;
  }
  let navigate = useNavigate();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  //1-31
  const days = generateArray(1, 31);
  //1900-today
  const years = generateArray(1962, 2022);
  {
    months.map((item) => {
      return (
        <option value="" role="listbox">
          {item}
        </option>
      );
    });
  }
  {
    days.map((item) => {
      return (
        <option value="" role="listbox">
          {item}
        </option>
      );
    });
  }
  {
    years.map((item) => {
      return (
        <option value="" role="listbox">
          {item}
        </option>
      );
    });
  }

  //  console.log(a);

  //  {branches.map((item)=>{return <option value="" role="listbox" >{item.branch}</option>})}

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  var validpassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$.%^&*])"
  );
  // const [AccessToken, setAccessToken] = useState('')
  // localStorage.setItem('myAccessToken', AccessToken);
  
  const [registerForm, setRegisterForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    // confpassword:"",
    MobileNumber:"",
    Gender:""
  });
  const [errregisterForm, seterrRegisterForm] = useState({
    FirstName: null,
    Email: null,
    LastName: null,
    Password: null,
    MobileNumber:null,
    confpassword: null,
    Gender:null,
  });
  useEffect(() => {
    console.log(errregisterForm);
    console.log("there is update");
  }, [errregisterForm]);

  const update = (e) => {
    console.log(JSON.stringify(registerForm) )
    if (e.target.name === "FirstName") {
      setRegisterForm({
        ...registerForm,
        FirstName: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        FirstName: e.target.value === "" ? "this field is required" : null,
      });
    }
    if (e.target.name === "Email") {
      setRegisterForm({
        ...registerForm,
        Email: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        Email:
          e.target.value === ""
            ? "this field is required"
            : !validEmail.test(e.target.value)
            ? "email is not vaild !"
            : null,
      });
    }
    if (e.target.name === "LastName") {
      setRegisterForm({
        ...registerForm,
        LastName: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        LastName:
          e.target.value === ""
            ? "this field is required"
            : registerForm.LastName.includes(" ")
            ? "the user name should have no spaces"
            : null,
      });
    }

      if (e.target.name === "MobileNumber") {
      setRegisterForm({
        ...registerForm,
        MobileNumber: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        MobileNumber:
          e.target.value === ""
            ? "this field is required"
            : registerForm.MobileNumber.includes(" ")
            ? "the user name should have no spaces"
            : null,
      });
    }

    if (e.target.name === "Password") {
      setRegisterForm({
        ...registerForm,
        Password: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        Password:
          e.target.value === ""
            ? "this field is required"
            : e.target.value.length < 8
            ? "the password should have more than 8 characters"
            : !validpassword.test(e.target.value)
            ? " the password is shoud have contains at least one lowercase , one uppercase , at least one digit and special character"
            : null,
      });
    }
    if (e.target.name === "confpassword") {
      seterrRegisterForm({
        ...errregisterForm,
        confpassword:
          e.target.value === ""
            ? "this field is required"
            : e.target.value !== registerForm.Password
            ? "passwords dont match !"
            : null,
      });
    }

    if (e.target.name === "Gender") {
      setRegisterForm({
        ...registerForm,
        Gender: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        Gender:
          e.target.value === ""
            ? "this field is required"
            : registerForm.Gender.includes(" ")
            ? "the user name should have no spaces"
            : null,
      });
    }
  };
  const send = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:5200/api/elabdfoods/User/Register", JSON.stringify(registerForm),{headers:{'Content-Type': 'application/json'}} )
    .then((response) => {
      // setAccessToken(response.data.AccessToken)
      // localStorage.setItem('myAccessToken', AccessToken);
      
      console.log(response)
      navigate('/Login')
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

    for (var item in registerForm) {
      console.log(item);
      console.log(registerForm[item]);

      if (registerForm[item] === "") {
        seterrRegisterForm({
          ...errregisterForm,
          FirstName: registerForm.FirstName === "" ? "this field is required" : null,
          Email: registerForm.Email === "" ? "this field is required" : null,
          LastName:
            registerForm.LastName === "" ? "this field is required" : null,
          Password:
            registerForm.password === "" ? "this field is required" : null,
        });
        return 0;
      }
    }
    console.log(registerForm);
  };

  return (
    <>
      <Hederlang />
      <Header />

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
                  <form className="mw-450 " onSubmit={(e) => send(e)}>
                    <div className="form-group mb-3 ">
                      <input
                        type="text"
                        placeholder="First Name *"
                        // className="form-control Registration-input"
                        value={registerForm.FirstName}
                        className={
                          errregisterForm.FirstName != null
                            ? "border border-danger form-control  Registration-input"
                            : "  Registration-input form-control"
                        }
                        onChange={(e) => update(e)}
                        name="FirstName"
                      />
                      <div class="form-text text-danger">
                        {errregisterForm.FirstName}
                      </div>
                    </div>

                    <div className="form-group mb-3 ">
                      <input
                        type="text"
                        placeholder="Last Name *"
                        // className="form-control Registration-input"
                        className={
                          errregisterForm.LastName != null
                            ? "border border-danger form-control  Registration-input"
                            : "  Registration-input form-control"
                        }
                        onChange={(e) => update(e)}
                        name="LastName"
                      />
                      <div id="emailHelp" class="form-text text-danger">
                        {errregisterForm.LastName}
                      </div>
                    </div>
                    <div className="form-group mb-3 ">
                      <input
                        type="text"
                        placeholder="Email*"
                        // className="form-control Registration-input"
                        className={
                          errregisterForm.Email != null
                            ? "border border-danger form-control Registration-input"
                            : " Registration-input form-control"
                        }
                        onChange={(e) => update(e)}
                        name="Email"
                      />
                      <div id="emailHelp" class="form-text text-danger">
                        {errregisterForm.Email}{" "}
                      </div>
                    </div>
                    <div className="form-group mb-3 ">
                      <input
                        type="text"
                        placeholder="Mobile *"
                        className="form-control Registration-input"
                         onChange={(e) => update(e)}
                        name="MobileNumber"
                      />
                    </div>
                    <div className="form-group mb-3 ">
                      <input
                        type="password"
                        placeholder="Password *"
                        // className="form-control Registration-input"
                        className={
                          errregisterForm.Password != null
                            ? "border border-danger form-control Registration-input"
                            : " Registration-input form-control"
                        }
                        onChange={(e) => update(e)}
                        name="Password"
                        id="exampleInputPassword1"
                      />
                      <div id="emailHelp" class="form-text text-danger">
                        {errregisterForm.Password}
                      </div>
                    </div>
                    <div className="form-group mb-3 ">
                      <input
                        type="password"
                        placeholder="Confirm Password *"
                        // className="form-control Registration-input"
                        className={
                          errregisterForm.confpassword != null
                            ? "border border-danger form-control Registration-input"
                            : "Registration-input form-control"
                        }
                        onChange={(e) => update(e)}
                        name="confpassword"
                      />
                    </div>
                    <div className="row mb-2 ">
                      <div className="col-4">
                        <div className="form-group">
                          <select id="" className="form-control">
                            <option selected disabled>
                              Birth Day
                            </option>
                            {days.map((item) => {
                              return (
                                <option value="" role="listbox">
                                  {item}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <select id="" className="form-control">
                            <option selected disabled>
                              Month
                            </option>
                            {months.map((item) => {
                              return (
                                <option value="" role="listbox">
                                  {item}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <select id="" className="form-control">
                            <option selected disabled>
                              Year
                            </option>
                            {years.map((item) => {
                              return (
                                <option value="" role="listbox">
                                  {item}
                                </option>
                              );
                            })}
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
                          value="male"
                          id="customRadioInline1"
                          onChange={(e) => update(e)}
                          name="Gender"
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
                          value="female"
                          id="customRadioInline2"
                          onChange={(e) => update(e)}
                          name="Gender"
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
                      className="btn  btn-block mb-3 w-100 creat-btn text-light btn-dark"
                     disabled={errregisterForm.name || errregisterForm.confpassword || errregisterForm.Password 
                        || errregisterForm.email|| errregisterForm.LastName }
                    >
                      Create New Account
                    </button>
                    <p className="text-md ">
                      If You have an Account
                      <Link to="/Login" className="Login-link">
                        {" "}
                        Log in
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
