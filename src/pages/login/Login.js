import "./login.scss";
import elabdlogo from "../../images/Elabd-Logo.png";
import axios from "axios";
import { Trans, withTranslation,useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaFacebookSquare,
  FaUnlockAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
 import { Link } from "react-router-dom";
import useLocalStorage from './../../hooks/useLocalStorage'
import { useHistory } from "react-router-dom";


// import elabdlogo from'../../images/Elabd-Logo.png'
 import React, { useEffect , useState } from 'react';
import axiosInstance from './../../axios config/axiosInstance';





 ////
const Login = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const [passtype, setpasstype] = useState("password");
  const [loginform, setloginform] = useState({
    email: "",
    password: "",
  });
  const [errors, seterrors] = useState({
    email: null,
    password: null,
  });



  /////////////// login

  const [data, setData] = useState({
    
      "Email":"",
      "Password":""
      
  });
  

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });

    if (e.target.name === "Email") {
      setData({
        ...data,
        Email: e.target.value,
      });
      seterrors({
        ...errors,
        email:
          validEmail.test(e.target.value) === false
            ? "please write a vaild email !"
            : null,
      });
    } else if (e.target.name === "password") {
      setData({
        ...data,
        password: e.target.value,
      });
      seterrors({
        ...errors,
        password:
          e.target.value.length < 8
            ? "password should have more than 8 charctricts"
            : null,
      });
    }
  };




  const [AccessToken, setAccessToken] = useState('')
  // const history = useHistory()

 
    useEffect(() => {
      
    }, []);
    
   
  

  const submitForm = (e) => {
    e.preventDefault();


    const userData = {
      Email: data.Email,
      Password: data.password
    };
    console.log(JSON.stringify(userData))
// console.log(JSON.stringify(userData))
axiosInstance
      .post("/User/Login", JSON.stringify(userData),{headers:{'Content-Type': 'application/json'}} )
      .then((response) => {
        setAccessToken(response.data.AccessToken)
        window.location.href = '/';
        console.log(response.data.AccessToken);
        localStorage.setItem('myAccessToken', response.data.AccessToken);
        navigate('/')
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

    for (var item in data) {
      console.log(item);

      if (data[item] === "") {
        seterrors({
          ...errors,
          email: data.Email === "" ? "this field is required" : null,
          password: data.password === "" ? "this field is required" : null,
        });
        return 0;
      }
    }
    console.log(loginform);
  };
//////
 
  const [formValues, setFormValues] = useState([]);
  const [value, setValue] = useLocalStorage("formValues", "")

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);


 

  function update(e) {
    if (e.target.name === "email") {
      setData({
        ...data,
        email: e.target.value,
      });
      seterrors({
        ...errors,
        email:
          validEmail.test(e.target.value) === false
            ? "please write a vaild email !"
            : null,
      });
    } else if (e.target.name === "password") {
      setData({
        ...loginform,
        password: e.target.value
      })
      seterrors({
        ...errors,
        password:
          e.target.value.length < 8 ? "password should have more than 8 charctricts" : null
      })
    }
  }
  // function showpass(e){

  //     if (e.target.checked === true){
  //      setpasstype("text")
  //       console.log(passtype)
  //     } else {
  //         setpasstype("password")
  //     }
  // }


  return (
    <>

      <div className="container login-container d-flex justify-content-center  align-items-center justify-content-center " >
        <form className='col-7 text-center rounded ' onSubmit={(e) => submitForm(e)}>
          <div>
            <a className="navbar-brand login-icon " href="#">
              {/* <img className=" img-fluid "  src={elabdlogo} alt="Elabd Logo"/> */}
            </a>

            <div class="input-group mb-3">
              <div class="form-floating ">
                {/* <label for="floatingInputGroup1">Email</label> */}
              </div>
            </div>
            {/* <div class="input-group mb-3">
              <span class="input-group-text iput-icon border border-0 "><HiMail /></span>
              <input type="email" className="form-control input border border-0"
                id="email" placeholder="Email" value={loginform.email} name="email" onChange={(e) => update(e)}/>
            </div>
            <div className="text-danger text-left mt-1">
              {errors.email}
            </div> */}

            <div class="input-group ">
              <span class="input-group-text iput-icon border border-0 ">
                <HiMail />
              </span>
              <input
                type="Email"
                className="form-control input border border-0"
                id="Email"
                placeholder="Email"
                // value={loginform.email}
                name="Email"
                // onChange={(e) => update(e)}
                value={data.Email}
            onChange={(e)=>handleChange(e) }
              />
            </div>
            <div className="text-danger text-left ">{errors.email}</div>

            <div class="input-group mt-3 ">
              <span class="input-group-text iput-icon border border-0 ">
                <FaUnlockAlt />
              </span>

              <input
                // type={passtype}
                className="form-control  input border border-0 "
                id="password"
                placeholder="password"
                // name="password"
                // onChange={(e) => update(e)}

                type={"password"||{passtype}}
            name="password"
            value={data.password}
            onChange={handleChange}
              />
            </div>
                          <div className="text-danger">{errors.password}</div>

            {/* <input className='mt-2 m-2' type={'checkbox'}  onChange={ (e)=> showpass(e)} />   */}
            {/* <label htmlFor="password"> show password </label> */}

            <p className="forget-pass">
              <a href="#" className="forget-pass">
              forget password?
              </a>
            </p>
          </div>
          <Link
            type="submit"
            className="btn login-btn "
            disabled={errors.email && errors.password == null ? true : false}
            onClick={submitForm}
            to="/Home"
          >
            
            Login
          </Link>

          <Link
            type="submit"
            className="btn CreatAcc-btn mb-2 "
            disabled={errors.email && errors.password == null ? true : false}
            to="/Registration"
          >
            {" "}
            Create Account{" "}
          </Link>
          <span className="mt-4  mx-3">or</span>

          <div>
            <a className="navbar-brand " href="#">
              <span className="facebook-icon"><FaFacebookSquare /></span> </a>
            <span className="twitter-icon"><FaTwitterSquare /></span>
          </div>
          {/* <Link className='btn btn-outline-dark mt-3 m-2 ' to={'/register'}>  New user </Link> */}
        </form>
      </div>

      <footer className=" login-Footer ">
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-12 footer__copyrights-content ">
              <p className="my-2">© 2022 ELAbd Patisserie- All Rights Reserved</p>
              <p className="my-2">Powered By <a href="https://linktsp.com/" className="color-heading">Link TSP</a>
              </p>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Login;
