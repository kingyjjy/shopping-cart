import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Cart from './Cart';

const CartList = ({addToCart, setAddToCart, closeOpenClick}) => {
  return (
    <>
        <div className="cart_list">
          <ul>
            {
              addToCart.map(mcart =>(
                <li>
                  <Cart key={mcart.id}
                        id={mcart.id}
                        name={mcart.name}
                        price={mcart.price}
                        image={mcart.image}
                        addToCart={addToCart}
                        setAddToCart={setAddToCart}
                  />
                </li>
              ))
            }
          </ul>
          <div className="text-center">
              <Button variant='danger' onClick={closeOpenClick}>닫기</Button>        
            </div>
          
        </div>
          
       
        
    </>
  )
}

export default CartList