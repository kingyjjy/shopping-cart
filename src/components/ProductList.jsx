import React from 'react'
import './product.css'
import Proptypes from 'prop-types'
import Product from './Product'
import data from '../data/products'


const ProductList = ({
  setIsInCart, addToCart, setAddToCart
}) => {
  return (
    <div>
        <h3>Products</h3>
        <ul className="product_list">
            {data.map(product => (
              <li key={product.id} className='product_list_item'>
                <Product {...product} 
                  setIsInCart={setIsInCart}
                  setAddToCart={setAddToCart}
                  addToCart={addToCart}
                  />
              </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductList