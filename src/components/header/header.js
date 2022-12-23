import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../img/favicon.png";
import { MdLocationPin } from "react-icons/md";
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import './header.css'
import { Button, Container, Dropdown, NavDropdown } from "react-bootstrap";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import { display } from "@mui/system";
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const Header = () => {

  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [drop1, setDrop1] = useState(false);
  const showDropdown1 = (e) => {
    setDrop1(!drop1);
  }
  const hideDropdown1 = e => {
    setDrop1(false);
  }
  const [drop2, setDrop2] = useState(false);
  const showDropdown2 = (e) => {
    setDrop2(!drop2);
  }
  const hideDropdown2 = e => {
    setDrop2(false);
  }
  const [drop3, setDrop3] = useState(false);
  const showDropdown3 = (e) => {
    setDrop3(!drop3);
  }
  const hideDropdown3 = e => {
    setDrop3(false);
  }
  const [drop4, setDrop4] = useState(false);

  const showDropdown4 = (e) => {
    setDrop4(!drop4);
  }
  const hideDropdown4 = e => {
    setDrop4(false);
  }

  const url = "/CategoryID"

  return (<>

    <Navbar bg="light" expand="lg" className="sticky-top transparent-navbar navbar-fixed-top " style={{ height: "110px", top: "0" }}>
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Brand href={url}>
          <img style={{ width: "90px", height: "90px", top: "0" }} loading="lazy" src={img1} alt="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">

          <Nav className="mx-auto flex-wrap">

            <NavDropdown id="navbarScrollingDropdown" show={drop1}
              onMouseEnter={showDropdown1} onMouseLeave={hideDropdown1} title={t(' Wesrern Sweets')} menuVariant="light">
              <div style={{ width: "500px" }}>
                <NavDropdown.Item id="item" href={url}>{t('Gateaux')}</NavDropdown.Item>
                <NavDropdown.Item id="item" href={url}>{t('Cakes')} </NavDropdown.Item>
                <NavDropdown.Item id="item" href={url}>{t('Ice Cream Cake')}</NavDropdown.Item>
              </div>
            </NavDropdown>

            <Nav.Link href={url} className="nav-link" id="navbarScrollingDropdown">{t('Oriental Sweets')}</Nav.Link>
            <Nav.Link href={url} className="nav-link" id="navbarScrollingDropdown">{t('Bakery')}</Nav.Link>

            <NavDropdown id="navbarScrollingDropdown" show={drop2}
              onMouseEnter={showDropdown2} onMouseLeave={hideDropdown2} title= {t('Nuts And Yameesh')}  menuVariant="light">
              <div style={{ width: "500px" }}>

                <NavDropdown.Item id="item" href={url}>{t('Nuts')}</NavDropdown.Item>
                <NavDropdown.Item id="item" href={url}>{t('Yameesh')} </NavDropdown.Item>
              </div>
            </NavDropdown>

            <NavDropdown id="navbarScrollingDropdown" show={drop3}
              onMouseEnter={showDropdown3} onMouseLeave={hideDropdown3} title={t('Kahk And Biscuits')} menuVariant="light">
              <div style={{ width: "500px" }}>  
                <NavDropdown.Item id="item" href={url}>{t('Biscuits')}</NavDropdown.Item>
                <NavDropdown.Item id="item" href={url}>{t('Kahk')} </NavDropdown.Item>
                <NavDropdown.Item id="item" href={url}>{t('Ghorayeba')}</NavDropdown.Item>
                <NavDropdown.Item id="item" href={url}>{t('Petits-fours')}</NavDropdown.Item>
              </div>
            </NavDropdown>

            <NavDropdown id="navbarScrollingDropdown" show={drop4}
              onMouseEnter={showDropdown4} onMouseLeave={hideDropdown4} title= {t('Beverages')} menuVariant="light">
              <div style={{ width: "500px" }}>
                <NavDropdown.Item id="item" href={url}>{t('Hot Drinks')}</NavDropdown.Item>
                <NavDropdown.Item id="item" href={url}>{t('Cold Drinks')} </NavDropdown.Item>
              </div>
            </NavDropdown>

            <Nav.Link href={url} className="nav-link" id="navbarScrollingDropdown">{t('Halawet El Moluled')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ul className="list-unstyled header-actions d-flex mb-0">
          <li>
            <Nav.Link href={url} className="navbar-brand" onClick={handleShow}>
              <i style={{ color: "#6f3c2e", fontSize: "20px" ,marginRight:"0"}}><FaSearch /></i>
            </Nav.Link>
            <Modal show={show} onHide={handleClose} id="modal" >
              {/* <Modal.Header closeButton id="modalheader"></Modal.Header> */}
              <Modal.Body id="modalbody" >
                <Form.Control id="modalinput" type="search" aria-label="Example text with button addon"
                  aria-describedby="basic-addon1" placeholder=" Search for....." autoFocus />
                <Button variant="outline-secondary" id="button-addon1">
                  <i style={{ color: "#6f3c2e", fontSize: "20px" }}><FaSearch /></i>
                </Button>
              </Modal.Body>
            </Modal>
          </li>
          <li>
            <Nav.Link href={url} >
              <i style={{ color: "#6f3c2e", fontSize: "18px" }} ><Link to="/Profile"><FaUserAlt/></Link> </i>
            </Nav.Link>               
          </li>
          <li>
            <Nav.Link href={url} >
              <i style={{ color: "#6f3c2e", fontSize: "23px" }}><FaShoppingBasket />
                <span className="badge rounded-pill" style={{
                  backgroundColor: "#f6b0ab", fontSize: "15px", padding: "1px 5px",
                  verticalAlign: "super", opacity: "1", fontWeight: "100"
                }}>0</span>
              </i>
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