import React from 'react'
import  './CheckoutProduct.css'
import {useStateValue} from './StateProvider'

const CheckoutProduct = ({id,title,image,price,rating}) => {
    const [{basket},dispatch]=useStateValue();

    const RemoveFromBasket = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    }
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                {  
                    Array(rating)
                    .fill()
                    .map((_)=>{
                       return (<p>⭐</p>)
                    })
                }
                
            </div>
            <button onClick={RemoveFromBasket}>
                Remove from basket
            </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
