import React from 'react';
import Rating from './../components/Rating';
import { Button } from 'react-bootstrap';
import Quantity from './../components/quantity ';

const Singleproduct = () => {
    return (
        <>
            <div className='container'>


                <div className="row">

                    <div className="col-6 ">

                        <img className='w-75' src="https://elabd.blob.core.windows.net/elabdcontainer/9282b052-8e08-48b1-9968-58f53ff03ac4-637854438059048202.jpg" alt="" />


                    </div>


                    <div className="col-6  border border-primary">

                        <h5>Cookies Elabd vanilla 2pcs</h5>


                        <div className="d-flex flex-row">
                            <Rating className="border border-primary" />
                            <button className='btn' data-bs-toggle="modal" data-bs-target="#myModal">+ Add Review</button>
                        </div>
                        <div className="d-flex flex-row">
                            <h3>45 EGP</h3>
                            <Quantity />
                        </div>


                    </div>


                </div>
            </div>


            {/* <!-- The Modal --> */}
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Write Review</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <h5>Rate your Product</h5>
                            <form>
                                <Rating className="border border-primary" />
                                <div className="form-group" >
                                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea style={{ height: '100px' }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="modal-footer mx-auto" >
                                    <button type="submit" style={{ background: '#F6B0AB' }} className="btn  mb-1">submit</button>
                                    <button type="button" className="btn btn-dark " data-bs-dismiss="modal">Cancel</button>
                                </div>

                            </form>

                        </div>


                        {/* <!-- Modal footer --> */}

                    </div>
                </div>


            </div>




        </>
    );
}

export default Singleproduct;
