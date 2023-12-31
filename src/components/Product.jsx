import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Product = ({
    id, name, price, orPrice, image, setIsInCart, addToCart, setAddToCart
}) => {
    const handleClick = ()=>{
        const newCart= {id,name,price,orPrice,image};
        const prevCart = addToCart;
        setAddToCart([...prevCart, newCart]);
        setIsInCart(true);
    }
  return (
    <div className='product thumbnail'>
        <img src={image} alt='{name}' />
        <h6 className='product_title'>{name}</h6>
        <div className="product_price">
            <span>${price}</span>
            <del>{orPrice}</del>
        </div>
        <Button className='button' variant='primary' onClick={handleClick}>Cart</Button>
    </div>
  )
}

export default Product