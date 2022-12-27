import './Registration.scss';
import React, { useState, useEffect } from "react";
import Hederlang from "../../components/hederlang";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footermain";
import { Link } from "react-router-dom";


const Registration = () => {
  function generateArray(start, end) {
    let arr = [];
    for (start; start <= end; start++) {
      arr.push(start);
    }
    return arr;
  }

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

  const [data, setData] = useState({
    
    "Email":"",
    "Password":""
    
});
const userData = {
  Email: data.Email,
  Password: data.password
};





  //  console.log(a);

  //  {branches.map((item)=>{return <option value="" role="listbox" >{item.branch}</option>})}

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  var validpassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$.%^&*])"
  );

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [errregisterForm, seterrRegisterForm] = useState({
    name: null,
    email: null,
    username: null,
    password: null,
    confpassword: null,
  });
  useEffect(() => {
    console.log(errregisterForm);
    console.log("there is update");
  }, [errregisterForm]);

  const update = (e) => {
    if (e.target.name === "name") {
      setRegisterForm({
        ...registerForm,
        name: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        name: e.target.value === "" ? "this field is required" : null,
      });
    }
    if (e.target.name === "email") {
      setRegisterForm({
        ...registerForm,
        email: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        email:
          e.target.value === ""
            ? "this field is required"
            : !validEmail.test(e.target.value)
            ? "email is not vaild !"
            : null,
      });
    }
    if (e.target.name === "username") {
      setRegisterForm({
        ...registerForm,
        username: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        username:
          e.target.value === ""
            ? "this field is required"
            : registerForm.username.includes(" ")
            ? "the user name should have no spaces"
            : null,
      });
    }
    if (e.target.name === "password") {
      setRegisterForm({
        ...registerForm,
        password: e.target.value,
      });
      seterrRegisterForm({
        ...errregisterForm,
        password:
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
            : e.target.value !== registerForm.password
            ? "passwords dont match !"
            : null,
      });
    }
  };
  const send = (e) => {
    e.preventDefault();
    for (var item in registerForm) {
      console.log(item);
      console.log(registerForm[item]);

      if (registerForm[item] === "") {
        seterrRegisterForm({
          ...errregisterForm,
          name: registerForm.name === "" ? "this field is required" : null,
          email: registerForm.email === "" ? "this field is required" : null,
          username:
            registerForm.username === "" ? "this field is required" : null,
          password:
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
                        value={registerForm.name}
                        className={
                          errregisterForm.name != null
                            ? "border border-danger form-control  Registration-input"
                            : "  Registration-input form-control"
                        }
                        onChange={(e) => update(e)}
                        name="name"
                      />
                      <div class="form-text text-danger">
                        {errregisterForm.name}
                      </div>
                    </div>

                    <div className="form-group mb-3 ">
                      <input
                        type="text"
                        placeholder="Last Name *"
                        // className="form-control Registration-input"
                        className={
                          errregisterForm.username != null
                            ? "border border-danger form-control  Registration-input"
                            : "  Registration-input form-control"
                        }
                        onChange={(e) => update(e)}
                        name="username"
                      />
                      <div id="emailHelp" class="form-text text-danger">
                        {errregisterForm.username}
                      </div>
                    </div>
                    <div className="form-group mb-3 ">
                      <input
                        type="text"
                        placeholder="Email*"
                        // className="form-control Registration-input"
                        className={
                          errregisterForm.email != null
                            ? "border border-danger form-control Registration-input"
                            : " Registration-input form-control"
                        }
                        onChange={(e) => update(e)}
                        name="email"
                      />
                      <div id="emailHelp" class="form-text text-danger">
                        {errregisterForm.email}{" "}
                      </div>
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
                        type="password"
                        placeholder="Password *"
                        // className="form-control Registration-input"
                        className={
                          errregisterForm.password != null
                            ? "border border-danger form-control Registration-input"
                            : " Registration-input form-control"
                        }
                        onChange={(e) => update(e)}
                        name="password"
                        id="exampleInputPassword1"
                      />
                      <div id="emailHelp" class="form-text text-danger">
                        {errregisterForm.password}
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
                          name="customRadioInline1"
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
                     disabled={errregisterForm.name || errregisterForm.confpassword || errregisterForm.password 
                        || errregisterForm.email|| errregisterForm.username }
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
