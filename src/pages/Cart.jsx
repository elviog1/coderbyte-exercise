import React from 'react'
import CardProduct from '../components/CardProduct'
import Navbar from '../components/Navbar'
import TableCart from '../components/TableCart'
import {data} from '../products'
import '../styles/Cart.css'
export default function Cart() {
  return (
    <div className='cart-container'>
        <Navbar />
        <TableCart />
        <CardProduct prod={data} />
    </div>
  )
}
