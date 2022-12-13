import { Slider, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { AiOutlineDown } from "react-icons/ai";
import './sidebar.css';


const Sidebar = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);


    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked(!checked);
        setChecked1(!checked1);
        setChecked2(!checked2);
    };
    const [checked1, setChecked1] = React.useState(false);
    const handleChange1 = () => {
        setChecked1(!checked1);
    };
    const [checked2, setChecked2] = React.useState(false);
    const handleChange2 = () => {
        setChecked2(!checked2);
    };
    const [checked3, setChecked3] = React.useState(false);
    const handleChange3 = () => {
        setChecked3(!checked3);
    };

    const [value, setValue] = React.useState([0, 100]);
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };


    const [inpValue1, setInpValue1] = useState()
    const resetForm1 = () => {
        setInpValue1("")
      setChecked(false);
      setChecked1(false);
      setChecked2(false);
      setChecked3(false);
    }

    const [inpValue2, setInpValue2] = useState()
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);
    const [checked6, setChecked6] = React.useState(false);
    const [checked7, setChecked7] = React.useState(false);
    const [checked8, setChecked8] = React.useState(false);
    const [checked9, setChecked9] = React.useState(false);
    const [checked10, setChecked10] = React.useState(false);
    const [checked11, setChecked11] = React.useState(false);
    const [checked12, setChecked12] = React.useState(false);
    const [checked13, setChecked13] = React.useState(false);
    const [checked14, setChecked14] = React.useState(false);

    const handleChange4 = () => {
        setChecked4(!checked4);
    }; const handleChange5 = () => {
        setChecked5(!checked5);
    }; const handleChange6 = () => {
        setChecked6(!checked6);
    }; const handleChange7 = () => {
        setChecked7(!checked7);
    }; const handleChange8 = () => {
        setChecked8(!checked8);
    }; const handleChange9 = () => {
        setChecked9(!checked9);
    }; const handleChange10 = () => {
        setChecked10(!checked10);
    }; const handleChange11 = () => {
        setChecked11(!checked11);
    }; const handleChange12 = () => {
        setChecked12(!checked12);
    }; const handleChange13 = () => {
        setChecked13(!checked13);
    }; const handleChange14 = () => {
        setChecked14(!checked14);
    };
    const resetForm2 = () => {
        setInpValue2("")
      setChecked4(false);
      setChecked5(false);
      setChecked6(false);
      setChecked7(false);
      setChecked8(false);
      setChecked9(false);
      setChecked10(false);
      setChecked11(false);
      setChecked12(false);
      setChecked13(false);
      setChecked14(false);
    }

    const resetForm3 = () => {
        setValue([0, 100]);
    }

    return (<>

        <aside className="filtering-sidebar container" controller="List" style={{ width: "300px" }}>
            <div className="filtering__widget">
                <div data-toggle="collapse" onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text"
                    aria-expanded={open1} href="#catCollapse" role="button" className="filtering__widget-title mb-3 d-flex justify-content-between collapsed">
                    <h5>Category</h5>
                    <i >{AiOutlineDown}</i>
                </div>
                <Collapse in={open1}>
                    <div className="filtering__panel" id="example-collapse-text">
                        <div className="form-group mb-3">
                            <input type="text" placeholder="search" className="form-control" value={inpValue1} onChange={(e) => setInpValue1(e.target.value)}  />
                        </div>
                        <div className="filtering-sidebar-scroll">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkCat29" className="custom-control-input" checked={checked3} onChange={handleChange3} />
                                <label htmlFor="chkCat29" className="custom-control-label">Oriental Sweets</label>
                                <div className="sub-list pl-2">
                                    <div className="form-group custom-control custom-checkbox">
                                        <input type="checkbox" id="chkChildCat30 " checked={checked} onChange={handleChange} className="custom-control-input" value="30" />
                                        <label htmlFor="chkChildCat30" className="custom-control-label">Western Sweets</label>
                                    </div>
                                    <div className="form-group custom-control custom-checkbox" onChange={handleChange1} style={{marginLeft:"10px"}}>
                                        <input type="checkbox" id="chkChildCat33" checked={checked1} className="custom-control-input" value="33" />
                                        <label htmlFor="chkChildCat33" className="custom-control-label ">Gateaux</label>
                                    </div>
                                    <div className="form-group custom-control custom-checkbox" onChange={handleChange2} style={{marginLeft:"10px"}}>
                                        <input type="checkbox" id="chkChildCat42" checked={checked2} className="custom-control-input" value="42" />
                                        <label htmlFor="chkChildCat42" className="custom-control-label ">Cakes</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Collapse>
                <button type="button" className="clear__filter" value="Reset Form" onClick={() => resetForm1()}>Clear</button>
            </div>
            <div className="filtering__widget">
                <div data-toggle="collapse" href="#brandCollapse" role="button" onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2}
                    className="filtering__widget-title mb-3 d-flex justify-content-between collapsed ">
                    <h5>Size</h5>
                    <i>{AiOutlineDown}</i>
                </div>
                <Collapse in={open2}>
                    <div className="filtering__panel" id="example-collapse-text">
                        <div className="form-group mb-3">
                            <input type="text" placeholder="Search" className="form-control" value={inpValue2} onChange={(e) => setInpValue2(e.target.value)} />
                        </div>
                        <div className="filtering-sidebar-scroll">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize130" className="custom-control-input" checked={checked4} onChange={handleChange4} value="130" />
                                <label htmlFor="chkSize130" className="custom-control-label">019</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize90" className="custom-control-input" checked={checked5} onChange={handleChange5}value="90" />
                                <label htmlFor="chkSize90" className="custom-control-label">02</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize131" className="custom-control-input"checked={checked6} onChange={handleChange6} value="131" />
                                <label htmlFor="chkSize131" className="custom-control-label">020</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize88" className="custom-control-input" checked={checked7} onChange={handleChange7}value="88" />
                                <label htmlFor="chkSize88" className="custom-control-label">021</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize105" className="custom-control-input"checked={checked8} onChange={handleChange8} value="105" />
                                <label htmlFor="chkSize105" className="custom-control-label">022</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize141" className="custom-control-input"checked={checked9} onChange={handleChange9} value="141" />
                                <label htmlFor="chkSize141" className="custom-control-label">023</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize109" className="custom-control-input"checked={checked10} onChange={handleChange10} value="109" />
                                <label htmlFor="chkSize109" className="custom-control-label">025</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize120" className="custom-control-input"checked={checked11} onChange={handleChange11} value="120" />
                                <label htmlFor="chkSize120" className="custom-control-label">035</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize142" className="custom-control-input"checked={checked12} onChange={handleChange12} value="142" />
                                <label htmlFor="chkSize142" className="custom-control-label">037</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize89" className="custom-control-input" checked={checked13} onChange={handleChange13}value="89" />
                                <label htmlFor="chkSize89" className="custom-control-label">040</label>
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" id="chkSize100" className="custom-control-input"checked={checked14} onChange={handleChange14} value="100" />
                                <label htmlFor="chkSize100" className="custom-control-label">Default</label>
                            </div>
                        </div>
                    </div>
                </Collapse>
                <button type="button" className="clear__filter" value="Reset Form" onClick={() => resetForm2()}>Clear</button>
            </div>
            <div className="filtering__widget">
                <div data-toggle="collapse" href="#priceCollapse" role="button" onClick={() => setOpen3(!open3)}
                 aria-controls="example-collapse-text" aria-expanded={open3}
                    className="filtering__widget-title mb-3 d-flex justify-content-between">
                    <h5>Price</h5>
                    <i>{AiOutlineDown}</i>
                </div>
                <Collapse in={open3}>
                    <div className="filtering__panel" id="example-collapse-text">
                        <div style={{margin: 'auto',display: 'block', width: "100%"}}>
                            <Typography id="range-slider" gutterBottom style={{color:"white"}}></Typography>
                            <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto"/>
                            <div fragment="1eeb0e19fa" className="slider-result">
                                <span id="minrangeSliderResult">{value[0]} EGP</span> -
                                <span id="maxrangeSliderResult"> {value[1]} EGP</span>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
            <div className="d-flex justify-content-between pt-2">
                <button type="button" className="btn btn-dark" value="Reset Form" onClick={() => resetForm3()}>Reset</button>
                <button type="button" className="btn btn-dark">Filter Now</button>
            </div>
        </aside>















    </>
    );
}

export default Sidebar;
