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
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeCounter } from "../../store/actions/counter";
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useTranslation();


  const [show, setShow] = useState(false);
  const [drop1, setDrop1] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const counter = useSelector((state) => state.counter.counter)

  const [value, setValue] = useState([]);
  const [products, setproduct] = useState([]); /////////////////////////////
  const [categories, setcategorie] = useState([]);
  const [subCategories, setsubCategorie] = useState([]);

  const showDropdown1 = (e, id, i) => {
    axios.get(`http://localhost:5200/api/elabdfoods/Categorie/${id}`)
      .then(function (response) {
        // handle success
        let showdrop = drop1.map((isdrp, index) => {
          return (isdrp = false);
        });
        let isDropOpen = showdrop.slice();
        if (subCategories.length > 0) {
          isDropOpen[i] = true;
        } else {
          isDropOpen[i] = false;
        }
        setDrop1(isDropOpen)
        console.log(isDropOpen);
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
    // if (subCategories.length > 0) {
    //   setDrop1(!drop1);
    //   //  e.style.display === "block"
    // }
  }
  const hideDropdown1 = (i) => {
    //   let showdrop = drop1.map((isdrop, index) => {
    //     return (isdrop = false);
    // }); 
    // let isDropOpen = showdrop.slice();
    // isDropOpen[i] = false;
    // setDrop1(isDropOpen)
  }

  const searchData = (vlu) => {
    console.log(vlu);
    axios.get(`http://localhost:5200/api/elabdfoods/Product?EnName=${vlu}`)
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

      const localvlu = JSON.parse(localStorage.getItem('items'))
      setlocalvlu(localvlu);
      
    axios.get('http://localhost:5200/api/elabdfoods/Categorie')
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
      
        url: "http://localhost:5200/api/elabdfoods/Cart",
        method: "GET",
        headers: {
          token:`token ${tokenFromLocal}`
          },
       
        })
       
        .then((res) => {
        
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
          <Nav className="mx-auto flex-wrap" style={{ fontSize: "14px" }}>
            {categories.map((categorie, index) => {
              if (localvlu == "en") {
                return (
                  <NavDropdown id="navbarScrollingDropdown" show={drop1[index]}
                    onMouseEnter={e => showDropdown1(e.target, categorie._id, index)} onMouseLeave={hideDropdown1} key={categorie._id} title={categorie.CatEnName} menuVariant="light">
                    <div style={{ width: "500px" }} >
                      {subCategories.map((subCategorie, index) => {
                          return <NavDropdown.Item id="item" href={`/CategoryID?Categorie=${categorie._id}`} key={subCategorie._id}>{subCategorie.SubCat.EnsubCatName}</NavDropdown.Item>
                      })}
                    </div>
                  </NavDropdown>
                )
              } else if (localvlu == "ar") {
                return (
                  <NavDropdown id="navbarScrollingDropdown" show={drop1[index]}
                    onMouseEnter={e => showDropdown1(e.target, categorie._id, index)} onMouseLeave={hideDropdown1} key={categorie._id} title={categorie.CatArName} menuVariant="light">
                    <div style={{ width: "500px" }} >
                      {subCategories.map((subCategorie, index) => {
                          return <NavDropdown.Item id="item" href={`/CategoryID?Categorie=${categorie._id}`} key={subCategorie._id}>{subCategorie.SubCat.ArsubCatName}</NavDropdown.Item>
                      })}
                    </div>
                  </NavDropdown>
                )
              }

            })}

          </Nav>
        </Navbar.Collapse>
        <ul className="list-unstyled header-actions d-flex mb-0" style={{ width: "90px" }}>
          <li style={{ marginRight: "0px", marginLeft: "15px" }}>
            <Nav.Link href={url} className="navbar-brand" onClick={handleShow}>
              <i style={{ color: "#6f3c2e", fontSize: "18px", marginRight: "0" }}><FaSearch /></i>
            </Nav.Link>
            <Modal show={show} onHide={handleClose} id="modal" style={{ marginRight: "0" }} >
              <Modal.Body id="modalbody">
                <Form.Control id="modalinput" type="search" aria-label="Example text with button addon"
                  aria-describedby="basic-addon1" value={value} onChange={(e) => setValue(e.target.value)} placeholder=" Search for....." autoFocus />
                <Button variant="outline-secondary" id="button-addon1">
                  <Nav.Link to="/CategoryID">
                    <i style={{ color: "#6f3c2e", fontSize: "20px" }} onClick={() => { searchData(value) }} >  <Link to={`/CategoryID?name=${value}`}><FaSearch /></Link></i>
                  </Nav.Link>
                </Button>
              </Modal.Body>
            </Modal>
          </li>
          <li>
            <Nav.Link href="/Profile" >
              <i style={{ color: "#6f3c2e", fontSize: "16px" }} ><FaUserAlt /></i>
            </Nav.Link>
          </li>
          <li style={{ marginRight: "0px" }}>
            <Nav.Link href="/Cart" >
              <i style={{ color: "#6f3c2e", fontSize: "20px" }}>
                <FaShoppingBasket />
              </i>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link href="/Cart" >
              <span className="badge rounded-pill" style={{
                backgroundColor: "#f6b0ab", fontSize: "13px", padding: "1px 5px",
                opacity: "1", fontWeight: "100"
              }}>{counter}</span>
            </Nav.Link>
          </li>
          <li className="d-flex">
            <Nav.Link href={url}>
              <i style={{ color: "#6f3c2e", fontSize: "20px" }} ><MdLocationPin /></i>
            </Nav.Link>
          </li>
        </ul>
      </Container>
    </Navbar>
  </>
  )
}



export default Header;