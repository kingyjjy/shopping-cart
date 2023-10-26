import React from 'react'
import { Row } from 'react-bootstrap'
import {FiXCircle} from 'react-icons/fi'

const Cart = ({id, name, price, image, addToCart, setAddToCart}) => {
    const removeHandler=()=>{
        setAddToCart(addToCart.filter(ct => ct.id !== id));
    }
  return (
    <div className="cartbox">
        <img src={image} alt={name} />
        <div className="cart-text">
            <h5>{name}</h5>
            <p>${price} <FiXCircle className='cart-del' onClick={removeHandler}/></p>
        </div>
    </div>
  )
}

export default Cart