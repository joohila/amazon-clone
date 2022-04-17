import React from 'react'
import './Subtotal.css';
import {useStateValue} from './StateProvider'
import {useHistory} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';

const Subtotal = () => {
    const history = useHistory();
    const [{basket},dispatch]=useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={
                (value)=>{
                   
                    return  (<>
                    <p>
                        Subtotal ({basket.length} items):<strong>{value}</strong> 
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                    </>)
                }
            }
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            prefix={"$"}
            />
            <button onClick={()=>history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
