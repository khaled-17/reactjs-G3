import React, { useState } from 'react';
// import './Checkout.css';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Loader from '../components/loader/loader';

import { useDispatch, useSelector } from 'react-redux';
 

const Checkout = (props) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const Total = useSelector((state) => state.counter.Total)
       console.log(`${Total}`)
       console.log(Total)

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    }

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: Total.toFixed(0)

                    },
                },
            ],
        });
    }




    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }





    return (
        <div className="checkout ">
            {/* {props.totalx} */}
            {isPending ? <Loader /> : (
                <>
                    <select value={currency}  className='mb-2' onChange={onCurrencyChange}>
                        <option value="USD">💵 USD</option>
                        <option selected value="EUR">💶 Euro</option>
                    </select>
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                </>
            )}
        </div>
    );
}

export default Checkout;