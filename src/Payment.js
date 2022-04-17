import React,{useState} from "react";
import {Link} from 'react-router-dom'
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import {cardElement,useStripe,useElements, CardElement} from '@stripe/react-stripe-js'
import './Payment.css'

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  
  const stripe = useStripe();
  const elements = useElements();

  const [errpr,setError] = useState(null);
  const [disabled,setDisabled] = useState(true);

  const handleSubmit =()=>{

  }

  const handleChange = (event)=>{
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  return (
    <div className="payment">
      <div className="payment_container">
          <h1 >
              Checkout 
              {<Link to="/checkout"> {basket?.length} items
              </Link>}
          </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h1>Delievery Addresss</h1>
          </div>
          <div className="payment_address">
            <p>{user?.email} </p>
            <p>Address,Address</p>
            <p>Los Angeles,CA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment_items">
              {console.log('here basket',basket)}
            {basket?.map((item) => {
              return (<CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />)
            })}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h1>Payment Method</h1>
          </div>
          <div className="payment_details">
            {/* <h2>payment details</h2> */}
            <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>
                <div className="payment_priceContainer">
                    
                </div>    
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
