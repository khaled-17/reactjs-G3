import React from 'react';

const Button = (props) => {
    const btnstyle = {

        backgroundColor: '#6F3C2E',
        // width: '100px',
        color: "#FFF3C9",
        minWidth: '10rem',
        height: '40px',
        lineheight: '38px',
        borderradius: '4px',
        textalign: 'center',
        padding: '0 .7rem',
        letterspacing: '.4px',



    }
    return (
        < >

            <button className='btn' style={btnstyle} type="">{props.name} </button>
        </>
    );
}

export default Button;
