import React, { useEffect, useState } from 'react'
import '../styles/CardProduct.css'
export default function CardProduct(prod) {
  const products = prod.prod
  const cart = JSON.parse(localStorage.getItem("product")) ? JSON.parse(localStorage.getItem("product")) : [];
  let newCart = cart;
  const [isBought,setIsBought] = useState(false)
  
  const submitProduct = (item)=>{
    const nombreProductoActual = item.name;
    var productInCart = newCart.find(producto => producto.name === nombreProductoActual);

    if (productInCart){
      newCart = newCart.filter(producto => producto.name !== nombreProductoActual);
      localStorage.setItem("product",JSON.stringify(newCart));
      console.log(newCart)
      setIsBought(!isBought)
    }
    else {
      item.quantity = 1;
      newCart.push(item)
      localStorage.setItem("product",JSON.stringify(newCart));
      console.log(newCart)
      setIsBought(!isBought)
    }
  }

  useEffect(()=>{
    console.log(newCart)
  },[isBought])

  return (
    <>
      <h3 className='title-cardProduct'>You might also like</h3>
      <div className='cardProduct-container'>
        {products.map(product => (
          <div className='card-container' key={product.name} onClick={()=> submitProduct(product)}>
            <img className='card-img' alt='product img' src={product.image} />
            <div>
              <span className='card-span'>{product.name}</span>
              <div className='card-price'>
                <span className='card-span'>${product.price}</span>
                <span className='card-span-min'>Minimum: {product.minimum}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
