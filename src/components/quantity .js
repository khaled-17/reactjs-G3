import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './btn.css'
const Quantity = () => {


  const btn = {
    height: '20px',
    width: '90px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#6F3C2E',
    boxShadow: '0 5px 10px rgba(0,0,0,0.2)',


  }
  const span = {
    width: '100%',
    textAlign: ' center',
    // fontSize: ' 30px',
    // fontWeight: ' 500',
    cursor: ' pointer',
    userSelect: ' none',
  }
  const num = {
    // fontSize: '30px',
    borderRight: '2px solid rgba(0,0,0,0.2)',
    borderLeft: '2px solid rgba(0,0,0,0.2)',
    pointerEvents: 'none',
    width: '40px',
    height: '20px',

  }



  const [count, setcount] = useState(0);
  function increment() { 
    setcount(count + 1)
   }
  function decrement() {
    // setcount(count - 1) 
    setcount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });



  }



  return (
    <section class=' d-flex flex-row align-items-center'>
    {/* // <section> */}
           
          <button onClick={increment} className="buttonQuantity" aria-controls="q_number_t" id="increase_t" aria-label="increase quantity">+</button>
          
          <input className="inputQuantity" type="text" id="q_number_t" value={count} 
                 data-increase="increase_t" data-decrease="decrease_t"
                 aria-live="assertive" aria-relevant="additions" 
                 aria-atomic="true" aria-label="quantity"/>
          
          <button onClick={decrement} className="buttonQuantity" aria-controls="q_number_t" id="decrease_t" aria-label="decrease quantity">-</button>
          
         









      {/* <p style={{height:'10px'}}>
                    <label>Quantity:</label>
                    <button  style={btn} onClick={decrement} ><AiOutlineMinus/>	</button>
                    // <input type="number"  value={count} />
                    <button    onClick={increment}  ><AiOutlinePlus/></button>
                    
                  </p> */}
      {/* <p class="m-1">Quantity </p>
      <div class="wrapper " style={btn}>
        <button onClick={decrement} style={span} class="button-Quantity" >-</button>
         <input style={span, num} type="number" value={count} />
 
        <button onClick={increment} style={span} class="button-Quantity">+</button>
      </div> */}

    </section>
  );
}

export default Quantity;
