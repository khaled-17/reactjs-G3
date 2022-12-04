import React, { useState } from 'react';

const Quantity = () => {

    const btn = {
        padding: '0',
        margin: '0',
        borderStyle: 'none',
        touchAction: 'manipulation',
        display: 'inline-block',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
    }

    const qty = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign: 'center',
        background: '#575757'

    }

    const [count, setcount] = useState(1);
    function increment() {

        setcount(count + 1)

        console.log("d");
        console.log(count);
    }



    return (


        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setcount(count + 1)}>
          Click me
        </button>
      </div>
        // <section>
        //     <form action="">
        //         <p style={qty}>
        //             {/* <label for="qty">Quantity:</label> */}
        //             {/* <button style={btn} className="qtyminus" aria-hidden="true">-</button> */}
        //             <input type="number" name="qty" id="qty" min="1" max="10" step="1" value={count} />
        //             <button onClick={increment}  >=+</button>
        //         </p>
        //     </form>
        // </section>
    );
}

export default Quantity;
