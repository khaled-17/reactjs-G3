import React from 'react';
import Cards from './cards';

const Monthspecials = () => {
    return (
        <div className="card-group">

            {/* <div > */}
            <h1 className='col-12 d-flex justify-content-center'>اختيارنا لهذا الشهر</h1>

            <Cards name='prodect '  />
            <Cards name='prodect '  />
            <Cards name='prodect '  />
            <Cards name='prodect '  />


        </div>
    );
}

export default Monthspecials;
