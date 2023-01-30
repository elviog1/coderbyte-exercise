import React, { useEffect, useState } from 'react'
import '../styles/TableCart.css'
import Summary from '../components/Summary'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default function TableCart() {
    const arrayProduct = JSON.parse(localStorage.getItem("product"))
    const priceProduct = arrayProduct?.map(item => item.price).length >1 ? arrayProduct?.map(item => item.price * item.quantity).reduce((a,b) =>a+b,0) : arrayProduct?.map(item => item.price * item.quantity)[0]
    const [quantityBool,setQuantityBool] = useState(false)
    const [deleteProduct,setDeleteProduct] = useState(false)

    const [tableProduct,setTableProduct] = useState(false)
    useEffect(()=>{
      if(arrayProduct){
        setTableProduct(!tableProduct)
      }
    },[])
    const printProduct = (product)=>{
            return (
              <div className='table-cart-box' key={product.name}>
                  <img className='image-cart' alt='image product' src={product.image} />
                  <div className='cart-info'>
                    <div className='cart-price'>
                      <strong>{product.name}</strong>
                      <strong>${product.price}</strong>
                    </div>
                    <div className='cart-price'>
                      <div>
                        <strong>Quantity: {product.quantity}</strong>
                        <div style={{display:"flex",gap:"5px"}}>
                          <AddCircleOutlineIcon style={{cursor:"pointer",fontSize:"30px",color:"green"}} onClick={()=>more(product)} />
                          {product.quantity >1 && <RemoveCircleOutlineIcon style={{cursor:"pointer",fontSize:"30px",color:"red"}} onClick={()=>less(product)} />}
                        </div>
                      </div>
                      <strong >Total: ${(product.quantity * product.price).toFixed(2)}</strong>
                    </div>
                    <p>{product.description}</p>
                    <button className='remove-button' onClick={ ()=> removeProduct(product)}><DeleteForeverIcon /> Remove</button>
                  </div>
              </div>
            )
          }

          const more = (item)=>{
            const nameProduct = item.name
            let quantity = item.quantity
            const copyCart = arrayProduct
            const productModified = copyCart.find(product => product.name === nameProduct)
            productModified.quantity = quantity +1
            localStorage.setItem("product",JSON.stringify(copyCart))
            setQuantityBool(!quantityBool)
          }
          const less = (item)=>{
            const nameProduct = item.name
            let quantity = item.quantity
            const copyCart = arrayProduct
            const productModified = copyCart.find(product => product.name === nameProduct)
            productModified.quantity = quantity -1
            localStorage.setItem("product",JSON.stringify(copyCart))
            setQuantityBool(!quantityBool)
          }

          const removeProduct = (item)=>{
            const nameProduct = item.name
            let copyStorage = arrayProduct
            copyStorage = copyStorage.filter(product => product.name !== nameProduct)
            localStorage.setItem("product",JSON.stringify(copyStorage))
            setDeleteProduct(!deleteProduct)
          }

  return (
    <main className='table-container'>
      <div className='table-product'>
        <h2>your cart ({arrayProduct?.length})</h2>
        { arrayProduct?.map(printProduct)}
      </div>
      <Summary total={priceProduct} quantity={arrayProduct?.length} />
    </main>
  )
}
