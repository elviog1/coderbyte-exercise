import React from 'react'
import '../styles/Navbar.css'
export default function Navbar() {
  return (
    <nav className='nav-container'>
        <ul className='nav-ul'>
            <li className='li'>All products</li>
            <li className='li'>Packaging</li>
            <li className='li'>Drinkware</li>
            <li className='li'>Apparel</li>
            <li className='li'>Notebooks</li>
            <li className='li'>Backpaks</li>
        </ul>
    </nav>
  )
}
