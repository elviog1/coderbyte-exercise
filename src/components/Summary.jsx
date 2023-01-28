import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles/Summary.css'
export default function Summary(props) {
    let totalPrice = props.total ? props.total : 0
    let quantity = props.quantity 

  return (
    <section className='summary-container'>
        <h3>Order Summary</h3>
        <div className='summary-items'>
            <span>Number of items</span>
            <span>{quantity}</span>
        </div>
        <div className='summary-total'>
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
        </div>
        <Stack spacing={2} direction="column">
            <Button variant="contained">Proceed to Checkout</Button>
            <Button variant="outlined">Continue shopping</Button>
        </Stack>

    </section>
  )
}
