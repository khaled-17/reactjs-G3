import React, { useState, useEffect } from 'react'


import elabdlogo from "./Elabd-Logo.png";
import { FaUser } from "react-icons/fa";
import "./zone.scss";
import { Link } from "react-router-dom";
import { Trans, withTranslation,useTranslation } from 'react-i18next';
import Hederlang from '../../components/hederlang'


// let arr =["6th of October City","El Shikh Zayed ","Nasr Ciry",]
const Zone = () => {
  const { t } = useTranslation();
  const branches = [
    {
      id: 1,

      branch: "6th of October City",
    },
    {
      id: 2,

      branch: "El Shikh Zayed ",
    },
    {
      id: 3,

      branch: "Nasr Ciry",
    },
    {
      id: 4,
      branch: "Haram-King Faisal",
    },
    {
      id: 5,
      branch: "Heliopolis",
    },
    {
      id: 6,
      branch: "Giza - Downtown",
    },
    {
      id: 7,
      branch: "5th settlement",
    },
    {
      id: 8,
      branch: "Mohandseen - Dokki",
    },
    {
      id: 9,
      branch: "Shobra",
    },
    {
      id: 10,
      branch: "Alobour",
    },
    {
      id: 11,
      branch: "Mokatam",
    },
    {
      id: 12,
      branch: "Alf Maskan",
    },
    {
      id: 13,
      branch: "Nasr City -Al Hay Al Asher",
    },
    {
      id: 14,
      branch: "Hadayek Alahram",
    },
  ];
  // const branchname= branches.map((branch)=>(

  //     <option>{branch.branch}</option>
  // ))
  console.log(branches);
  const [toggle, settoggel]=useState('none !important')
  

  return (
    <>
          <Hederlang/>

      <div></div>

      <nav className="navbar zone-nav fixed-top mt-3">
        <div className="container">
          <Link className="navbar-brand" to="/Login">
            <img className=" img-fluid " src={elabdlogo} alt="Elabd Logo" />
          </Link>
          {/* <a className="navbar-brand nav-icon" href="multiCollapseExample1">

      <FaUser/> */}
          {/* <a className="navbar-brand nav-icon"  data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
      <FaUser/> */}
{/* 
          <div
            className=" btn  nav-icon border border-0"
            // type="button"
            // role="button"
            data-bs-toggle="dropdown"
            // data-bs-display="static"
            // aria-expanded="false"
            // aria-controls="multiCollapseExample1"
          >
            <FaUser />

            <div className="row">
              <div className="col dropdown-center  ">
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end  mt-3 ">
                  <div className=" card-body p-2">
                    <Link to="/Login" className="btn dropdown-item icon-btn">
                       {t('login')}
                    </Link>

                    <span>
                      <p className="or-span">or</p>
                    </span>
                    <Link
                      to="/Registration"
                      className="btn dropdown-item icon-btn"
                    >
                      create Account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}



          <div class="dropdown drop  dropdown-center  "
           type="button"
          role="button"
          aria-expanded="false"
          //  data-bs-toggle="dropdown"
          aria-controls="multiCollapseExample1"
          onClick={()=>{settoggel(!toggle=='none '?'block !important':'none !important');console.log(toggle)}}

>
            <button
              class="btn dropdown  dropdown-center border border-0 nav-icon "
           
            >
            <FaUser />
            </button>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end  d-flex  flex-column  w-75" style={{display:toggle}}>
            
              <li>
              <Link to="/Login" className="btn dropdown-item icon-btn mx-2  ">
                       {t('login')}
                    </Link>
              </li>
              <li>
              <span>
                      <p className="or-span">or</p>
                    </span>
              </li>
              <li>
              <Link
                   to="/Registration"
                      className="btn dropdown-item icon-btn mx-2 "
                    >
                    {t('create Account')}
                    </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div class="btn-group">
  <a className=" btn dropdown-toggle  nav-icon " type="button" data-bs-toggle="dropdown"  data-bs-display="static"  aria-expanded="false" >
      <FaUser/>

  
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
  </a>
</div> */}

      {/* Search part */}

      <div className="container search col-12">
        <h3 className="search-title ">
          {t('Select your Zone to start enjoying our Delivery service')}
        </h3>

        <form className="row  align-items-center ">
          <div className="col-10  search-bar">
            <label className="visually-hidden" htmlFor="inlineFormSelectPref">
              Preference
            </label>

            <select
              className="form-select "
              data-live-search="true"
              id="inlineFormSelectPref"
            >
              {/* <input type="search" tabIndex="0" autoCorrect="off" autoCapitalize="none" spellCheck="false"  role="searchbox" aria-autocomplete='list' autoComplete="off"  /> */}
              {/* <input type="search" class="selectpicker"  /> */}
              <option selected disabled>
               {t('search for Zone')}
              </option>
              {branches.map((item, idx) => {
                return (
                  <option key={idx} value="" role="listbox">
                    {item.branch}
                  </option>
                );
              })}
              {/* <option value="2" role="listbox">Two</option>
      <option value="3">Three</option> */}
            </select>
          </div>

          {/*   
  <div class="container mt-5">
  <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
  </select>
</div> */}
          <div className="col-2 ">
            <Link to="/Home" type="submit" className="btn Gobtn ">
            {t('Go')}
            </Link>
          </div>
        </form>
      </div>

      {/* ////////End of search part//////// */}

      <footer className=" ">
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-12 footer__copyrights-content ">
              <p className="my-2">
               {t('© 2022 ELAbd Patisserie- All Rights Reserved')}
              </p>
              <p className="my-2">
                {t('Powered By') }
                <a href="https://linktsp.com/" className="color-heading">
                  Link TSP
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Zone;
