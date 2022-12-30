import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../img/favicon.png";
import { MdLocationPin } from "react-icons/md";
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import './header.css'
import { Button, Container, NavDropdown } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
 import axiosInstance from './../../axios config/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeCounter } from "../../store/actions/counter";

const Header = () => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [drop1, setDrop1] = useState(false);
 
  const counter = useSelector((state) => state.counter.counter)

  const [value, setValue] = useState([]);
  const [products, setproduct] = useState([]);
  const [categories, setcategorie] = useState([]);
  const [subCategories, setsubCategorie] = useState([]);

  const showDropdown1 = (e, id) => {
    axiosInstance.get(`/Categorie/${id}`)
      .then(function (response) {
        // handle success
        console.log(response.data.SubCategorieID);
        setsubCategorie(response.data.SubCategorieID);
      })
      .catch(function (err) {
        // handle error
        console.log(err.request);
      })
      .finally(function () {
        // always executed
      });
    if (subCategories.length > 0) {
      setDrop1(!drop1);
    //  e.style.display === "block"
    }
  }
  const hideDropdown1 = e => {
    setDrop1(false);
  }

  const searchData = (vlu) => {

     console.log(vlu);
     axiosInstance.get(`/Product?EnName=${vlu}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setproduct(response.data);
      })
      .catch(function (err) {
        // handle error
        console.log(err.request);
      })
      .finally(function () {
        // always executed
      });
  }

   const [localvlu, setlocalvlu] = useState([]);
   const [posts, setPosts] = useState([]);
   const dispatch = useDispatch()
   const tokenFromLocal=localStorage.getItem("myAccessToken")
//   useEffect(() => {
//  console.log(counter)
//     const items = JSON.parse(localStorage.getItem('items'));
//     if (items) {
//   const [localvlu, setlocalvlu] = useState(JSON.parse(localStorage.getItem('items')))

  useEffect(() => {
    // Make a request for a user with a given ID             
    axiosInstance.get('/Categorie')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setcategorie(response.data);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      })
      .finally(function () {
        // always executed
      });
      axios({  
        // Endpoint to send files
        url: "http://localhost:5200/api/elabdfoods/Cart",
        method: "GET",
        headers: {
          // Add any auth token here
          token:`token ${tokenFromLocal}`  
          },
        // Attaching the form data
        // data: formData,
        })
        // Handle the response from backend here
        .then((res) => {
        
            // console.log(res.data);
            setPosts(res.data);
            let lngth = res.data.length
            dispatch(changeCounter((lngth)))
        
        })
        // Catch errors if any
        .catch((err) => { });
  }, []);

  const url = "#"

  return (<>

    <Navbar bg="light" expand="lg" className="sticky-top transparent-navbar navbar-fixed-top " style={{ height: "100px", top: "0" }}>
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Brand href={url}>
          <img style={{ width: "90px", height: "90px", top: "0" }} loading="lazy" src={img1} alt="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">

          <Nav className="mx-auto flex-wrap" style={{ fontSize: "15px" }}>
            {categories.map((categorie, index) => {
              return (
                <NavDropdown id="navbarScrollingDropdown" show={drop1}
                  onMouseEnter={e => showDropdown1(e.target, categorie._id) } onMouseLeave={hideDropdown1} key={categorie._id} title={categorie.CatEnName} menuVariant="light">
                  <div style={{ width: "500px" }}>
                    {subCategories.map((subCategorie, index) => {
                      return <NavDropdown.Item id="item"  href={`/${categorie._id}`} key={subCategorie._id} >{subCategorie.SubCat.EnsubCatName}</NavDropdown.Item>
                    })}
                  </div>
                </NavDropdown>
              )
            })}
          </Nav>
        </Navbar.Collapse>
        <ul className="list-unstyled header-actions d-flex mb-0" style={{ width: "100px" }}>
          <li style={{ marginRight: "0px", marginLeft: "15px" }}>
            <Nav.Link href={url} className="navbar-brand" onClick={handleShow}>
              <i style={{ color: "#6f3c2e", fontSize: "20px", marginRight: "0" }}><FaSearch /></i>
            </Nav.Link>
            <Modal show={show} onHide={handleClose} id="modal" style={{ marginRight: "0" }} >
              <Modal.Body id="modalbody">
                <Form.Control id="modalinput" type="search" aria-label="Example text with button addon"
                  aria-describedby="basic-addon1" value={value}  onChange={(e) => setValue(e.target.value)} placeholder=" Search for....." autoFocus />
                <Button variant="outline-secondary" id="button-addon1">
                  <Nav.Link to="/pageofproduct">
                    <i style={{ color: "#6f3c2e", fontSize: "20px" }} onClick={()=> {searchData(value)}} ><FaSearch /></i>
                  </Nav.Link>
                </Button>
              </Modal.Body>
            </Modal>
          </li>
          <li>
            <Nav.Link href={url} >
              <i style={{ color: "#6f3c2e", fontSize: "18px" }} ><FaUserAlt /></i>
            </Nav.Link>
          </li>
          <li style={{ marginRight: "0px" }}>
            <Nav.Link href={url} >
              <i style={{ color: "#6f3c2e", fontSize: "23px" }}>
                <FaShoppingBasket />
              </i>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link href={url} >
              <span className="badge rounded-pill" style={{
                backgroundColor: "#f6b0ab", fontSize: "15px", padding: "1px 5px",
                opacity: "1", fontWeight: "100"
              }}>{counter}</span>
            </Nav.Link>
          </li>
          <li className="d-flex">
            <Nav.Link href={url}>
              <i style={{ color: "#6f3c2e", fontSize: "25px" }} ><MdLocationPin /></i>
            </Nav.Link>
          </li>
        </ul>
      </Container>
    </Navbar>
  </>
  )
}

export default Header;