import React from 'react';

const Wishlistpart = () => {
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col" style={{   textAlign: 'center' }}>Item(S)</th>
                        <th scope="col" style={{   textAlign: 'center' }}>name</th>
                        <th scope="col" >Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody >
                    <tr >
                        <td  style={{ width: '9rem' }}> <img src="https://elabd.blob.core.windows.net/elabdcontainer/2a237402-f1c8-4cb8-ae6d-5053a7742b2a-638015354367135941.jpeg" class="card-img-top" alt="..." /></td>
                        <td style={{   textAlign: 'center' }}> 
                        <p  >Cookies Elabd vanilla 6pcs</p> 
                            
                        
                        </td>
                        <td ><p>10egp</p> </td>
                        <td ><p>Cookies Elabd vanilla 6pcs</p> </td>
                    </tr>

                </tbody>

            </table>
        </div>
    );
}

export default Wishlistpart;
